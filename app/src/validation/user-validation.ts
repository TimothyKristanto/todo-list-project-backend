import { z, ZodType } from "zod"

export class UserValidation {
    static readonly REGISTER: ZodType = z.object({
        username: z
            .string({
                error: "Username is required!",
            })
            .min(1, {
                error: "Username is required!",
            }),
        email: z
            .email({
                error: "Email is required and must have a valid email format!",
            })
            .min(1, {
                error: "Email is required!",
            }),
        password: z
            .string({
                error: "Password is required!",
            })
            .min(1, {
                error: "Password is required!",
            }),
    })

    static readonly LOGIN: ZodType = z.object({
        email: z
            .email({
                error: "Email is required and must have a valid email format!",
            })
            .min(1, {
                error: "Email is required!",
            }),
        password: z
            .string({
                error: "Password is required!",
            })
            .min(1, {
                error: "Password is required!",
            }),
    })
}
