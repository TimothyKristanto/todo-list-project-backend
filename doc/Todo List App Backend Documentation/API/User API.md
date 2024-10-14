
### Get User by UID

Endpoint: **GET /api/user**

Request Header:
```json
X-API-TOKEN: token
```

Request Body: NONE

Response Body (Success):
```json
{
	"data": {
		"username": "asdf",
	}
}
```

Response Body (Failed):
```json
{
	"error": "No user found!"
}
```