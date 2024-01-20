from flask import Flask, request, jsonify
from database import init_db, db#api_server.database 
from models import SeniorUser#api_server.models
from datetime import datetime
#from config import Config#api_server.config

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

    return app 
    

#必要なもの
    #@app.route('/api/register', methods=['POST'])
    #@app.route('/api/register/{family_id}', methods=['PUT','GET'])
    #@app.route('/api/register/{family_id}', methods=['PUT'])

app = create_app()

if __name__ == '__main__':
    app.run()
   
