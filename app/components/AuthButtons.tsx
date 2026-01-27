"use client"

import { signIn, signOut } from "next-auth/react"
import { Button } from "./ui/Button"

export function SignInButton() {
    return (
        <Button onClick={() => signIn()} variant="primary">
            Sign In
        </Button>
    )
}

export function SignOutButton() {
    return (
        <Button onClick={() => signOut()} variant="secondary">
            Sign Out
        </Button>
    )
}
