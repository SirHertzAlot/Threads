import * as z from 'zod';

export const userValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(30),
    username: z.string().min(3, {message: "Please make sure your username is at least 3 characters Long."}).max(30),
    bio: z.string().min(100).max(1000)
})