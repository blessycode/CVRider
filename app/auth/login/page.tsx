
import Link from 'next/link';

export default function LoginPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#f5f6fa] p-6">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-zinc-100">
                <div className="text-center mb-8">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a8a] text-white shadow-md mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M10 9h8" /></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-zinc-900">Welcome back</h2>
                    <p className="text-zinc-500 mt-2">Sign in to your CVRider account</p>
                </div>

                <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-zinc-700">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-zinc-700">Password</label>
                        <input
                            type="password"
                            className="w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button type="button" className="mt-4 rounded-lg bg-[#1e3a8a] py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-900 hover:shadow-xl hover:-translate-y-0.5">
                        Sign In
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-zinc-500">
                    <p>Don't have an account? <Link href="/auth/signup" className="font-semibold text-[#1e3a8a] hover:underline">Sign up</Link></p>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-zinc-400">
                &copy; {new Date().getFullYear()} CVRider
            </div>
        </div>
    );
}
