from flask import Flask, request, jsonify
from database import init_db, db
from models import SeniorUser,FamilyUser,Message,HealthInformation
from datetime import datetime
from flask_cors import CORS
import pytz


def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')
    
    init_db(app)
    CORS(app) 
    @app.route('/', methods=['GET'])
    def index():
        return 'HELLO'
    #testPostしたものをどんどん紐づけていく
    #新規登録⇒新規登録内容返す
    #健康情報の登録⇒新規登録内容と健康情報を返す
    #メッセージの登録⇒新規登録内容と健康情報とメッセージ情報を返す



    #新規登録画面で登録したものを保存
    #API_design_seniorFamilyRegister.md
    @app.route('/api/register', methods=['GET', 'POST'])
    def register_user():
     if request.method == 'GET':
        # GETメソッドの処理をここに追加
        senior_users = SeniorUser.query.all()
   

        senior_user_data = [{"senior_user_id": user.senior_user_id, "senior_last_name": user.senior_last_name,"family_id": user.family_id} for user in senior_users]
        family_user_data = [{"family_id": user.family_id, "family_last_name": user.family_last_name} for user in family_users]

        return jsonify({
            "senior_users": senior_user_data,
            "family_users": family_user_data
        })

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
        
        #SeniorUserテーブルに外部キーとしてfamily_idを持つために、下記処理を実施
        new_family_user_id = family_user.family_id
        senior_user.family_id = new_family_user_id
        db.session.commit()
        
       

        return jsonify({"message": "User and family registered successfully", "family_id": new_family_user_id,"new_senior_user_id":senior_user.senior_user_id}), 201
    
    ##家族の情報を削除変更    
    ##API_design_seniorFamilyRegister.md#
    @app.route('/api/register/<int:family_id>', methods=['PUT','GET','DELETE'])#<int:family_id>
    def manage_family_user(family_id):#
     
     family_user = FamilyUser.query.get_or_404(family_id)
   
     if request.method == 'GET':
      return jsonify({'family_id': family_user.family_id, 'name': family_user.family_last_name})  # 必要に応じてフィールドを追加
    #return "hello"
     
     elif request.method == 'PUT':
        data = request.json

        # FamilyUser データを更新
        family_user.family_last_name = data.get('family_last_name', family_user.family_last_name)
        family_user.family_first_name = data.get('family_first_name', family_user.family_first_name)
        family_user.relationship_with_senior = data.get('relationship_with_senior', family_user.relationship_with_senior)
        family_user.family_email = data.get('family_email', family_user.family_email)
        family_user.family_tel = data.get('family_tel', family_user.family_tel)
        family_user.family_password = data.get('family_password', family_user.family_password)

        try:
            # データベースに変更をコミット
            db.session.commit()
        except Exception as e:
            # エラーが発生した場合にはロールバックする
            db.session.rollback()
            return jsonify({"error": str(e)}), 500

        return jsonify({"message": "Family user updated successfully"})

     elif request.method == 'DELETE':
        # FamilyUser レコードを削除
        db.session.delete(family_user)

        try:
            # データベースに変更をコミット
            db.session.commit()
        except Exception as e:
            # エラーが発生した場合にはロールバックする
            db.session.rollback()
            return jsonify({"error": str(e)}), 500

        return jsonify({"message": "Family user deleted successfully"})
    
 
      

    

    #API_design_healthCondition.md
    #全量取得&新規登録
    @app.route('/api/<int:senior_user_id>/health', methods=['GET','POST'])
    def health_information(senior_user_id):
     if request.method == 'GET':
        # GETメソッドの処理をここに追加
        health_information = HealthInformation.query.filter_by(senior_user_id=senior_user_id).all()

        health_info_data = [{"health_information_id": health.id} for health in health_information]

        return jsonify({
            "health_info_data": health_info_data,
        })
     elif request.method == 'POST':
        # POSTメソッドの処理をここに追加
        data = request.get_json()
        new_health_info = HealthInformation(
            senior_user_id=senior_user_id,
            condition=data.get('condition'),
            symptom=data.get('symptom'),
            medicine=data.get('medicine'),
            dinner_photo=data.get('dinner_photo'),
            degree=data.get('degree'),
            voice_text=data.get('voice_text'),
        )
        db.session.add(new_health_info)
        db.session.commit()

        # 健康情報が追加された後、再度シニアユーザー情報とファミリー情報を取得
        senior_user = SeniorUser.query.get(senior_user_id)
        family_user = FamilyUser.query.filter_by(family_id=senior_user.family_id).first()


        return jsonify({
            "message": "Health information added successfully",
            "senior_user_data": {
                "senior_user_id": senior_user.senior_user_id,
                "senior_last_name": senior_user.senior_last_name,
                "senior_first_name": senior_user.senior_first_name,
                "gender": senior_user.gender,
                "senior_email": senior_user.senior_email,
                # 他の属性があればここに追加
            },
            "family_data": {
                "family_id": family_user.family_id if family_user else None,
                "family_last_name": family_user.family_last_name if family_user else None,
                "family_first_name": family_user.family_first_name if family_user else None,
                "relationship_with_senior": family_user.relationship_with_senior if family_user else None,
                "family_email": family_user.family_email if family_user else None,
                # 他の属性があればここに追加
            }
        }), 201  # 201は作成成功を示すステータスコード
    
    #API_design_healthCondition.md
    #1件取得&更新
    @app.route('/api/<int:senior_user_id>/health/<int:health_id>', methods=['GET', 'PUT'])
    def handle_health_information(senior_user_id, health_id):
     if request.method == 'GET':
        # 特定のsenior_user_idおよびhealth_idに関連する健康情報を取得
        health_info = HealthInformation.query.filter_by(senior_user_id=senior_user_id, id=health_id).first()

        if health_info:
            # 健康情報が存在する場合はJSON形式で返す
            response_data = {
                "health_information_id": health_info.id,
                "condition": health_info.condition,
                "symptom": health_info.symptom,
                "medicine": health_info.medicine,
                "dinner_photo": health_info.dinner_photo,
                "degree": health_info.degree,
                "voice_text": health_info.voice_text,
                "created_at": health_info.created_at,
                "updated_at": health_info.updated_at
            }
            return jsonify(response_data)
        else:
            # 健康情報が存在しない場合はエラーを返す
            return jsonify({"error": "Health information not found"}), 404

     elif request.method == 'PUT':
        # PUTメソッドの処理をここに追加
        health_info = HealthInformation.query.filter_by(senior_user_id=senior_user_id, id=health_id).first()

        if health_info:
            # PUTリクエストのデータで健康情報を更新
            data = request.get_json()
            health_info.condition = data.get('condition', health_info.condition)
            health_info.symptom = data.get('symptom', health_info.symptom)
            health_info.medicine = data.get('medicine', health_info.medicine)
            health_info.dinner_photo = data.get('dinner_photo', health_info.dinner_photo)
            health_info.degree = data.get('degree', health_info.degree)
            health_info.voice_text = data.get('voice_text', health_info.voice_text)

            db.session.commit()

            # 更新後の健康情報をJSON形式で返す
            response_data = {
                "health_information_id": health_info.id,
                "condition": health_info.condition,
                "symptom": health_info.symptom,
                "medicine": health_info.medicine,
                "dinner_photo": health_info.dinner_photo,
                "degree": health_info.degree,
                "voice_text": health_info.voice_text,
                "created_at": health_info.created_at,
                "updated_at": health_info.updated_at
            }
            return jsonify(response_data)
        else:
            # 健康情報が存在しない場合はエラーを返す
            return jsonify({"error": "Health information not found"}), 404


    #API_design_familyMessage.md
    #TEST
    @app.route('/api/message', methods=['GET'])
    def get_all_messages():
    # メッセージテーブルの全データを取得
     all_messages = Message.query.all()

    # メッセージデータをリストに変換
     messages_data = [
        {
            "message_id": message.message_id,
            "id": message.id,
            "message": message.message,
            "created_at": message.created_at.strftime("%Y-%m-%d %H:%M:%S"),
            "updated_at": message.updated_at.strftime("%Y-%m-%d %H:%M:%S"),
            # HealthInformationの関連情報があればここに追加
        }
        for message in all_messages
    ]


    # JSON形式でデータを返す
    #API_design_familyMessage.md
    #全量取得&新規登録
     return jsonify({"messages": messages_data})
    @app.route('/api/health/<int:id>/message', methods=['GET', 'POST'])
    def get_health_information_messages(id):
     if request.method == 'GET':
        # 特定のsenior_user_idおよびhealth_info_idに関連するメッセージを取得
        messages = Message.query.filter_by(id=id).all()

        # メッセージデータをリストに変換
        messages_data = [
            {
                "message_id": message.message_id,
                # 他の属性があればここに追加
            }
            for message in messages
        ]

        # JSON形式でデータを返す
        return jsonify({"messages": messages_data})

     elif request.method == 'POST':
 
        # POSTメソッドの処理
        data = request.get_json()

        # メッセージが存在するか確認
        if 'message' not in data or data['message'] is None:
            return jsonify({"error": "Message is required"}), 400

        # 同じidに既に同じメッセージが存在する場合はエラー
        if Message.query.filter_by(id=id, message=data['message']).first():
            return jsonify({"error": "Message already exists for this id"}), 400

        health_information = HealthInformation.query.get(id)
        if health_information is None:
            return jsonify({"error": f"No HealthInformation found with id {id}"}), 404

        senior_user = SeniorUser.query.get(health_information.senior_user_id)
        if senior_user is None:
            return jsonify({"error": f"No SeniorUser found with id {health_information.senior_user_id}"}), 404

        family_user = FamilyUser.query.get(senior_user.family_id)
        if family_user is None:
            return jsonify({"error": f"No FamilyUser found with id {senior_user.family_id}"}), 404

        new_message = Message(
            id=id,
            message=data['message'],
            created_at=datetime.utcnow(),
            updated_at=datetime.utcnow()
            # 他の属性があればここに追加
        )
        db.session.add(new_message)
        db.session.commit()

        response_data = {
            "message": "Message added successfully",
            "message_details": {
                "message_id": new_message.message_id,
                "senior_user": {
                    "senior_user_id": senior_user.senior_user_id,
                    "senior_last_name": senior_user.senior_last_name,
                    "senior_first_name": senior_user.senior_first_name,
                    # 他の属性があればここに追加
                },
                "family_user": {
                    "family_id": family_user.family_id,
                    "family_last_name": family_user.family_last_name,
                    "family_first_name": family_user.family_first_name,
                    "relationship_with_senior": family_user.relationship_with_senior,
                    "family_email": family_user.family_email,
                    # 他の属性があればここに追加
                },
                "health_information": {
                    "health_information_id": health_information.id,
                    "condition": health_information.condition,
                    "symptom": health_information.symptom,
                    "medicine": health_information.medicine,
                    "dinner_photo": health_information.dinner_photo,
                    "degree": health_information.degree,
                    "voice_text": health_information.voice_text,
                    # 他の属性があればここに追加
                },
                "created_at": new_message.created_at.strftime("%Y-%m-%d %H:%M:%S"),
                "updated_at": new_message.updated_at.strftime("%Y-%m-%d %H:%M:%S")
                # 他の属性があればここに追加
            }
        }
        return jsonify(response_data), 201
     

    #API_design_familyMessage.md
    #1件取得&更新  
    @app.route('/api/health/<int:id>/message/<int:message_id>', methods=['GET', 'PUT','DELETE'])
    def handle_health_information_message(id, message_id):
    
     message = Message.query.filter_by(id=id, message_id=message_id).first()

     if not message:
        return jsonify({"error": "Message not found"}), 404

     if request.method == 'GET':
        # メッセージが存在する場合
        message_data = {
            "message_id": message.message_id,
            "message": message.message,
            # 他の属性があればここに追加
        }
        return jsonify({"message": message_data})

     elif request.method == 'PUT':
        # PUTメソッドの処理
        data = request.get_json()

        # メッセージが存在するか確認
        if 'message' not in data or data['message'] is None:
            return jsonify({"error": "Message is required"}), 400

        # 同じidとmessage_idのメッセージが存在する場合はエラー
        existing_message = Message.query.filter_by(id=id, message_id=message_id, message=data['message']).first()
        if existing_message:
            return jsonify({"error": "Message already exists for this id and message_id"}), 400

        # メッセージを更新
        message.message = data['message']
        db.session.commit()

        return jsonify({"message": "Message updated successfully"}), 200  # 200は成功を示すステータスコード
      
     elif request.method == 'DELETE':
        # DELETEメソッドの処理
        db.session.delete(message)
        db.session.commit()

        return jsonify({"message": "Message deleted successfully"}), 200  # 200は成功を示すステータスコード

    #API_design_seniorLogin_familyLogin.md
    #familyLogin
    @app.route('/api/family/login', methods=['POST'])
    def family_login():
     data = request.get_json()

     if 'family_email' not in data or 'family_password' not in data:
        return jsonify({"error": "Email and password are required"}), 400

     family_email = data['family_email']
     family_password = data['family_password']

    # メールアドレスに一致するファミリーユーザーを取得
     family_user = FamilyUser.query.filter_by(family_email=family_email).first()

     if family_user and family_user.family_password == family_password:
        # パスワードが一致した場合、ログイン成功

        # SeniorUser情報も取得
        senior_user = family_user.senior

        response_data = {
            "message": "Login successful",
            "family_details": {
                "family_id": family_user.family_id,
                "family_last_name": family_user.family_last_name,
                "family_first_name": family_user.family_first_name,
                "relationship_with_senior": family_user.relationship_with_senior,
                "family_email": family_user.family_email,
                # 他の属性があればここに追加
            },
            "senior_details": {
                "senior_user_id": senior_user.senior_user_id,
                "senior_last_name": senior_user.senior_last_name,
                "senior_first_name": senior_user.senior_first_name,
                "gender": senior_user.gender,
                "senior_email": senior_user.senior_email,
                # 他の属性があればここに追加
            }
        }
        return jsonify(response_data), 200
     else:
        # ログイン失敗
        return jsonify({"error": "Invalid email or password"}), 401
    #API_design_seniorLogin_familyLogin.md
    #seniorLogin
    @app.route('/api/senior/login', methods=['POST'])
    def senior_login():
     data = request.get_json()

     if 'senior_email' not in data or 'senior_password' not in data:
        return jsonify({"error": "Email and password are required"}), 400

     senior_email = data['senior_email']
     senior_password = data['senior_password']

    # メールアドレスに一致するシニアユーザーを取得
     senior_user = SeniorUser.query.filter_by(senior_email=senior_email).first()

     if senior_user and senior_user.senior_password==senior_password:
        # パスワードが一致した場合、ログイン成功

        # FamilyUser情報も取得
        family_user = senior_user.family

        response_data = {
            "message": "Login successful",
            "senior_details": {
                "senior_user_id": senior_user.senior_user_id,
                "senior_last_name": senior_user.senior_last_name,
                "senior_first_name": senior_user.senior_first_name,
                "gender": senior_user.gender,
                "senior_email": senior_user.senior_email,
                "family_id": senior_user.family_id,
                # 他の属性があればここに追加
            },
            "family_details": {
                "family_id": family_user.family_id,
                "family_last_name": family_user.family_last_name,
                "family_first_name": family_user.family_first_name,
                "relationship_with_senior": family_user.relationship_with_senior,
                "family_email": family_user.family_email,
                # 他の属性があればここに追加
            }
        }
        return jsonify(response_data), 200
     else:
        # ログイン失敗
        return jsonify({"error": "Invalid email or password"}), 401
    
    #seniorSignup
    @app.route('/api/senior/signup', methods=['POST'])
    def update_senior_password():
     data = request.get_json()

    # 必要な情報が提供されているか確認
     if 'senior_email' not in data or 'new_password' not in data:
        return jsonify({"error": "Senior email and new password are required"}), 400

     senior_email = data['senior_email']
     new_password = data['new_password']

    # メールアドレスに一致するシニアユーザーを取得
     senior_user = SeniorUser.query.filter_by(senior_email=senior_email).first()

     if senior_user:
        # シニアユーザーが存在すれば、新しいパスワードで更新
        senior_user.senior_password = new_password
        db.session.commit()

        return jsonify({"message": "Password updated successfully"}), 200
     else:
        # ユーザーが存在しない場合
        return jsonify({"message": "Senior user not found with the provided email"}), 404
    #familysign up
    

    #API_design_calender.md
    @app.route('/api/calender/senior_id/<int:senior_user_id>/created_at/<string:YYYYMMDD>', methods=['GET', 'DELETE', 'PUT','POST'])
    def get_or_delete_health_information(senior_user_id, YYYYMMDD):
    # Convert YYYYMMDD to a full date string
     date_str = f"{YYYYMMDD[:4]}-{YYYYMMDD[4:6]}-{YYYYMMDD[6:]}"

     if request.method == 'GET':
        # Query the database to get the most recent health information for the specified date
        health_info = HealthInformation.query.filter(
            HealthInformation.senior_user_id == senior_user_id,
            HealthInformation.created_at.like(f"{date_str}%")
        ).order_by(HealthInformation.created_at.desc()).first()

        if health_info:
            # Construct the JSON response
            response = {
                "id": health_info.id,
                "condition": health_info.condition,
                "symptom": health_info.symptom,
                "medicine": health_info.medicine,
                "dinner_photo": health_info.dinner_photo,
                "degree": health_info.degree,
                "voice_text": health_info.voice_text,
                "created_at": health_info.created_at.strftime('%Y-%m-%dT%H:%M:%SZ'),
                "updated_at": health_info.updated_at.strftime('%Y-%m-%dT%H:%M:%SZ')
            }
            return jsonify(response)
        else:
            return jsonify({"message": "No health information found for the given parameters"}), 404

     elif request.method == 'DELETE':
        # Get HealthInformation ids for the specified date and user
      ids_to_delete = [info.id for info in HealthInformation.query.filter(
            HealthInformation.senior_user_id == senior_user_id,
            HealthInformation.created_at.like(f"{date_str}%")
        ).all()]

      if ids_to_delete:
            # Delete rows based on the obtained ids
            for id_to_delete in ids_to_delete:
                HealthInformation.query.filter_by(id=id_to_delete).delete()

            # Commit changes to the database
            db.session.commit()

            return jsonify({"message": f"{len(ids_to_delete)} rows deleted successfully"})
      else:
            return jsonify({"message": "No matching rows to delete"}), 404
     
     elif request.method == 'PUT':
        # Update health information for the specified date
        new_health_info = request.json
        health_info = HealthInformation.query.filter(
            HealthInformation.senior_user_id == senior_user_id,
            HealthInformation.created_at.like(f"{date_str}%")
        ).first()

        if health_info:
            # Update the existing health information
            health_info.condition = new_health_info.get("condition", health_info.condition)
            health_info.symptom = new_health_info.get("symptom", health_info.symptom)
            health_info.medicine = new_health_info.get("medicine", health_info.medicine)
            health_info.dinner_photo = new_health_info.get("dinner_photo", health_info.dinner_photo)
            health_info.degree = new_health_info.get("degree", health_info.degree)
            health_info.voice_text = new_health_info.get("voice_text", health_info.voice_text)
            
            # Update the 'updated_at' timestamp
            tokyo_timezone = pytz.timezone('Asia/Tokyo')
            health_info.updated_at = datetime.utcnow().replace(tzinfo=pytz.utc).astimezone(tokyo_timezone)


            # Commit changes to the database
            db.session.commit()

            return jsonify({"message": "Health information updated successfully"})
        else:
            return jsonify({"message": "No matching health information to update"}), 404

     elif request.method == 'POST':
        # Create new health information for the specified date
        new_health_info_data = request.json

        # Assuming HealthInformation model has a constructor that accepts the necessary parameters
        new_health_info = HealthInformation(
            senior_user_id=senior_user_id,
            condition=new_health_info_data.get("condition"),
            symptom=new_health_info_data.get("symptom"),
            medicine=new_health_info_data.get("medicine"),
            dinner_photo=new_health_info_data.get("dinner_photo"),
            degree=new_health_info_data.get("degree"),
            voice_text=new_health_info_data.get("voice_text"),
            created_at=datetime.now(pytz.timezone('Asia/Tokyo')),
            updated_at=datetime.now(pytz.timezone('Asia/Tokyo'))
        )

        # Add to the session and commit to the database
        db.session.add(new_health_info)
        db.session.commit()

        return jsonify({"message": "Health information created successfully"})
    

    return app
app = create_app()

if __name__ == '__main__':
    app.run()