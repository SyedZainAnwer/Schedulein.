import { z } from "zod"

export const RegisterationValidation = z.object({
    username: z.string().min(3).max(128).optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).max(128).optional(),
    socialId: z.string().optional(),
    socialProvider: z.enum(["google", "facebook", "apple"]).optional(),
    photo_url: z.string().url().optional()
}).refine((data) => {
    return (data.email && data.password && data.username) || (data.socialId && data.socialProvider);
}, {
    message: "Must provide either username/email/password or any social registration",
});

export const LoginValidation = z.object({
    email: z.string().email().optional(),
    password: z.string().min(8).max(128).optional(),
    socialId: z.string().optional(),
    socialProvider: z.enum(["google", "facebook", "apple"]).optional()
}).refine((data) => {
    return (data.email && data.password) || (data.socialId && data.socialProvider);
}, {
    message: "Must provide either username/email/password or any social login",
});