from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from database import init_db, db
from models import SeniorUser
from datetime import datetime

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
                    with open("firebaseConfig.json") as f:
                        firebaseConfig = json.loads(f.read())
                    firebase = pyrebase.initialize_app(firebaseConfig)
                    auth = firebase.auth()

                    app = Flask(__name__)
                    app.config['SECRET_KEY'] = os.urandom(24)

                    @app.route('/login', methods=['GET', 'POST'])
                    def login():
                        if request.method == 'GET':
                            return render_template("login.html",msg="")

                        email = request.form['email']
                        password = request.form['password']
                        try:
                            user = auth.sign_in_with_email_and_password(email, password)
                            session['usr'] = email
                            return redirect(url_for('index'))
                        except:
                            return render_template("login.html", msg="メールアドレスまたはパスワードが間違っています。")

                    @app.route("/", methods=['GET'])
                    def index():
                        usr = session.get('usr')
                        if usr == None:
                            return redirect(url_for('login'))
                        return render_template("index.html", usr=usr)

                    @app.route('/logout')
                    def logout():
                        del session['usr']
                        return redirect(url_for('login'))

                    # run the app.
                    if __name__ == "__main__":
                        app.debug = True
                        app.run(port=5000)

                    # ログイン時の認証トークンをnext.js側で保持する必要があり。その場合は以下のようなコードで実装

                        # ユーザーログインエンドポイント
                    @app.route('/login', methods=['POST'])
                    def login():
                        data = request.json
                        try:
                            user = auth.sign_in_with_email_and_password(data['email'], data['password'])
                            # IDトークンもレスポンスに含める
                            id_token = user['idToken']
                            return jsonify({"message": "Login successful", "userId": user['localId'], "token": id_token}), 200
                        except Exception as e:
                            return jsonify({"error": str(e)}), 400

                    # ログイン認証tokenを利用したユーザー情報取得エンドポイント
                    @app.route('/user', methods=['GET'])
                    def get_user():
                        token = request.headers.get('Authorization')
                        if not token:
                            return jsonify({"error": "Authorization token not provided"}), 401

                        try:
                            # トークンを検証
                            user = auth.get_account_info(token)
                            user_id = user['users'][0]['localId']

                            # ユーザー情報を取得
                            user_data = auth.get_user(user_id)
                            return jsonify({"email": user_data.email, "uid": user_data.uid}), 200
                        except Exception as e:
                            return jsonify({"error": str(e)}), 401






#必要なもの
    #@app.route('/api/register', methods=['POST'])
    #@app.route('/api/register/{family_id}', methods=['PUT','GET'])
    #@app.route('/api/register/{family_id}', methods=['PUT'])

     #TEST-seniorlogin
    # @app.route('/api/allUser/<int:senior_user_id>', methods=['POST'])
    # def select_by_id(senior_user_id):
    #     user = SeniorUser.query.get(senior_user_id)
    #     if user:
    #         result = {"senior_user_id": user.senior_user_id,"senior_last_name":user.senior_last_name}
    #         return jsonify(result)
    #         # ログイン情報を返す
    #     else:
    #         return jsonify({"error": "User not found"}), 404

# /api/senior/login
            #リクエストサンプル:
            # {
            #     "senior_email": "senior@example.com",
            #     "senior_password": "senior123"
            # }  
            # 成功時:
            # ステータスコード: 200 OK
            # レスポンスサンプル:
            # {
            #     "message": "Senior logged in successfully",
            #     "user_id": "12345",
            #     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpha2UgRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            # }
            # 失敗時:
            # ステータスコード:401 Unauthorized
            # レスポンスサンプル:
            # {
            #    "error": "Login failed",
            #    "reason": "Invalid email or password"
            # } 

    return app

app = create_app()

if __name__ == '__main__':
    app.run()
   
