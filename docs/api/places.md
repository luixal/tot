# Places API
### Get Places
+ HTTP Method: `GET`
+ URL: `http://<domain>:<port>/api/debug/places`

Example:

Query:

```
curl -X GET -H "Cache-Control: no-cache" 'http://localhost:3000/api/debug/places'
```
Response:
```json
{
  "status": "success",
  "data": [
    {
      "_id": "YfgJfHH2TQuAAHqKZ",
      "name": "Place 2",
      "address": "Calle Quintanavides 19, Madrid",
      "location": {
        "type": "Point",
        "coordinates": [
          -43.213,
          0.556
        ]
      },
      "createdAt": "2016-01-07T20:26:58.246Z"
    }
  ]
}
```
### Get Place by ID
+ HTTP Method: `GET`
+ URL: `http://<domain>:<port>/api/debug/places/<place_id>`

Example:

Query:

```
curl -X GET -H "Cache-Control: no-cache" 'http://localhost:3000/api/debug/places/YfgJfHH2TQuAAHqKZ'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "YfgJfHH2TQuAAHqKZ",
    "name": "Place 2",
    "address": "Calle Quintanavides 19, Madrid",
    "location": {
      "type": "Point",
      "coordinates": [
        -43.213,
        0.556
      ]
    },
    "createdAt": "2016-01-07T20:26:58.246Z"
  }
}
```
### Create Place
+ HTTP Method: `POST`
+ URL: `http://<domain>:<port>/api/debug/places`
+ Headers: `Content-Type: application/json`

Example:

Query:

```
curl -X POST -H "Content-Type: application/json" -d '{
    "name": "Place 2",
    "address": "Calle Quintanavides 19, Madrid",
    "location": {
      "type": "Point",
      "coordinates": [
        -43.213,
        0.556
      ]
    }
}' 'http://localhost:3000/api/debug/places'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "YfgJfHH2TQuAAHqKZ",
    "name": "Place 2",
    "address": "Calle Quintanavides 19, Madrid",
    "location": {
      "type": "Point",
      "coordinates": [
        -43.213,
        0.556
      ]
    },
    "createdAt": "2016-01-07T20:26:58.246Z"
  }
}
```
Note: this example uses a `Point`, but you can use any geoJSON object. See geoJSON supported objects [here](../geojson.md).
