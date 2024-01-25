# 方法


# Docker-migrate

=======
まず、ディレクトリ直下に.envを作成する

```bash
DB_HOST=db
DB_USER=db_user
DB_PASSWORD=db_password
DB_NAME=templete
```


#### 立ち上げ
Dockerコンテナを立ち上げる:

```bash
docker-compose build --no-cache
docker-compose up 
```

立ち上がったら、下記にてdocker_default のような名称が存在することを確認します。

```bash
docker network ls
```

flask_sqlalchemy_defaultのコンテナ情報を詳しく見ていきます  
```bash
docker network inspect docker_my-network
```

Network内のコンテナ情報（サンプル）:
```bash
            "b96d09ffff5c5b64c2f3dbb9182679920e73e3b4973dca93ccaef6dabd31fc33": {
                "Name": "mysql-db",
                "EndpointID": "3e0ed528eb3c72ce60cb2f35ae7f0d0447af9797beb02ad02afd6f7ffca5eac5",
                "MacAddress": "02:42:ac:19:00:02",
                "IPv4Address": "172.25.0.2/16",
                "IPv6Address": ""
 ```             

mysql-dbのIPv4Address（この場合は172.25.0.2）をconfig.pyの[IPアドレス]へ添付

別のコマンドプロンプト立ち上げてコンテナへ入る  

```bash
docker exec -it flask-python bash
```
DBの初期化、マイグレ等をする  
```bash

root@[コンテナID]:/project#   flask db init
root@[コンテナID]:/project#   flask db migrate

#エラーになったらmigrationsフォルダを削除して、db initからやり直し

root@[コンテナID]:/project#   flask db upgrade
```
別ウィンドウをたちあげる  
上記が終わったらMYSQL入って出来上がったテーブルを確認する  

```bash
docker exec -it mysql-db bin/bash
root@[コンテナID]:/#   mysql -u hoge -phuga templete
```

作ったテーブルを確認する  
```bash
mysql>show tables;

DESCRIBE テーブル名;

```

テーブルSeniorUserへサンプル値入れる  
```bash
INSERT INTO SeniorUser (senior_last_name, senior_first_name, gender, birth_date, senior_email, senior_tel, health_status, medication, medication_frequency, senior_user_uid, family_id, senior_password, created_at, updated_at) VALUES ('Smith', 'John', 'Male', '1990-01-01', 'john.smith@example.com', '123-456-7890', 'Good', true, 'Once a day', 'uid123', 1, 'password123', NOW(), NOW());

#テスト用※外部キーなし
INSERT INTO SeniorUser (senior_last_name, senior_first_name, gender, birth_date, senior_email, senior_tel, health_status, medication, medication_frequency, senior_user_uid, senior_password, created_at, updated_at) VALUES ('Smith', 'John', 'Male', '1990-01-01', 'john.smith@example.com', '123-456-7890', 'Good', true, 'Once a day', 'uid123', 'password123', NOW(), NOW());
```

テーブルSeniorUserへ入れたサンプル値をコマンド上で確認する  
```bash
SELECT * FROM SeniorUser;
```


テーブルFamilyUserへサンプル値入れる  
```bash
INSERT INTO FamilyUser (family_last_name, family_first_name, relationship_with_senior, family_email, family_tel, family_password, family_uid, created_at, updated_at) VALUES ('Doe', 'Jane', 'Daughter', 'jane.doe@example.com', '987-654-3210', 'family_password123', 'family_uid123', NOW(), NOW());

```
テーブルFamilyUsernに入れたサンプル値をコマンド上で確認する  
```bash
SELECT * FROM FamilyUser;
```
```bash
INSERT INTO HealthInformation (senior_user_id, `condition`, symptom, medicine, dinner_photo,degree ,voice_text, registered_at, updated_at)  VALUES (7, 'good', 'head', 1, '', 'Hello, I am feeling good.', NOW(), NOW());

#テスト用※外部キーなし
INSERT INTO HealthInformation (`condition`, symptom, medicine, dinner_photo, degree, voice_text, created_at, updated_at)
VALUES ('good', 'head', true, '/path/to/photo.jpg', 'half', 'Hello, I am feeling good.', NOW(), NOW());


SELECT * FROM HealthInformation ;

```

テーブルMessageへサンプル値入れる  

```bash
#テスト用※外部キーなし
INSERT INTO messages (message, created_at, updated_at)
VALUES ('This is a sample message.', NOW(), NOW());

SELECT * FROM messages;
```

project-root/
├── api_server/
│   ├── app.py
│   └── ...
├── next/
│   ├── pages/
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
└── docker/
    ├── db/
    │   ├── data/
    │   └── sql/
    ├── Dockerfile.api_server
    ├── Dockerfile.next
    ├── docker-compose.yml
    └── requirements.txt

