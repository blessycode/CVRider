"use server";

import * as z from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { email, password } = validatedFields.data;

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/",
        });
    } catch (error: any) {
        console.error("Login error details:", error);
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: error.message || "Something went wrong!" };
            }
        }

        return { error: error.message || "An unexpected error occurred." };
    }

    return { success: "Logged in!" };
};
