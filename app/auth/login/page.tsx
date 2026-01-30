"use client";

import { useState, useTransition } from "react";
import Link from 'next/link';
import { login } from "@/actions/login";
import { Mail, Lock, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function LoginPage() {
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        setError("");
        setSuccess("");

        startTransition(() => {
            login({ email, password }).then((data) => {
                if (data?.error) {
                    setError(data.error);
                }
                if (data?.success) {
                    setSuccess(data.success);
                }
            });
        });
    };

    return (
        <div className="relative flex min-h-screen bg-white overflow-hidden">
            {/* Background decorative blob for mobile */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-50 rounded-full blur-3xl lg:hidden"></div>

            {/* Left side - Form */}
            <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-20 xl:px-24 relative z-10">
                <div className="mx-auto w-full max-w-md">
                    {/* Back Link */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors mb-8 group"
                    >
                        <ArrowRight className="h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                        Back to home
                    </Link>

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 mb-12 group">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M10 9h8" /></svg>
                        </div>
                        <span className="text-3xl font-serif font-bold tracking-tight text-gray-900">CVRider</span>
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 mb-3">Welcome back</h1>
                        <p className="text-lg text-gray-500 font-medium">Log in to your account and continue building your career.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={onSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2.5">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:scale-110 transition-transform">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    disabled={isPending}
                                    className="block w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-transparent rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 focus:bg-white shadow-sm hover:bg-gray-100/50 transition-all disabled:opacity-50"
                                    placeholder="alex@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2.5">
                            <div className="flex items-center justify-between ml-1">
                                <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                                    Password
                                </label>
                                <Link href="/auth/forgot-password" university-case className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                                    Forgot?
                                </Link>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:scale-110 transition-transform">
                                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    disabled={isPending}
                                    className="block w-full pl-12 pr-12 py-4 text-gray-900 bg-gray-50 border-2 border-transparent rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-blue-600 focus:bg-white shadow-sm hover:bg-gray-100/50 transition-all disabled:opacity-50"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-blue-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                                    ) : (
                                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error/Success Messages */}
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

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="group relative w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white font-bold rounded-2xl shadow-xl shadow-gray-200 hover:shadow-2xl hover:bg-black hover:-translate-y-1 active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:transform-none"
                        >
                            {isPending ? (
                                <>
                                    <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>Verifying...</span>
                                </>
                            ) : (
                                <>
                                    <span className="font-heading tracking-wide uppercase text-sm">Sign in</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-12 text-center text-gray-500 font-medium">
                        New to CVRider?{' '}
                        <Link href="/auth/signup" className="text-blue-600 font-bold hover:text-blue-700 hover:underline decoration-2 underline-offset-4 transition-all">
                            Create a free account
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side - Visual Experience */}
            <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
                {/* Modern Abstract Background */}
                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-y-1/3 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 flex flex-col justify-center px-20 text-white w-full">
                    <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 mb-10 w-fit animate-fade-in">
                        <Zap className="h-4 w-4 text-blue-400 fill-blue-400" />
                        <span className="text-sm font-bold tracking-widest uppercase">Premium Experience</span>
                    </div>

                    <h2 className="text-6xl font-serif font-bold mb-8 leading-[1.15] animate-fade-in-up">
                        Elevate your <br />
                        <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent italic">career path</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg font-medium">
                        Our intelligent CV builder helps you highlight your strengths and stand out in seconds.
                    </p>

                    {/* High-quality Stats Cards */}
                    <div className="grid grid-cols-2 gap-6 max-w-xl">
                        {[
                            { label: 'Users Worldwide', value: '50K+', icon: <CheckCircle2 className="h-5 w-5 text-blue-400" /> },
                            { label: 'ATS Templates', value: '20+', icon: <CheckCircle2 className="h-5 w-5 text-blue-400" /> }
                        ].map((stat, i) => (
                            <div key={i} className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors duration-300">
                                <div className="mb-4">{stat.icon}</div>
                                <div className="text-3xl font-bold font-serif mb-1">{stat.value}</div>
                                <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-10 right-10 flex gap-4 text-white/20">
                        <Sparkles size={120} className="rotate-12 opacity-50" />
                    </div>
                </div>
            </div>
        </div>
    );
}
