import { Request } from "express"
import { UserJWTPayload } from "../model/user-model"

export interface UserRequest extends Request {
    user?: UserJWTPayload
}
