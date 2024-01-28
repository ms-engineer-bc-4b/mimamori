# API設計書

## 健康情報登録

- **概要**: 高齢者が健康情報を登録した内容を確認して、家族がメッセージを送信する
- **パスとメソッド**:  高齢者が登録した{HealthInformation.id}に対応するメッセージを作成したり更新する  
※一つの{HealthInformation.id}に対して一つのメッセージしか受け付けない。既に登録されている場合はエラーとする

  | パス                         | メソッド               | 説明               |
  |--------------------------|---------------------|-------------------|
  | `/api/health/{HealthInformation.id}/message/{message_id}`      | GET              | 情報取得           |
  | `/api/health/{HealthInformation.id}/message/{message_id}`      | PUT                | 既存情報の更新          |
  | `/api/health/{HealthInformation.id}/message/` | POST                |メッセージ登録※     |
  | `/api/health/{HealthInformation.id}/message/` | GET                 | 全取得     |




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
{  "id": 123,
   "message": "これはメッセージの内容です。",
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
