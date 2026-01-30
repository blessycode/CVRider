import { auth } from "@/auth";

export default auth((req) => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    // Add any custom logic here if needed
    // For example, protecting specific routes
    return;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
