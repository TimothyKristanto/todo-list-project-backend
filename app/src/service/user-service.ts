import { prismaClient } from "../application/database"
import { toUserResponse, UserRequest, UserResponse } from "../model/user-model"
import { UserValidation } from "../validation/user-validation"
import { Validation } from "../validation/validation"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"

export class UserService {
	static async register(request: UserRequest): Promise<UserResponse> {
		// validate request
		const registerRequest = Validation.validate(
			UserValidation.REGISTER,
			request
		)

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
				token: uuid(),
			},
		})

		// convert user to UserResponse and return it
		return toUserResponse(user)
	}
}
