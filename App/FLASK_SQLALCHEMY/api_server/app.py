from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from database import init_db, db
from models import SeniorUser
from datetime import datetime
import pyrebase

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



    return app

app = create_app()

if __name__ == '__main__':
    app.run()
   
