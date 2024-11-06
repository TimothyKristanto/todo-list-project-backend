import { Todo, User } from "@prisma/client"
import {
    TodoCreateRequest,
    TodoResponse,
    TodoUpdateRequest,
    toTodoResponse,
    toTodoResponseList,
} from "../model/todo-model"
import { prismaClient } from "../application/database"
import { Validation } from "../validation/validation"
import { TodoValidation } from "../validation/todo-validation"
import { ResponseError } from "../error/response-error"
import { logger } from "../application/logging"

export class TodoService {
    static async getAllTodo(user: User): Promise<TodoResponse[]> {
        const todo = await prismaClient.todo.findMany({
            where: {
                user_id: user.id,
            },
        })

        return toTodoResponseList(todo)
    }

    static async getTodo(user: User, todo_id: number): Promise<TodoResponse> {
        const todo = await this.checkTodoIsEmpty(user.id, todo_id)

        return toTodoResponse(todo)
    }

    static async createTodo(
        user: User,
        req: TodoCreateRequest
    ): Promise<string> {
        // validate request
        const todoRequest = Validation.validate(TodoValidation.CREATE, req)

        const todo = await prismaClient.todo.create({
            data: {
                title: todoRequest.title,
                description: todoRequest.description,
                status: todoRequest.status,
                priority: todoRequest.priority,
                due_date: todoRequest.due_date,
                user_id: user.id,
            },
        })

        return "Data created successfully!"
    }

    static async checkTodoIsEmpty(
        user_id: number,
        todo_id: number
    ): Promise<Todo> {
        const todo = await prismaClient.todo.findUnique({
            where: {
                id: todo_id,
                user_id: user_id,
            },
        })

        if (!todo) {
            throw new ResponseError(404, "Todo not found!")
        }

        return todo
    }

    static async updateTodo(
        user: User,
        req: TodoUpdateRequest
    ): Promise<string> {
        const todoValidation = Validation.validate(TodoValidation.UPDATE, req)

        await this.checkTodoIsEmpty(user.id, todoValidation.id)

        const todoUpdate = await prismaClient.todo.update({
            where: {
                id: todoValidation.id,
                user_id: user.id,
            },
            data: todoValidation,
        })

        logger.info("UPDATE RESULT: " + todoUpdate)

        return "Data update was successful!"
    }

    static async deleteTodo(user: User, todo_id: number): Promise<String> {
        await this.checkTodoIsEmpty(user.id, todo_id)

        const todoDelete = await prismaClient.todo.delete({
            where: {
                user_id: user.id,
                id: todo_id,
            },
        })

        return "Data has been deleted successfully!"
    }
}
