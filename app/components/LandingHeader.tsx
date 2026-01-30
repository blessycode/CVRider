"use client";

import Link from 'next/link';
import { Session } from "next-auth";
import { logout } from "@/actions/logout";
import { useState, useEffect } from 'react';

interface LandingHeaderProps {
    session?: Session | null;
}

export const LandingHeader = ({ session }: LandingHeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
                    ? "border-b border-gray-200 bg-white/80 backdrop-blur-lg py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-lg transition-transform group-hover:scale-110">
                        <span className="font-serif font-bold text-lg">CV</span>
                    </div>
                    <span className="text-2xl font-serif font-bold text-gray-900">CVRider</span>
                </Link>

                {/* Nav Links - Center */}
                <nav className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-600 uppercase tracking-widest">
                    <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                    <a href="#templates" className="hover:text-blue-600 transition-colors">Templates</a>
                    <a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a>
                </nav>

                {/* Auth Buttons - Right */}
                <div className="flex items-center gap-6">
                    {session ? (
                        <div className="flex items-center gap-6">
                            <span className="hidden sm:inline text-sm font-medium text-gray-500">
                                Welcome, <span className="text-gray-900 font-bold">{session.user?.name?.split(' ')[0]}</span>
                            </span>
                            <form action={logout}>
                                <button type="submit" className="text-sm font-bold text-gray-500 hover:text-red-500 transition-colors uppercase tracking-widest">
                                    Log out
                                </button>
                            </form>
                            <Link
                                href="/editor"
                                className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-bold text-white shadow-xl hover:bg-black transition-all active:scale-95 uppercase tracking-widest"
                            >
                                Dashboard
                            </Link>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/login" className="text-sm font-bold text-gray-600 hover:text-blue-600 transition-colors uppercase tracking-widest">
                                Login
                            </Link>
                            <Link
                                href="/auth/signup"
                                className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95 uppercase tracking-widest"
                            >
                                Get Started
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
