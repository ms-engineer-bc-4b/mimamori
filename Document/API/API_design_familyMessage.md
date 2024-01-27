# API設計書

## 健康情報登録

- **概要**: 高齢者が健康情報を登録した内容を確認して、家族がメッセージを送信する
- **パスとメソッド**:  
  | パス                         | メソッド               | 説明               |
  |--------------------------|---------------------|-------------------|
  | `/api/{senior_user_id}/health/{HealthInformation.id}/message/`      | POST                | 新規登録           |
  | `/api/{senior_user_id}/health/{HealthInformation.id}/message/` | PUT                 | 既存情報の更新     |
  | `/api/{senior_user_id}/health/{HealthInformation.id}/message/` | GET                 | 登録情報の取得     |


- **パラメータ**:  

  | パラメータ名     | 必須 | 説明                 |
  |------------------|------|----------------------|
  | message_id       | Yes  | メッセージID           |
  | id               | Yes  | HealthInformationID |
  | message          | Yes  | メッセージ             |
  | created_at       |  Yes    | データ作成日時         |
  | updated_at       | Yes     | データ更新日時         |




- **リクエストサンプル**:  
```json
{  
   "message_id": 456,
   "id": 123,
   "message": "これはメッセージの内容です。",
   "created_at": "2024-01-27T12:34:56Z",
   "updated_at": "2024-01-27T12:34:56Z"
}
```
 
- **成功時**:
    - **ステータスコード**: 201 Created
    - **レスポンスサンプル**:
```json
{
    "message": "message registered successfully"
}
 ```

- **失敗時**:
    - **ステータスコード**: 400 Bad Request
    - **レスポンスサンプル**:
 ```json
{
     "error": "Registration failed"
}
```
