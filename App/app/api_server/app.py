<<<<<<< HEAD
from flask import Flask
=======
from flask import Flask, request, jsonify
>>>>>>> 98056458d57bc9ff1a712db431b324d0d6f90f4c
from database import init_db, db
from models import SeniorUser
from datetime import datetime

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    init_db(app)
<<<<<<< HEAD
    @app.route('/')
    def index():
        return 'Hello'

  

    return app
=======

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


>>>>>>> 98056458d57bc9ff1a712db431b324d0d6f90f4c
app = create_app()

if __name__ == '__main__':
    app.run()
<<<<<<< HEAD
=======
   
>>>>>>> 98056458d57bc9ff1a712db431b324d0d6f90f4c
