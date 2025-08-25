import { prismaClient } from "../utils/database-util"
import { ResponseError } from "../error/response-error"
import {
    RegisterUserRequest,
    UserResponse,
    LoginUserRequest,
    toUserResponse,
} from "../model/user-model"
import { UserValidation } from "../validation/user-validation"
import { Validation } from "../validation/validation"
import bcrypt from "bcrypt"

export class UserService {
    static async register(request: RegisterUserRequest): Promise<UserResponse> {
        // validate request
        const registerRequest = Validation.validate(
            UserValidation.REGISTER,
            request
        )

        const email = await prismaClient.user.findFirst({
            where: {
                email: registerRequest.email,
            },
        })

        if (email) {
            throw new ResponseError(400, "Email already exists!")
        }

        // encrypt password
        registerRequest.password = await bcrypt.hash(
            registerRequest.password,
            10
        )

        // add user to db
        const user = await prismaClient.user.create({
            data: {
                username: registerRequest.username,
                email: registerRequest.email,
                password: registerRequest.password,
            },
        })

        // convert user to UserResponse and return it
        return toUserResponse(user.id, user.username, user.email)
    }

    static async login(request: LoginUserRequest): Promise<UserResponse> {
        const loginRequest = Validation.validate(UserValidation.LOGIN, request)

        let user = await prismaClient.user.findFirst({
            where: {
                email: loginRequest.email,
            },
        })

        if (!user) {
            throw new ResponseError(400, "Invalid email or password!")
        }

        const passwordIsValid = await bcrypt.compare(
            loginRequest.password,
            user.password
        )

        if (!passwordIsValid) {
            throw new ResponseError(400, "Invalid email or password!")
        }

        return toUserResponse(user.id, user.username, user.email)
    }
}
