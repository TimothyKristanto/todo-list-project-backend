import jwt from "jsonwebtoken"
import { JWT_SECRET_KEY } from "./env-util"
import { StringValue } from "ms"
import { UserJWTPayload } from "../model/user-model"

export const generateToken = (
    payload: UserJWTPayload,
    expiryTime: StringValue = "1h"
): string => {
    return jwt.sign(payload, JWT_SECRET_KEY || "secret_key", {
        expiresIn: expiryTime,
    })
}

export const verifyToken = (token: string): UserJWTPayload => {
    return jwt.verify(token, JWT_SECRET_KEY || "secret_key") as UserJWTPayload
}
