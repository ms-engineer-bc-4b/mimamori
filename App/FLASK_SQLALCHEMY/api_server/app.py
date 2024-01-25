from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from database import init_db, db
from models import SeniorUser
from datetime import datetime
import pyrebase
import json

#ユーザー情報取得のための整理
with open("firebaseConfig.json") as f:
    firebaseConfig = json.loads(f.read())
firebase = pyrebase.initialize_app(firebaseConfig)
auth = firebase.auth()



def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    init_db(app)

    @app.route('/')
    def index():
        return 'HELLO'
    
    #TEST 
    @app.route('/api/allUser', methods=['GET'])
    def select_all():
        senior_users = SeniorUser.query.all()
        result = [{"senior_user_id": user.senior_user_id,"senior_last_name":user.senior_last_name} for user in senior_users]
        return jsonify(result)
    #TEST
    @app.route('/api/allUser/<int:senior_user_id>', methods=['GET'])
    def select_by_id(senior_user_id):
        user = SeniorUser.query.get(senior_user_id)
        if user:
            result = {"senior_user_id": user.senior_user_id,"senior_last_name":user.senior_last_name}
            return jsonify(result)
        else:
            return jsonify({"error": "User not found"}), 404


    #TEST-seniorlogin
    # /api/senior/login

    # ログイン時の認証トークンをnext.js側で保持する必要があり。その場合は以下のようなコードで実装

    # ユーザーログインエンドポイント
    @app.route('/senior_login', methods=['POST'])
    
    def login():
        data = request.form
        try:
            user = auth.sign_in_with_email_and_password(data['senior_email'], data['senior_password'])
            # app.logger.debug(user)
            # IDトークンもレスポンスに含める
            id_token = user['idToken']
            return jsonify({"message": "Login successful", "userId": user['localId'], "token": id_token}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 400

    # ログイン認証tokenを利用したユーザー情報取得エンドポイント
        # get_user() 関数で Authorization ヘッダーをチェックしています。
        # しかし、POST リクエストでは、Authorization ヘッダーが自動的に設定されません。
        # そのため、POST リクエストで Authorization ヘッダーを指定するには、
        # 以下のように request.headers オブジェクトに Authorization キーを追加します。

    @app.route('/senior_user', methods=['GET', 'POST'])
    def get_user():

        token = request.headers.get("Authorization")   
            # トークンをとってくる
                # キーに対してバリューが入ってない
        if not token:
            return jsonify({"error": "Authorization token not provided"}), 401
        try:
        # app.logger.debug('token')
        # token = request.headers['Authorization']
            # トークンを検証
            user = auth.get_account_info(token)
            user_id = user['users'][0]['localId']

            # ユーザー情報を取得
            user_data = auth.get_user(user_id)
            return jsonify({"senior_email": user_data.email, "uid": user_data.uid}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 401
        


#         # @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'GET':
#         return render_template("login.html",msg="")

#     email = request.form['email']
#     password = request.form['password']
#     try:
#         user = auth.sign_in_with_email_and_password(email, password)
#         session['usr'] = email
#         return redirect(url_for('index'))
#     except:
#         return render_template("login.html", msg="メールアドレスまたはパスワードが間違っています。")

# @app.route("/", methods=['GET'])
# def index():
#     usr = session.get('usr')
#     if usr == None:
#         return redirect(url_for('login'))
#     return render_template("index.html", usr=usr)

# @app.route('/logout')
# def logout():
#     del session['usr']
#     return redirect(url_for('login'))
        

# ログアウト機能

# ユーザーに紐づく情報を取得するAPI：入力するため
    # @app.route('/senior_user', methods=['GET', 'POST'])
    # def get_user():
    #     token = request.headers.get('Authorization')
    #     # token = request.headers['Authorization']
    #     app.logger.debug(['Authorization'])
    #     if not token:
    #         return jsonify({"error": "Authorization token not provided"}), 401
    #     try:
    #         # トークンを検証
    #         user = auth.get_account_info(token)
    #         user_id = user['users'][0]['localId']

    #         # ユーザー情報を取得
    #         user_data = auth.get_user(user_id)
    #         return jsonify({"senior_email": user_data.email, "uid": user_data.uid}), 200
    #     except Exception as e:
    #         return jsonify({"error": str(e)}), 401
# 
        
# 患者様の情報登録フォーム用のAPI



#必要なもの
    #@app.route('/api/register', methods=['POST'])
    #@app.route('/api/register/{family_id}', methods=['PUT','GET'])
    #@app.route('/api/register/{family_id}', methods=['PUT'])



    return app

app = create_app()

# if __name__ == '__main__':
#     app.run()
   
if __name__ == '__main__':
    app.run(debug=True)
