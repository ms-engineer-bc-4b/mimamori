from flask import Flask, request, jsonify
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
   
