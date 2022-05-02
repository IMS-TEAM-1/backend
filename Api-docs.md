# Mower project API documentation


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
    "is_on": null, // our on off button
    "created_at": "2022-04-20T11:49:44.000Z",
    "updated_at": "2022-04-20T11:49:44.000Z"
},
```

### operations

`{ip-address}/mowers` - GET all mowers

No body required

`{ip-address}/mowers/{id}` - GET specific mower

No body required

`{ip-address}/mowers/{id}` - PUT update mower

Body with the key and value of the row you want to change

`{ip-address}/mowers/{id}` - POST create mower

name is required when creating a mower

```json
{
    "name":"Foo"
}
```

`{ip-address}/mowers/{id}` - DELETE specific mower

`{ip-address}/mowers/{id}/location` - GET location of specific mower

coming soon...

`{ip-address}/mowers/{id}/location` - PUT update location of specific mower

coming soon...

`{ip-address}/mowers/{id}/images` - GET collision images of specific mower

coming soon...

`{ip-address}/mowers/{id}/images` - POST post a new collision image of specific mower

coming soon...
