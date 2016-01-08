# Notifications API

### Get Notifications
+ HTTP Method: `GET`
+ URL: `http://<domain>:<port>/api/debug/notifications`

Example:

Query:

```
curl -X GET -H "Cache-Control: no-cache" 'http://localhost:3000/api/debug/notifications'
```
Response:
```json
{
  "status": "success",
  "data": [
    {
      "_id": "LAQpHJnoqf7QyArLy",
      "deviceId": "abc123",
      "data": {
        "type": "sync",
        "text": "time to rock&roll!!"
      },
      "status": "pending",
      "createdAt": "2016-01-08T00:01:35.836Z"
    },
    {
      "_id": "raoKrckQ2fAbzoRvm",
      "deviceId": "abc123",
      "data": {
        "type": "sync",
        "text": "ready to rock!!"
      },
      "status": "pending",
      "createdAt": "2016-01-08T00:01:46.910Z"
    }
  ]
}
```
### Get Notification by ID
+ HTTP Method: `GET`
+ URL: `http://<domain>:<port>/api/debug/notifications/<notification_id>`

Example:

Query:

```
curl -X GET -H "Cache-Control: no-cache" 'http://localhost:3000/api/debug/notifications/LAQpHJnoqf7QyArLy'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "LAQpHJnoqf7QyArLy",
    "deviceId": "abc123",
    "data": {
      "type": "sync",
      "text": "time to rock&roll!!"
    },
    "status": "pending",
    "createdAt": "2016-01-08T00:01:35.836Z"
  }
}
```
### Create Notification
+ HTTP Method: `POST`
+ URL: `http://<domain>:<port>/api/debug/notifications`
+ Headers: `Content-Type: application/json`

Example:

Query:

```
curl -X POST -H "Content-Type: application/json" -d '{
    "deviceId": "abc123",
    "data": {
      "type": "sync",
      "text": "ready to rock!!"
    }
}' 'http://localhost:3000/api/debug/notifications'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "raoKrckQ2fAbzoRvm",
    "deviceId": "abc123",
    "data": {
      "type": "sync",
      "text": "ready to rock!!"
    },
    "status": "pending",
    "createdAt": "2016-01-08T00:01:46.910Z"
  }
}
```
Note: field `status` takes any `String`. Valid states for notifications are not defined yet.
