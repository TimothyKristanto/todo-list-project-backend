
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
		"email": "asdf@gmail.com"
	}
}
```

Response Body (Failed):
```json
{
	"error": "No user found!"
}
```

### Update User Data by UID

Endpoint: **PATCH /api/user**

Request Header:
```json
X-API-TOKEN: token
```

Request Body:
```json
{
	"username": "asdfgh", // optional
	"password": "encrypted" // optional
}
```

Response Body (Success):
```json
{
	"data": "User updated successfully!"
}
```

Response Body (Failed):
```json
{
	"error": "No user found! Update not possible!"
}
```