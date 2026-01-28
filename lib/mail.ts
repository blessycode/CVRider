import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `${domain}/auth/reset-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev", // Update this with your verified domain
        to: email,
        subject: "Reset your password",
        html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
    });
};
