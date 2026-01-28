"use server";

import * as z from "zod";
import { prisma } from "@/lib/prisma";
import { generatePasswordResetToken } from "@/lib/tokens";
import { sendPasswordResetEmail } from "@/lib/mail";

const ForgotPasswordSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
});

export const forgotPassword = async (values: z.infer<typeof ForgotPasswordSchema>) => {
    const validatedFields = ForgotPasswordSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid email!" };
    }

    const { email } = validatedFields.data;

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (!existingUser) {
        // Return success even if user doesn't exist for security reasons
        return { success: "Reset email sent!" };
    }

    const passwordResetToken = await generatePasswordResetToken(email);
    await sendPasswordResetEmail(
        passwordResetToken.email,
        passwordResetToken.token
    );

    return { success: "Reset email sent!" };
};
