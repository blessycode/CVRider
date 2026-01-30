import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    // Optional: Protect routes
    // if (!isLoggedIn && nextUrl.pathname !== "/auth/login") {
    //   return Response.redirect(new URL("/auth/login", nextUrl));
    // }

    return;
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

