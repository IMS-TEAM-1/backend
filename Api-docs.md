# Mower project API documentation

## Operations
{ip-address}/users - GET request that fetches all users

{ip-address}/users/{id} - GET request a specific user based on ID

{ip-address}/users/{id} - PUT update a user

{ip-address}/users/{id} - POST create user

{ip-address}/users/{id} - DELETE specific user

{ip-address}/mowers - GET all mowers

{ip-address}/mowers/{id} - GET specific mower

{ip-address}/mowers/{id} - PUT update mower

{ip-address}/mowers/{id} - POST create mower

{ip-address}/mowers/{id} - DELETE specific mower

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
