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
        # POST リクエストでは、Authorization ヘッダーが自動的に設定されん。=>POST リクエストで Authorization ヘッダーを指定するには、
        # 以下のように request.headers オブジェクトに Authorization キーを追加。

    @app.route('/senior_user_id', methods=['GET', 'POST'])
    def get_user():
        #データ型が持つプロパティ（変数）または関数を確認する
        # data = request.get_json()
        # data = request.form
        # app.logger.debug('request')
        # token = get.headers(data['Authorization'])
        token = request.headers.get("Authorization",None)
        app.logger.debug('token')
        # get() メソッドは、Flask の Request オブジェクトに存在しますが、get.headers() は存在しません。
        # request.get.headers('Authorization') は、Request オブジェクトの get() メソッドと headers() メソッドを連結したものですが、これは意味がありません。

        # token = request.headers.get("Authorization")   
            # トークンをとってくる
                # キーに対してバリューが入ってない
        if not token:
            return jsonify({"error": "Authorization token not provided"}), 401
        try:
       
        # token = request.headers['Authorization']
            # トークンを検証
            user = auth.get_account_info(token)
            user_id = user['users'][0]['localId']

            # ユーザー情報を取得
            user_data = auth.get_user(user_id)
            return jsonify({"senior_email": user_data.email, "uid": user_data.uid}), 200
        except Exception as e:
            return jsonify({"error": str(e)}), 401
        


        


        
#必要なもの
# ログアウト機能
        # @app.route('/logout')
            # def logout():
            #     del session['usr']
            #     return redirect(url_for('login'))

# ユーザーに紐づく情報を取得するAPI：入力するため


        
# 患者様の情報登録フォーム用のAPI
# @app.route('/api/{senior_user_id}/health', methods=['POST'])
# パス	メソッド	説明
# /api/{senior_user_id}/health	POST	新規登録
# @app.route('/api/{senior_user_id}/health/{id}', methods=['GET','POST'])
# /api/{senior_user_id}/health/{id}	PUT	既存情報の更新
# /api/{senior_user_id}/health/{id}	GET	登録情報の取得

# パラメータ名	必須	説明
# id	Yes	健康情報ID
# senior_user_id	Yes	高齢者（ユーザー）情報
# condition	Yes	健康情報
# symptom	No	体の異変
# medicine	No	薬服用の有無
# voice_text	No	音声メッセージ
# registered_at	Yes	登録日






    return app

app = create_app()

# if __name__ == '__main__':
#     app.run()
   
if __name__ == '__main__':
    app.run(debug=True)
