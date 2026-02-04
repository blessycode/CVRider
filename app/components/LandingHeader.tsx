"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";

export const LandingHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 z-[100] w-full transition-all duration-700 ${isScrolled
                ? "py-4"
                : "py-8"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className={`
                    relative flex h-20 items-center justify-between px-8 rounded-[2rem] transition-all duration-700
                    ${isScrolled
                        ? "bg-white/80 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-white/50"
                        : "bg-transparent border border-transparent"}
                `}>
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-xl transition-all group-hover:scale-105 group-hover:shadow-blue-200 group-hover:-rotate-3">
                            <span className="font-serif font-black text-xl">CV</span>
                        </div>
                        <span className={`text-2xl font-heading font-black tracking-tight transition-colors duration-500 ${isScrolled ? 'text-gray-900' : 'text-gray-950'}`}>CVRider</span>
                    </Link>

                    {/* Navigation - Desktop */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {[
                            { name: 'Features', href: '#features' },
                            { name: 'Resources', href: '#' },
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/editor"
                            className="group relative hidden sm:flex h-12 px-8 items-center justify-center rounded-2xl bg-gray-900 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-black hover:-translate-y-0.5 transition-all overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Building
                                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </Link>

                        <button
                            className="lg:hidden p-3 rounded-2xl border border-gray-100 hover:bg-gray-50 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Background Progress Bar (Optional Subtle Touch) */}
                    {isScrolled && (
                        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-32 left-6 right-6 bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 p-10 flex flex-col gap-8 lg:hidden animate-fade-in-up">
                    {[
                        { name: 'Features', href: '#features' },
                        { name: 'Resources', href: '#' },
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-4"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/editor"
                        onClick={() => setMobileMenuOpen(false)}
                        className="h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-black uppercase tracking-widest text-xs"
                    >
                        Get Started
                    </Link>
                </div>
            )}
        </header>
    );
};
