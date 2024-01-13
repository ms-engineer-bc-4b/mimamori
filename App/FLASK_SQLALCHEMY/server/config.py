import os


class DevelopmentConfig:

    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://{user}:{password}@{host}/{database}?charset=utf8mb4'.format(**{
        'user': os.getenv('DB_USER', 'hoge'),
        'password': os.getenv('DB_PASSWORD', 'huga'),
        'host': os.getenv('DB_HOST', '172.20.0.2'),
        'database': os.getenv('DB_DATABASE', 'templete')
    })
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = False

Config = DevelopmentConfig
