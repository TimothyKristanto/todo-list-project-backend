import { Request, Response, NextFunction } from "express"
import {
	LoginUserRequest,
	RegisterUserRequest,
	UserResponse,
} from "../model/user-model"
import { UserService } from "../service/user-service"

export class UserController {
	static async register(req: Request, res: Response, next: NextFunction) {
		try {
			const request: RegisterUserRequest = req.body as RegisterUserRequest
			const response: UserResponse = await UserService.register(request)

			res.status(200).json({
				data: response,
			})
		} catch (error) {
			// pass to the middleware if error exists
			next(error)
		}
	}

	static async login(req: Request, res: Response, next: NextFunction) {
		try {
			const request = req.body as LoginUserRequest
			const response = UserService.login(request)

			res.status(200).json({
				data: response,
			})
		} catch (error) {
			next(error)
		}
	}
}
