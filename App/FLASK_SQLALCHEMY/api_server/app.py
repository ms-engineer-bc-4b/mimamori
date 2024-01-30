from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from database import init_db, db
from models import SeniorUser
from datetime import datetime, timedelta
import json
from flask_bcrypt import Bcrypt
import jwt
from functools import wraps


# JWTトークンの検証デコレータ
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split(" ")[1]
        print(token)
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401

        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            print(data)
            current_user = SeniorUser.query.filter_by(senior_user_id=data['user_id']).first()
        except:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


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
        print(data)
        user = SeniorUser.query.filter_by(senior_email=data['email']).first()
        print(user)
        if user and bcrypt.check_password_hash(user.senior_password, data['password']):
            token = jwt.encode({
                'user_id': user.senior_user_id,
                'exp': datetime.utcnow() + timedelta(hours=24)
            }, app.config['SECRET_KEY'])

            return jsonify({
                "email": user.senior_email,
                'token': token
            }), 200
        return jsonify({'message': 'Login failed'}), 401
    
    # ログイン済みユーザーのユーザー情報を取得するためのエンドポイント
    @app.route('/api/user', methods=['GET'])
    @token_required
    def get_user(current_user):

        data = request.get_json()
        print(data)
        # 
        user = SeniorUser.query.filter_by(senior_email=data['email']).first()
        print(user)
        # 
        if user and bcrypt.check_password_hash(user.senior_password, data['password']):
            token = jwt.encode({
                'user_id': user.senior_user_id,
                'exp': datetime.utcnow() + timedelta(hours=24)
            }, app.config['SECRET_KEY'])

        return jsonify({
            {
    "id": ,//データ番号
    "senior_user_id": current_user.senior_user_id,
    "condition": current_user.senior_health_condition,
    "symptom": current_user.senior_symptom,
    "medicine": current_user.senior_medicine,
    "degree": current_user.senior_degree,
    "voice_text": current_user.senior_degree,
    "registered_at": "2024-01-08T12:00:00Z"
}
            'id': current_user.senior_user_id,
            'email': current_user.senior_email
        }), 200
    
    # 入力したデータ保存、送付
    @app.route('/api/health', methods=['POST'])
    @token_required
    def user_update(current_user):
        # 更新処理を書く
        return jsonify({
            'id': current_user.senior_user_id,
            'email': current_user.senior_email
            # # パラメータ名	必須	説明
# # id	Yes	健康情報ID
# # senior_user_id	Yes	高齢者（ユーザー）情報
# # condition	Yes	健康情報
# # symptom	No	体の異変
# # medicine	No	薬服用の有無
# # voice_text	No	音声メッセージ
# # registered_at	Yes	登録日
        }), 200
    




# # ログアウト
        


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
    # 必要なもの
    # @app.route('/api/register', methods=['POST'])
    # @app.route('/api/register/{family_id}', methods=['PUT','GET'])
    # @app.route('/api/register/{family_id}', methods=['PUT'])

    return app


app = create_app()

# if __name__ == '__main__':
#     app.run()

if __name__ == '__main__':
    app.run(debug=True)