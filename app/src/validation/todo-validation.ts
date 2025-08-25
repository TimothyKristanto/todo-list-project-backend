import { z, ZodType } from "zod"

export class TodoValidation {
    static readonly CREATE: ZodType = z.object({
        title: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        description: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        status: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        priority: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        due_date: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
    })

    static readonly UPDATE: ZodType = z.object({
        id: z
            .number({
                error: "All data must be filled!",
            })
            .positive(),
        title: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        description: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        status: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        priority: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
        due_date: z
            .string({
                error: "All data must be filled!",
            })
            .min(1, {
                error: "All data must be filled!",
            }),
    })
}
