import { NextFunction, Response } from "express"
import { TodoService } from "../service/todo-service"
import { UserRequest } from "../type/user-request"
import { TodoRequest } from "../model/todo-model"

export class TodoController {
	static async getAllTodos(
		req: UserRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const response = await TodoService.getAllTodo(req.user!)

			res.status(200).json({
				data: response,
			})
		} catch (error) {
			next(error)
		}
	}

	static async createTodo(
		req: UserRequest,
		res: Response,
		next: NextFunction
	) {
		try {
			const request = req.body as TodoRequest
			const response = await TodoService.createTodo(req.user!, request)

			res.status(200).json({
				data: response,
			})
		} catch (error) {
			next(error)
		}
	}
}
