import { z, ZodType } from "zod"

export class TodoValidation {
    static readonly CREATE: ZodType = z.object({
        username: z.string().min(1).max(100),
        email: z.string().min(1).max(150),
        password: z.string().min(1).max(100),
    })
}
