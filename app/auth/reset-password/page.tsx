"use client";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from 'next/link';
import { resetPassword } from "@/actions/reset-password";
import { Suspense } from "react";

function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get("password") as string;
        const confirmPassword = formData.get("confirmPassword") as string;

        if (password !== confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        setError("");
        setSuccess("");

        startTransition(() => {
            resetPassword({ password }, token).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    return (
        <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-zinc-100">
            <div className="text-center mb-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a8a] text-white shadow-md mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M10 9h8" /></svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900">Reset your password</h2>
                <p className="text-zinc-500 mt-2">Enter your new password below.</p>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-700">New Password</label>
                    <input
                        name="password"
                        type="password"
                        disabled={isPending}
                        className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-zinc-700">Confirm Password</label>
                    <input
                        name="confirmPassword"
                        type="password"
                        disabled={isPending}
                        className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                        placeholder="••••••••"
                        required
                    />
                </div>

                {error && (
                    <div className="rounded-lg bg-red-50 p-3 text-sm text-red-500 border border-red-100">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-500 border border-emerald-100">
                        {success}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={isPending}
                    className="mt-4 rounded-lg bg-[#1e3a8a] py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-900 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50"
                >
                    {isPending ? "Resetting..." : "Reset Password"}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-zinc-500">
                <p>Back to <Link href="/auth/login" className="font-semibold text-[#1e3a8a] hover:underline">login</Link></p>
            </div>
        </div>
    );
}

export default function ResetPasswordPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f6fa] p-6">
            <Suspense fallback={<div>Loading...</div>}>
                <ResetPasswordForm />
            </Suspense>

            <div className="mt-8 text-center text-xs text-zinc-400">
                &copy; {new Date().getFullYear()} CVRider
            </div>
        </div>
    );
}
