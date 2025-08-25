import { Response, NextFunction } from "express"
import { UserRequest } from "../type/user-request"
import { verifyToken } from "../utils/jwt-util"
import { ResponseError } from "../error/response-error"

export const authMiddleware = async (
    req: UserRequest,
    res: Response,
    next: NextFunction
) => {
    // Get token from Authorization header
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1] // Format: "Bearer <token>"

    if (!token) {
        next(new ResponseError(400, "Access Rejected!"))
    }

    try {
        // Verify token
        const payload = verifyToken(token!)

        // Attach user payload to request object
        if (payload) {
            req.user = payload
        } else {
            next(new ResponseError(400, "Access Rejected!"))
        }

        next()
    } catch (error) {
        next(error)
    }
}
