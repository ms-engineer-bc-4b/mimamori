from flask import Flask, request, jsonify
from database import init_db, db
from models import SeniorUser,FamilyUser
from datetime import datetime
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    init_db(app)
    CORS(app) 
    @app.route('/', methods=['GET'])
    def index():
        return 'HELLO'
    
    #新規登録画面で登録したものを保存
    @app.route('/api/register', methods=['GET', 'POST'])
    def register_user():
     if request.method == 'GET':
        # GETメソッドの処理をここに追加
        senior_users = SeniorUser.query.all()
        result = [{"senior_user_id": user.senior_user_id, "senior_last_name": user.senior_last_name} for user in senior_users]
        return jsonify(result)
        

     elif request.method == 'POST':
        data = request.json

        # SeniorUser データをデータベースに追加
        senior_user = SeniorUser(
            senior_last_name=data['senior']['senior_last_name'],
            senior_first_name=data['senior']['senior_first_name'],
            gender=data['senior']['gender'],
            birth_date=datetime.strptime(data['senior']['birth_date'], '%Y-%m-%d'),
            senior_email=data['senior']['senior_email'],
            senior_tel=data['senior']['senior_tel'],
            health_status=data['senior']['health_status'],
            medication=data['senior']['medication'],
            medication_frequency=data['senior']['medication_frequency']
        )
        db.session.add(senior_user)

        # FamilyUser データをデータベースに追加
        family_user = FamilyUser(
            family_last_name=data['family']['family_last_name'],
            family_first_name=data['family']['family_first_name'],
            relationship_with_senior=data['family']['relationship_with_senior'],
            family_email=data['family']['family_email'],
            family_tel=data['family']['family_tel'],
            family_password=data['family']['family_password']
        )
        db.session.add(family_user)

        db.session.commit()

        return jsonify({"message": "User and family registered successfully"}), 201
    
       #@app.route('/api/register/{family_id}', methods=['PUT','GET'])
       #@app.route('/api/register/{family_id}', methods=['PUT'])

    return app
app = create_app()

if __name__ == '__main__':
    app.run()
   