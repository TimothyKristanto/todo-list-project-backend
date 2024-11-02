import { Todo } from "@prisma/client"

export interface TodoResponse {
    id: number
    title: string
    description: string
    priority: string
    due_date: string
    status: string
}

export function toTodoResponse(prismaTodo: Todo[]): TodoResponse[] {
    const result = prismaTodo.map((todo) => {
        return {
            id: todo.id,
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            due_date: todo.due_date,
            status: todo.status,
        }
    })

    return result
}

export interface TodoRequest {
    title: string
    description: string
    priority: string
    due_date: string
    status: string
}
