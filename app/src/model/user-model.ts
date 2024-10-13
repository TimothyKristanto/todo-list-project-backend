import { User } from "@prisma/client"

export interface UserRequest {
	username: string
	email: string
	password: string
}

export interface UserResponse {
	token?: string
	username: string
}

export function toUserResponse(prismaUser: User) {
	return {
		token: prismaUser.token ?? "",
		username: prismaUser.username,
	}
}
