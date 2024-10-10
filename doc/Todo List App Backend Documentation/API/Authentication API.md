
### Register User

Endpoint: **POST /api/register**

Request Header: NONE

Request Body:
```json
{
	"username": "asdf",
	"email": "asdf@gmail.com",
	"password": "encrypted"
}
```

Response Body (Success):
```json
{
	"data": {
		"token": "uid",
		"username": "asdf"
	}
}
```

Response Body (Failed):
```json
{
	"error": "Register Failed! Make sure that every required data is not emtpy!"
}
```

### User Login

Endpoint: **POST /api/login**

Request Header: NONE

Request Body:
```json
{
	"email": "asdf@gmail.com",
	"password": "encrypted"
}
```

Response Body (Success):
```json
{
	"data": {
		"token": "uuid",
		"username": "asdf",
	}
}
```

Response Body (Failed):
```json
{
	"error": "Login Failed! Make sure that every required data is not emtpy!"
}
```

### User Logout

Endpoint: **DELETE /api/logout**

Request Header: 
```json
X-API-TOKEN: token
```

Request Body: NONE

Response Body (Success):
```json
{
	"data": "Logout Success!"
}
```

Response Body (Failed):
```json
{
	"error": "Logout Failed! Please try again!"
}
```