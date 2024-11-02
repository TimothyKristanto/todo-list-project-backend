import { User } from "@prisma/client"
import { TodoRequest, TodoResponse, toTodoResponse } from "../model/todo-model"
import { prismaClient } from "../application/database"
import { Validation } from "../validation/validation"
import { TodoValidation } from "../validation/todo-validation"
import { Request } from "express"

export class TodoService {
    static async getAllTodo(user: User): Promise<TodoResponse[]> {
        const todo = await prismaClient.todo.findMany({
            where: {
                user_id: user.id,
            },
        })

        return toTodoResponse(todo)
    }

    static async createTodo(user: User, req: TodoRequest): Promise<String> {
        // validate request
        const todoRequest = Validation.validate(TodoValidation.CREATE, req)

        const todo = await prismaClient.todo.create({
            data: {
                title: req.title,
                description: req.description,
                status: req.status,
                priority: req.priority,
                due_date: req.due_date,
                user_id: user.id,
            },
        })

        return "Data created successfully!"
    }
}
