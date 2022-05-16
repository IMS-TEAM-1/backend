# Mower project API documentation

We are only working with GET and POST.
To update

## Example code

language: python3

```python
import request
import json

# Create a constant for our url, notice the slash / in the end.
url = "{API URL WILL GO HERE}/"

# make the request and convert it to json object
# here we concatenate the base url with the object we want to request, "mowers"
mowers = request.get(url+"mowers").json()

print(mowers)

```

## users

Example of users object looks like this:

```json
{
    "id": 40,
    "username": "user-01",
    "password": "$2a$10$fVTlwb5OS1k.Iup6jtjsp.7jIO.MW.YKsV3T280tY5YdhAczi0CES",
    "token": null,
    "created_at": "2022-04-20T11:49:44.000Z",
    "updated_at": "2022-04-20T11:49:44.000Z"
},
```


### operations

`{ip-address}/users` - GET request that fetches all users

No body required

`{ip-address}/users/{id}` - GET request a specific user based on ID

No body required

`{ip-address}/users/{id}` - PUT update a user

in the body of the request, add the key value along with the new value it shall receive. Ex, I want to change the username of a user. That means my request.body will look like this:

```json
{
    "username":"Bob",
    // more key values if you want...
}
```

`{ip-address}/users/{id}` - POST create user

Two fields are required when creating a user. Username and Password

```json
{
    "username":"Foo",
    "password":"Bar"
}

```

`{ip-address}/users/{id}` - DELETE specific user

No body required


## mowers

Example of mower object

```json
{
    "id": 37,
    "name": "mower-01",
    "token": null,
    "state": "STANDBY" || "MANUAL" || "AUTONOMOUS",
    "created_at": "2022-04-20T11:49:44.000Z",
    "updated_at": "2022-04-20T11:49:44.000Z"
},
```

### operations

`{ip-address}/mowers` - GET all mowers

No body required


`{ip-address}/mowers/{id}` - GET specific mower

No body required


`{ip-address}/mowers/{id}` - POST update mower

Body with the key and value of the row you want to change


`{ip-address}/mowers/{id}` - POST create mower

name is required when creating a mower

```json
{
    "name":"Foo"
}
```

`{ip-address}/mowers/{id}` - DELETE specific mower

No body required

`{ip-address}/mowers/{id}/locations` - GET location of specific mower

It will contain an array of images if the exist, else an empty array.

Example of location object.

```json
{
  "id": 34,
  "mower_id": 2,
  "x": 0,
  "y": 0,
  "created_at": "2022-05-05T10:11:19.000Z",
  "images": [
      {
          "id": 1,
          "mower_location_id": 34,
          "image": "base64",
          "classification": null
      }
  ]
}
```

`{ip-address}/mowers/{id}/locations` - POST update location of specific mower

Make a request with the key and value you want to change


`{ip-address}/mowers/{id}/images` - GET collision images of specific mower


Example of image object

```json
{
  "id": 1,
  "mower_location_id": 34,
  "image": "base64",
  "classification": null
}
    
```


`{ip-address}/mowers/{id}/images` - POST post a new collision image of specific mower

We need a body that contains both the image object and the location where it detected the collision, as in the example below

```json
{
        "x": 0,
        "y": 0,
        "image": "BASE64"
}
```

the server will ask google for classification on the image before storing it.
