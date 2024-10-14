import { Request, Response, NextFunction } from "express"
import { UserRequest, UserResponse } from "../model/user-model"
import { UserService } from "../service/user-service"

export class UserController {
    static async register(req: Request, res: Response, next: NextFunction) {
        try {
            const request: UserRequest = req.body as UserRequest
            const response: UserResponse = await UserService.register(request)

            res.status(200).json({
                data: response,
            })
        } catch (error) {
            // pass to the middleware if error exists
            next(error)
        }
    }
}
