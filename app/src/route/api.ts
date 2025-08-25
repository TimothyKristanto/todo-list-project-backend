import express from "express"
import { authMiddleware } from "../middleware/auth-middleware"
import { TodoController } from "../controller/todo-controller"

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

apiRouter.get("/api/todo-list", TodoController.getAllTodos)
apiRouter.post("/api/todo-list", TodoController.createTodo)
// \\d+ means regex to only allow digit as url param
// apiRouter.get("/api/todo-list/:todoId(\\d+)", TodoController.getTodo)
apiRouter.get("/api/todo-list/:todoId", TodoController.getTodo)
apiRouter.put("/api/todo-list/:todoId", TodoController.updateTodo)
apiRouter.delete("/api/todo-list/:todoId", TodoController.deleteTodo)
