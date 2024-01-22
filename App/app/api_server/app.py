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

   

    # 他のエンドポイントも同様に追加

    return app

app = create_app()

if __name__ == '__main__':
    app.run()
