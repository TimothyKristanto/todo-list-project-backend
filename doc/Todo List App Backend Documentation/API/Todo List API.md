
### Get All Todo List

Endpoint: **GET /api/todo-list**

Request Header:
```json
X-API-TOKEN: token
```

Request Body: NONE

Response Body (Success):
```json
{
	"data": [
		{
			"todo_list_id": "id",
			"title": "Do Math Homework",
			"description": "Do number 1 - 10",
			"priority": "High",
			"due_date": "12 October 2024",
			"status": "Doing"
		},
		{
			"todo_list_id": "id",
			"title": "Do Physic Homework",
			"description": "Do number 1 - 5",
			"priority": "Med",
			"due_date": "15 October 2024",
			"status": "To Do"
		},
		{
			"todo_list_id": "id",
			"title": "Do IT Homework",
			"description": "Do number 1 only",
			"priority": "Low",
			"due_date": "20 October 2024",
			"status": "To Do"
		},
	]
}
```

Response Body (Failed):
```json
{
	"error": "Error while fetching data!"
}
```

### Get Todo List by ID

Endpoint: **GET /api/todo-list/:todo-list-id**

Request Header:
```json
X-API-TOKEN: token
```

Request Body: NONE

Response Body (Success):
```json
{
	"data": {
		"id": "id",
		"title": "Do Math Homework",
		"description": "Do number 1 - 10",
		"priority": "High",
		"due_date": "12 October 2024",
		"status": "Doing"
	},
}
```

Response Body (Failed):
```json
{
	"error": "Error while fetching data!"
}
```

### Update Todo List

Endpoint: **PUT /api/todo-list/:todo-list-id**

Request Header:
```json
X-API-TOKEN: token
```

Request Body: 
```json
{
	"id": "id"
	"title": "Do Physic Homework",
	"description": "Do number 1 - 5",
	"priority": "Med",
	"due_date": "15 October 2024",
	"status": "Finished"
}
```

Response Body (Success):
```json
{
	"data": "Update successful!"
}
```

Response Body (Failed):
```json
{
	"error": "Error while updating data!"
}
```

### Create Todo List

Endpoint: **POST /api/todo-list**

Request Header:
```json
X-API-TOKEN: token
```

Request Body: 
```json
{
	"title": "Do Physic Homework",
	"description": "Do number 1 - 5",
	"priority": "Med",
	"due_date": "15 October 2024",
	"status": "To Do"
}
```

Response Body (Success):
```json
{
	"data": "Data created successfully!"
}
```

Response Body (Failed):
```json
{
	"error": "Error while creating data!"
}
```

### Delete Todo List

Endpoint: **DELETE /api/todo-list/:todo-list-id**

Request Header:
```json
X-API-TOKEN: token
```

Request Body: NONE

Response Body (Success):
```json
{
	"data": "Data deleted successfully!"
}
```

Response Body (Failed):
```json
{
	"error": "Error while fetching data!"
}
```
