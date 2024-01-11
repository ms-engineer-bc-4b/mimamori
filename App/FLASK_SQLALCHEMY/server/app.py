from flask import Flask
from database import init_db, db
from models import SeniorUser
from datetime import datetime

def create_app():
    app = Flask(__name__)
    app.config.from_object('config.Config')

    init_db(app)
    @app.route('/')
    def index():
        return 'Peterが増えるプログラムです'

  

    return app
app = create_app()

if __name__ == '__main__':
    app.run()
