import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().min(10, { message: 'Minimum of 10 characters.'}).max(100),
    accountId: z.string().nonempty(),
})

export const CommentValidation = z.object({
    thread: z.string().min(10, { message: 'Minimum of 10 characters.'}).max(100),
})