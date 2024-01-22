from flask import Flask, request, jsonify
from database import init_db, db
from models import SeniorUser, FamilyUser
from datetime import datetime
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    init_db(app)
    CORS(app)
    @app.route('/')
    def index():
        return 'HELLO'
    # test(start)
    @app.route('/api/register', methods=['POST'])
    def index2():
        try:
            # POSTリクエストからJSONデータを取得
            data = request.get_json()

            # 受け取ったデータを表示（データが存在する場合）
            if data:
                print(f"Received data: {data}")

            # レスポンスとして"HELLO"を返す
            return {data}

        except Exception as e:
            print(f"Error processing request: {e}")
            return 'Error processing request', 500
    # test(end)
    # 必要なもの
    # 以下に必要なエンドポイントを追加

    # 例：ユーザー登録
    @app.route('/api/register', methods=['POST'])
    def register_user():
        try:
            # リクエストからJSONデータを取得
            data = request.get_json()

            # データベースにユーザーを登録する処理（例）
            new_user = SeniorUser(name=data.get('name'), age=data.get('age'))
            db.session.add(new_user)
            db.session.commit()

            # レスポンスとして成功メッセージを返す
            return jsonify({'message': 'User registered successfully'})

        except Exception as e:
            print(f"Error processing registration request: {e}")
            return 'Error processing registration request', 500

    # 他のエンドポイントも同様に追加

    return app

app = create_app()

if __name__ == '__main__':
    app.run()
