
from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from database import init_db, db
from models import SeniorUser
from datetime import datetime, timedelta
import json
from flask_bcrypt import Bcrypt
import jwt

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    init_db(app)
    bcrypt = Bcrypt(app)

    @app.route('/')
    def index():
        return 'HELLO'

    # TEST
    @app.route('/api/allUser', methods=['GET'])
    def select_all():
        senior_users = SeniorUser.query.all()
        result = [{"senior_user_id": user.senior_user_id, "senior_last_name": user.senior_last_name} for user in
                  senior_users]
        return jsonify(result)

    # TEST
    @app.route('/api/allUser/<int:senior_user_id>', methods=['GET'])
    def select_by_id(senior_user_id):
        user = SeniorUser.query.get(senior_user_id)
        if user:
            result = {"senior_user_id": user.senior_user_id, "senior_last_name": user.senior_last_name}
            return jsonify(result)
        else:
            return jsonify({"error": "User not found"}), 404

    # TEST-seniorlogin
    # /api/senior/login

    # ログイン時の認証トークンをnext.js側で保持する必要があり。その場合は以下のようなコードで実装

    # ユーザー登録のルート
    @app.route('/api/senior_register', methods=['POST'])
    def register():
        data = request.get_json()
        print(data)
        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        user = SeniorUser(senior_email=data['email'], senior_password=hashed_password, senior_last_name="", senior_first_name="", gender="", birth_date=datetime.today(), senior_tel="", health_status="", medication=1, medication_frequency="", senior_user_uid="", )
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'Registered successfully'}), 201

    # ユーザーログインエンドポイント
    @app.route('/api/senior_login', methods=['Get','POST'])
    def login():
        data = request.get_json()
        user = SeniorUser.query.filter_by(senior_email=data['email']).first()

        if user and bcrypt.check_password_hash(user.senior_password, data['password']):
            token = jwt.encode({
                'user_id': user.senior_user_id,
                'exp': datetime.utcnow() + timedelta(hours=1)
            }, app.config['SECRET_KEY'])

            return jsonify({
                "email": user.senior_email,
                'token': token
            }), 200
        return jsonify({'message': 'Login failed'}), 401


# #必要なもの

# # ログアウト
        

# # ユーザーに紐づく情報を取得するAPI：入力するため
# # def get_user_by_id():
# #      # ユーザー情報を取得
# #             # privateのメソッドであればsenior_IDだけをとってくる
# #             使うものはトークン？
# #             return seror_id
# #             user_data = auth.get_user(user_id)
# #             return jsonify({"senior_email": user_data.email, "uid": user_data.uid}), 200


        
# # 患者様の情報登録フォーム用のAPI
# # @app.route('/api/{senior_user_id}/health', methods=['POST'])
# # パス	メソッド	説明
# # /api/{senior_user_id}/health	POST	新規登録
# # @app.route('/api/{senior_user_id}/health/{id}', methods=['GET','POST'])
# # /api/{senior_user_id}/health/{id}	PUT	既存情報の更新
# # /api/{senior_user_id}/health/{id}	GET	登録情報の取得

# # パラメータ名	必須	説明
# # id	Yes	健康情報ID
# # senior_user_id	Yes	高齢者（ユーザー）情報
# # condition	Yes	健康情報
# # symptom	No	体の異変
# # medicine	No	薬服用の有無
# # voice_text	No	音声メッセージ
# # registered_at	Yes	登録日



    return app






app = create_app()

# if __name__ == '__main__':
#     app.run()

if __name__ == '__main__':
    app.run(debug=True)