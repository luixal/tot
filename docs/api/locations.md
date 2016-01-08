# Locations API

### Get Locations
+ HTTP Method: `GET`
+ URL: `http://<domain>:<port>/api/debug/locations`

Example:

Query:

```
curl -X GET -H "Cache-Control: no-cache" 'http://localhost:3000/api/debug/locations'
```
Response:
```json
{
  "status": "success",
  "data": [
    {
      "_id": "4u6J6eDGSh4bsRumf",
      "deviceId": "1234asdf",
      "location": {
        "type": "Point",
        "coordinates": [
          100,
          0
        ]
      },
      "createdAt": "2016-01-08T00:07:57.207Z"
    },
    {
      "_id": "ftytEw7Nk5QoszfcN",
      "deviceId": "1234asdf",
      "location": {
        "type": "Point",
        "coordinates": [
          -43,
          0.345
        ]
      },
      "createdAt": "2016-01-08T00:08:13.788Z"
    }
  ]
}
```
### Get Locations by ID
+ HTTP Method: `GET`
+ URL: `http://<domain>:<port>/api/debug/locations/<location_id>`

Example:

Query:

```
curl -X GET -H "Cache-Control: no-cache" 'http://localhost:3000/api/debug/locations/4u6J6eDGSh4bsRumf'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "4u6J6eDGSh4bsRumf",
    "deviceId": "1234asdf",
    "location": {
      "type": "Point",
      "coordinates": [
        100,
        0
      ]
    },
    "createdAt": "2016-01-08T00:07:57.207Z"
  }
}
```
### Create Location
+ HTTP Method: `POST`
+ URL: `http://<domain>:<port>/api/debug/locations`
+ Headers: `Content-Type: application/json`

Example:

Query:

```
curl -X POST -H "Content-Type: application/json" -d '{
    "deviceId": "1234asdf",
    "location": {
      "type": "Point",
      "coordinates": [-43.0, 0.345]
    }
}' 'http://localhost:3000/api/debug/locations'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "ftytEw7Nk5QoszfcN",
    "deviceId": "1234asdf",
    "location": {
      "type": "Point",
      "coordinates": [
        -43,
        0.345
      ]
    },
    "createdAt": "2016-01-08T00:08:13.788Z"
  }
}
```

### Create Location without using GeoJson Point
This method allows you to create a location using just plain coordinates (long, lat) and the server will create the geoJson `Point` object for you.

+ HTTP Method: `POST`
+ URL: `http://<domain>:<port>/api/debug/locations/addPoint`
+ Headers: `Content-Type: application/json`

Example:

Query:

```
curl -X POST -H "Content-Type: application/json" -d '{
    "deviceId": "1",
    "lat": 0.456,
    "lng": -43.123
}' 'http://localhost:3000/api/debug/locations/addPoint'
```
Response:
```json
{
  "status": "success",
  "data": {
    "_id": "kxs4BbMcsFCs5C3eb",
    "deviceId": "1",
    "location": {
      "type": "Point",
      "coordinates": [
        -43.123,
        0.456
      ]
    },
    "createdAt": "2016-01-08T00:16:26.792Z"
  }
}
```
Note: these examples use a `Point`, but you can use any geoJSON object. See geoJSON supported objects [here](../geojson.md). Anyway, as this intented for tracking devices locations, not sure why another object type different from `Point` would be necessary.
