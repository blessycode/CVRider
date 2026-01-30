"use client";

import { useState, useTransition } from "react";
import Link from 'next/link';
import { signup } from "@/actions/signup";
import { User, Mail, Lock, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function SignupPage() {
    const [error, setError] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        setError("");

        startTransition(() => {
            signup({ name, email, password }).then((data) => {
                if (data?.error) {
                    setError(data.error);
                }
            }).catch((err) => {
                setError("Something went wrong!");
            });
        });
    };

    return (
        <div className="relative flex min-h-screen bg-white overflow-hidden">
            {/* Background decorative blob for mobile */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-indigo-50 rounded-full blur-3xl lg:hidden"></div>

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
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-xl shadow-indigo-200 group-hover:scale-110 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M10 9h8" /></svg>
                        </div>
                        <span className="text-3xl font-serif font-bold tracking-tight text-gray-900">CVRider</span>
                    </Link>

                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-serif font-bold tracking-tight text-gray-900 mb-3">Create Account</h1>
                        <p className="text-lg text-gray-500 font-medium">Join 50,000+ professionals and build your dream CV today.</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={onSubmit} className="space-y-5">
                        {/* Name Field */}
                        <div className="space-y-2.5">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-700 ml-1">
                                Full Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:scale-110 transition-transform">
                                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                </div>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    disabled={isPending}
                                    className="block w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-transparent rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-600 focus:bg-white shadow-sm hover:bg-gray-100/50 transition-all disabled:opacity-50"
                                    placeholder="Alex Johnson"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2.5">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:scale-110 transition-transform">
                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    disabled={isPending}
                                    className="block w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-transparent rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-600 focus:bg-white shadow-sm hover:bg-gray-100/50 transition-all disabled:opacity-50"
                                    placeholder="alex@example.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2.5">
                            <label htmlFor="password" university-case className="block text-sm font-bold text-gray-700 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none group-focus-within:scale-110 transition-transform">
                                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    minLength={6}
                                    disabled={isPending}
                                    className="block w-full pl-12 pr-4 py-4 text-gray-900 bg-gray-50 border-2 border-transparent rounded-2xl placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-indigo-600 focus:bg-white shadow-sm hover:bg-gray-100/50 transition-all disabled:opacity-50"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="flex items-start gap-3 rounded-2xl bg-red-50 border border-red-100 p-4 animate-in fade-in slide-in-from-top-4 duration-300">
                                <ShieldCheck className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm font-bold text-red-700">{error}</p>
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
                                    <span>Creating Account...</span>
                                </>
                            ) : (
                                <>
                                    <span className="font-heading tracking-wide uppercase text-sm">Get Started Now</span>
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1.5 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="mt-12 text-center text-gray-500 font-medium">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline decoration-2 underline-offset-4 transition-all">
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right side - Visual Experience */}
            <div className="hidden lg:flex lg:flex-1 relative overflow-hidden">
                {/* Modern Abstract BG with Indigo/Blue gradient */}
                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/3 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 flex flex-col justify-center px-16 xl:px-24 text-white w-full">
                    <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 mb-10 w-fit animate-fade-in">
                        <Sparkles className="h-4 w-4 text-indigo-400 fill-indigo-400" />
                        <span className="text-sm font-bold tracking-widest uppercase">Start Your Journey</span>
                    </div>

                    <h2 className="text-6xl font-serif font-bold mb-8 leading-[1.15] animate-fade-in-up">
                        Unlock your <br />
                        <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent italic">full potential</span>
                    </h2>

                    <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg font-medium">
                        Join CVRider and get access to premium tools that help you land higher-paying roles faster.
                    </p>

                    {/* Features Grid */}
                    <div className="space-y-6 max-w-xl">
                        {[
                            { title: 'Smart Previews', desc: 'See your changes in real-time.', icon: <Zap className="h-5 w-5 text-indigo-400" /> },
                            { title: 'ATS Compliance', desc: 'Pass every recruiter filter.', icon: <CheckCircle2 className="h-5 w-5 text-indigo-400" /> }
                        ].map((feat, i) => (
                            <div key={i} className="flex gap-5 p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300">
                                <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{feat.title}</h4>
                                    <p className="text-gray-500 font-medium">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
