"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

const SignupSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required",
    }),
    email: z.string().email({
        message: "Email is required",
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required",
    }),
});

import { redirect } from "next/navigation";

export const signup = async (values: z.infer<typeof SignupSchema>) => {
    // ... validation ...
    const validatedFields = SignupSchema.safeParse(values);
    if (!validatedFields.success) return { error: "Invalid fields!" };

    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return { error: "Email already in use!" };
    }

    try {
        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });
    } catch (error) {
        return { error: "Something went wrong!" };
    }

    redirect("/auth/login");
};
