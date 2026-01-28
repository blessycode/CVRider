
import Link from 'next/link';
import { Session } from "next-auth";
import { logout } from "@/actions/logout";

interface LandingHeaderProps {
    session?: Session | null;
}

export const LandingHeader = ({ session }: LandingHeaderProps) => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1e3a8a] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M10 9h8" /></svg>
                    </div>
                    <span className="text-xl font-bold text-zinc-900">CVRider</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
                    <a href="#features" className="hover:text-[#1e3a8a] transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-[#1e3a8a] transition-colors">How it works</a>
                </nav>

                <div className="flex items-center gap-4">
                    {session ? (
                        <div className="flex items-center gap-4">
                            <span className="text-sm font-medium text-zinc-600">
                                Hi, <span className="text-zinc-900 font-bold">{session.user?.name || session.user?.email}</span>
                            </span>
                            <form action={logout}>
                                <button type="submit" className="text-sm font-medium text-zinc-600 hover:text-red-500 transition-colors">
                                    Log out
                                </button>
                            </form>
                        </div>
                    ) : (
                        <>
                            <Link href="/auth/login" className="text-sm font-medium text-zinc-600 hover:text-[#1e3a8a] transition-colors">
                                Log in
                            </Link>
                            <Link href="/auth/signup" className="rounded-full bg-[#1e3a8a] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-900 transition-colors">
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};
