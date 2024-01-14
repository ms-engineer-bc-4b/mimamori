# API設計書

## 高齢者ログイン

- **概要**: 高齢者がメールアドレスとパスワードでログインする。Firebaseの認証機能を利用。
- **パス**: `/api/senior/login`
- **メソッド**: POST
- **パラメータ**:  

| パラメータ名     | 必須 | 説明                 |
|------------------|------|----------------------|
| senior_email     | Yes  | 高齢者のメールアドレス |
| senior_password  | Yes  | 高齢者のパスワード     |

- **リクエストサンプル**:  
```json
{
    "senior_email": "senior@example.com",
    "senior_password": "senior123"
}  
```

- **成功時**:  
    - **ステータスコード**: 200 OK
    - **レスポンスサンプル**:
```json
{
    "message": "Senior logged in successfully",
    "user_id": "12345",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpha2UgRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

- **失敗時**:
    - **ステータスコード**:401 Unauthorized
    - **レスポンスサンプル**:
 ```json
{
    "error": "Login failed",
    "reason": "Invalid email or password"
}
```

## 家族ログイン

- **概要**: 家族がメールアドレスとパスワードでログインする。Firebaseの認証機能を利用。
- **パス**: `/api/family/login`
- **メソッド**: POST
- **パラメータ**:  

| パラメータ名   | 必須 | 説明                 |
|----------------|------|----------------------|
| family_email     | Yes  | 家族のメールアドレス  |
| family_password  | Yes  | 家族のパスワード      |

- **リクエストサンプル**:  
```json
{
    "family_email": "family@example.com",
    "family_password": "family123"
}
- **成功時**:  
    - **ステータスコード**: 200 OK
    - **レスポンスサンプル**:
```json
{
    "message": "Senior logged in successfully",
    "family_id": "12345",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikpha2UgRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

- **失敗時**:
    - **ステータスコード**:401 Unauthorized
    - **レスポンスサンプル**:
 ```json
{
    "error": "Login failed",
    "reason": "Invalid email or password"
}
```