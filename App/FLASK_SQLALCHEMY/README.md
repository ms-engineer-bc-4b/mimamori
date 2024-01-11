# 方法


# Docker-migrate

#### 立ち上げ
Dockerコンテナを立ち上げる:

```bash
docker-compose build --no-cache
docker-compose up 
```

立ち上がったら、下記にてflask_sqlalchemy_default のような名称が存在することを確認します。

```bash
docker network ls
```

flask_sqlalchemy_defaultのコンテナ情報を詳しく見ていきます  
```bash
docker network inspect flask_sqlalchemy_default
```

Network内のコンテナ情報（サンプル）:

mysql-db:  
Name: mysql-db  
IPv4Address: 172.18.0.2/16

flask-python:  
Name: flask-python  
IPv4Address: 172.18.0.3/16  

mysql-dbのIPv4Address（この場合は172.18.0.2）をconfig.pyの[IPアドレス]へ添付

別のコマンドプロンプト立ち上げてコンテナへ入る  

```bash
docker exec -it flask-python bash
```
DBの初期化、マイグレ等をする  
```bash
root@[コンテナID]:/project#   flask db init
root@[コンテナID]:/project#   flask db migrate
root@[コンテナID]:/project#   flask db upgrade
```

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

