# 方法

1. Dockerコンテナの立ち上げ:

```bash
docker-compose build
docker-compose up -d
```

2. Pythonを使用して http://localhost:5000/ にアクセスします。

3. 次に http://localhost:3000/ にアクセスします。

# Docker-migrate

#### 立ち上げ
Dockerコンテナを立ち上げる:

```bash
docker-compose build --no-cache
docker-compose up 
```

立ち上がったらIPアドレスを設定します。
flask_sqlalchemy_default のような名称が存在することを確認します。
Dockerネットワークを調べます:

```bash
docker network ls
```

```bash
docker network inspect flask_sqlalchemy_default
```

Network内のコンテナ情報:

mysql-db:  
Name: mysql-db  
IPv4Address: 172.18.0.2/16

flask-python:  
Name: flask-python  
IPv4Address: 172.18.0.3/16  

mysql-dbのIPv4Address（この場合は172.18.0.2）をconfig.pyへ添付

別のコマンドプロンプト立ち上げてコンテナへ入る  

```bash
docker exec -it flask-python bash
```

```bash
root@[コンテナID]:/project#   flask db init
root@[コンテナID]:/project#   flask db migrate
root@[コンテナID]:/project#   flask db upgrade
```

MYSQL入る

```bash
docker exec -it linebot-db bin/bash
root@[コンテナID]:/#   mysql -u hoge -phuga templete
mysql>show tables;

```