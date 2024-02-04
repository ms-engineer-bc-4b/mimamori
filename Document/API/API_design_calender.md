# API設計書

## 登録情報の確認など

- **概要**: 高齢者が健康情報を登録した内容を管理画面で確認出来る
- **パスとメソッド**:  高齢者が登録した{HealthInformation.id}に対応するメッセージを作成したり更新する  
※一つの{HealthInformation.id}に対して一つのメッセージしか受け付けない。既に登録されている場合はエラーとする

  | パス                         | メソッド               | 説明               |
  |--------------------------|---------------------|-------------------|
  | `/api/calender/senior_id/<int:senior_user_id>/created_at/{healthInformation_created_atをYYYYMMDD表示したもの}`      | GET              | カレンダー情報取得           |
  | `/api/calender/senior_id/<int:senior_user_id>/created_at/{healthInformation_created_atをYYYYMMDD表示したもの}`      | PUT              | カレンダー情報更新           |
  | `/api/calender/senior_id/<int:senior_user_id>/created_at/{healthInformation_created_atをYYYYMMDD表示したもの}`      | DELETE             | カレンダー情報削除           |
  | `/api/calender/senior_id/<int:senior_user_id>/created_at/{healthInformation_created_atをYYYYMMDD表示したもの}`      | POST             | カレンダー情報投稿           |

- **パラメータ**:  

  | パラメータ名     | 必須 | 説明                 |
  |------------------|------|----------------------|
  | senior_user_id       | Yes  | SeniorUserのID           |
  | id               | Yes  | HealthInformationのid |
  |  updated_at（healthInformation）      | Yes  | healthInformationテーブルのupdated_at  |
  | condition        | No  | 健康情報             |
  | symptom          | No   | 体の異変             |
  | medicine         | No   | 薬服用の有無         |
  | dinner_photo         | No   | 夕飯の写真         |
  |degree         | No   | 夕飯の程度         |
  |   voice_text       | No   | 音声メッセージ        |
  | created_at   （healthInformation）      |  Yes    | healthInformationテーブルのデータ作成日時         |
  




- **リクエストサンプル**:  
```json
{  "senior_user_id": 123,
   "date": "20240129",
}
```
 
- **成功時**:
    - **ステータスコード**: 201 Created
    - **レスポンスサンプル**:
```json
{
    "id": "98765",
    "condition": "good",
    "symptom": "head",
    "medicine": true,
    "dinner_photo":"",
    "degree":"full",
    "voice_text": "I am feeling a bit dizzy today.",
   "created_at": "2024-01-27T12:34:56Z",
   "updated_at": "2024-01-27T12:34:56Z"
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
