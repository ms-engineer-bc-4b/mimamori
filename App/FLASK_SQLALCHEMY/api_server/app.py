from flask import Flask, request, jsonify, render_template, redirect, url_for, session
from database import init_db, db
from models import SeniorUser
from datetime import datetime, timedelta
import json
from flask_bcrypt import Bcrypt
import jwt
from functools import wraps
from flask_cors import CORS

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
    CORS(app, origins=["http://localhost:3000"])

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

    # ユーザー登録のルート
    @app.route('/api/senior_register', methods=['POST'])
    def register():
        data = request.get_json()
        print(data)
        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        print(f'ハッシュパスワード - {hashed_password}')
        user = SeniorUser(senior_email=data['email'], senior_password=hashed_password, senior_last_name="", senior_first_name="", gender="", birth_date=datetime.today(), senior_tel="", health_status="", medication=1, medication_frequency="", senior_user_uid=data['email'], )
        print(user)
        db.session.add(user)
        print('追加')
        db.session.commit()
        print('新規作成')
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
        return jsonify({
            'id': current_user.senior_user_id,
            'email': current_user.senior_email
        }), 200
    
    # 患者様の健康情報登録フォーム用のAPI

    # 登録：書き方が合っているか確認したい
    # /api/{senior_user_id}/health	POST	新規登録
    @app.route('/api/health', methods=['POST'])
    @token_required
    def user_health_register(current_user):
        # 登録処理を書く
        data = request.get_json()
        print(data)
        # if
        # healthinfo = TodaysHealth(senior_email=data['email'], senior_password=hashed_password, senior_last_name="", senior_first_name="", gender="", birth_date=datetime.today(), senior_tel="", health_status="", medication=1, medication_frequency="", senior_user_uid="", )
        # db.session.add(todays_health)
        # db.session.commit()    
        # return jsonify({
        #     'senior_user_id': current_user.senior_user_id,
        #     'condition': current_user.senior_user_condition,
        #     'symptom': current_user.senior_user_symptom,
        #     'medicine': current_user.senior_user_medicine,
        #     'dinner_photo':current_user.senior_user_dinner_photo,
        #     'degree':current_user.senior_user_degree,
        #     'voice_text': current_user.senior_user_voice_text,
        #     'created_at': datetime.utcnow().isoformat()+'Z',
        #         # "email": user.senior_email,
        #         # 'token': token
        #     }), 200
        # return jsonify({'message': 'Registration failed'}), 400
     # バリデーションチェック：書き方が合っているか確認したい
        if not data['senior_user_id'].isdigit():
            return jsonify({'error': 'Senior user ID must be an integer'}), 400
        if data['condition'] not in ['good', 'normal', 'bad']:
            return jsonify({'error': 'Condition must be one of "good", "normal", or "bad"'}), 400
        if data['symptom'] not in ['head', 'face', 'neck', 'shoulder', 'chest', 'rightArm', 'leftArm', 'leftHand', 'rightHand', 'abdomen', 'rightLeg', 'leftLeg', 'leftAnkle', 'rightAnkle', 'back', 'buttocks']:
            return jsonify({'error': 'Symptom must be one of "head", "face", "neck", "shoulder", "chest", "rightArm", "leftArm", "leftHand", "rightHand", "abdomen", "rightLeg", "leftLeg", "leftAnkle", "rightAnkle", "back", "buttocks"'}), 400

        # 登録処理：書き方が合っているか確認したい
        todays_health = TodaysHealth(
            senior_user_id=data['senior_user_id'],
            condition=data['condition'],
            symptom=data['symptom'],
            medicine=data['medicine'],
            dinner_photo=data['dinner_photo'],
            degree=data['degree'],
            voice_text=data['voice_text'],
        )
        db.session.add(todays_health)
        db.session.commit()

        return jsonify({
            'message': 'Health information registered successfully'
        }), 201
    


    # 更新：書き方が合っているか確認したい
    # /api/{senior_user_id}/health/{id}	PUT	既存情報の更新
    # もし更新と情報取得のコードが同じなら下記ルート
    # @app.route('/api/{senior_user_id}/health/{id}', methods=['GET','POST'])
    @app.route('/api/health', methods=['PUT'])
    @token_required
    def user_update(current_user):
        # 更新処理を書く
        return jsonify({
            'id': current_user.senior_user_id,
            'email': current_user.senior_email
        }), 200
    # 情報の取得
    # /api/{senior_user_id}/health/{id}	GET	登録情報の取得






#  実装必要なもの
    # 健康入力フォーム
        # パラメータ名	必須	説明
        # id	Yes	健康情報ID
        # senior_user_id	Yes	高齢者（ユーザー）情報
        # condition	Yes	健康情報
        # symptom	No	体の異変
        # medicine	No	薬服用の有無
        # voice_text	No	音声メッセージ
        # registered_at	Yes	登録日
    # modelsより
        # id = db.Column(db.Integer, primary_key=True)
        # #※本番はテーブル連携するので#外すsenior_user_id = db.Column(db.Integer, ForeignKey('SeniorUser.senior_user_id'), nullable=False)
        # condition = db.Column(db.Enum('good', 'normal', 'bad'), nullable=False)
        # symptom = db.Column(db.Enum('head', 'face', 'neck', 'shoulder', 'chest', 'rightArm', 'leftArm', 'leftHand', 'rightHand', 'abdomen', 'rightLeg', 'leftLeg', 'leftAnkle', 'rightAnkle', 'back', 'buttocks'), nullable=False)
        # medicine = db.Column(db.Boolean, nullable=False)
        # dinner_photo = db.Column(db.String(255), nullable=True)
        # degree = db.Column(db.Enum('full', 'half', 'less'), nullable=True)
        # voice_text = db.Column(db.String(255), nullable=True)
        # created_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        # updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now().strftime("%Y-%m-%d %H:%M:%S"), onupdate=datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    # API設計書
        # {
        #     "senior_user_id": "98765",
        #     "condition": "good",
        #     "symptom": "head",
        #     "medicine": true,
        #     "dinner_photo":"",
        #     "degree":"full",
        #     "voice_text": "I am feeling a bit dizzy today.",
        #    "created_at": "2024-01-27T12:34:56Z",
        #    "updated_at": "2024-01-27T12:34:56Z"
        # }
        # 成功時:
        # ステータスコード: 201 Created
        # レスポンスサンプル:
        # {
        #     "message": "Health information registered successfully"
        # }
        # 失敗時:
        # ステータスコード: 400 Bad Request
        # レスポンスサンプル:
        # {
        #     "error": "Registration failed",
        #     "reason": "Invalid email format"
        # }
# 

    return app


app = create_app()

# if __name__ == '__main__':
#     app.run()

if __name__ == '__main__':
    app.run(debug=True)