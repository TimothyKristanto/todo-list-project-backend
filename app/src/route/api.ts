import express from "express"
import { authMiddleware } from "../middleware/auth-middleware"
import { TodoController } from "../controller/todo-controller"

export const apiRouter = express.Router()
apiRouter.use(authMiddleware)

apiRouter.get("/todo-list", TodoController.getAllTodos)
apiRouter.post("/todo-list", TodoController.createTodo)
// \\d+ means regex to only allow digit as url param
// apiRouter.get("/todo-list/:todoId(\\d+)", TodoController.getTodo)
apiRouter.get("/todo-list/:todoId", TodoController.getTodo)
apiRouter.put("/todo-list/:todoId", TodoController.updateTodo)
apiRouter.delete("/todo-list/:todoId", TodoController.deleteTodo)
