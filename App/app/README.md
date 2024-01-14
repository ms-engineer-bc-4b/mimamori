# 方法


# 
#### envファイル作成
app直下に.envを作成して、下記を記載する


DB_HOST=db
DB_USER=db_user
DB_PASSWORD=db_password
DB_NAME=templete
# ChatGPT のAPI key
OPENAI_API_KEY=

#### 立ち上げ
Dockerコンテナを立ち上げる:

```bash
docker-compose build --no-cache
docker-compose up 
```

localhost:3000
localhost:5000
