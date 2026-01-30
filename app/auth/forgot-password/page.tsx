"use client";

import { useState, useTransition } from "react";
import Link from 'next/link';
import { forgotPassword } from "@/actions/forgot-password";
import { Mail, ArrowLeft, Send, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ForgotPasswordPage() {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;

        setError("");
        setSuccess("");

        startTransition(() => {
            forgotPassword({ email }).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });
    };

    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-50 rounded-full blur-[120px] opacity-60"></div>
            </div>

            <div className="w-full max-w-md relative">
                {/* Back Link */}
                <Link
                    href="/auth/login"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to login
                </Link>

                <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col">
                    <div className="text-center mb-10">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100/50 text-blue-600 mb-6">
                            <Mail className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">Forgot Password?</h2>
                        <p className="text-gray-500 font-medium px-4">
                            Don't worry! Enter your email and we'll send you reset instructions.
                        </p>
                    </div>

                    <form onSubmit={onSubmit} className="flex flex-col gap-6">
                        <div className="space-y-2.5">
                            <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:scale-110 transition-transform">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                </div>
                                <input
                                    name="email"
                                    type="email"
                                    disabled={isPending}
                                    className="block w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-transparent rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 focus:bg-white shadow-sm hover:bg-gray-100/50 transition-all disabled:opacity-50"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                        </div>

                        {(error || success) && (
                            <div className={`flex items-start gap-3 rounded-2xl p-4 animate-in fade-in slide-in-from-top-4 duration-300 ${error ? 'bg-red-50 border border-red-100' : 'bg-emerald-50 border border-emerald-100'}`}>
                                {error ? (
                                    <ShieldCheck className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                ) : (
                                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                                )}
                                <p className={`text-sm font-bold ${error ? 'text-red-700' : 'text-emerald-700'}`}>{error || success}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isPending}
                            className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl shadow-gray-200 hover:shadow-2xl hover:bg-black hover:-translate-y-1 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                        >
                            {isPending ? (
                                <>
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Sending Link...</span>
                                </>
                            ) : (
                                <>
                                    <span className="font-heading tracking-wide uppercase text-sm">Send Reset Link</span>
                                    <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-10 flex items-center justify-center gap-2">
                        <Sparkles className="h-4 w-4 text-blue-500" />
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Secure Password Reset</span>
                    </div>
                </div>

                <div className="mt-12 text-center text-zinc-400 text-xs font-bold tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} CVRider Official
                </div>
            </div>
        </div>
    );
}
