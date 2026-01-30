import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [
        Github,
        Google,
        // We add Credentials here with an empty authorize to satisfy TypeScript,
        // but the actual logic stays in auth.ts
    ],
    session: { strategy: "jwt" },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.id && session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
} satisfies NextAuthConfig;

