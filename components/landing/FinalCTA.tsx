import Link from 'next/link';
import { ArrowRight, Sparkles, Star, Shield, Zap } from 'lucide-react';

export const FinalCTA = () => {
    return (
        <section className="py-40 bg-white px-6 relative overflow-hidden">
            {/* Background Branding Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative isolate overflow-hidden bg-gray-900 px-8 py-24 md:px-24 md:py-32 text-center rounded-[4rem] sm:rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] group">

                    {/* Dynamic Background Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/30 transition-colors duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3 group-hover:bg-indigo-600/20 transition-colors duration-700" style={{ animationDelay: '2s' }}></div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-12 shadow-2xl">
                            <Sparkles size={14} className="animate-pulse" />
                            <span>Zero Costs. Zero Accounts. Zero Friction.</span>
                        </div>

                        <h2 className="mx-auto max-w-4xl text-5xl sm:text-7xl font-heading font-extrabold tracking-tight text-white mb-12 leading-[1.05] text-balance">
                            Build Your Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Future Today.</span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-gray-400 font-medium mb-16 text-balance">
                            Join over 250,000 professionals who have bypassed the complexity and used CVRider to secure their dream roles.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                            <Link
                                href="/editor"
                                className="group relative h-20 px-16 rounded-[2rem] bg-white text-gray-900 text-lg font-black uppercase tracking-widest flex items-center justify-center transition-all hover:bg-blue-50 hover:shadow-2xl hover:-translate-y-2 active:scale-95 shadow-xl w-full sm:w-auto overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Get Started
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                                </span>
                            </Link>

                            <a
                                href="https://github.com/blessycode/CVRider"
                                target="_blank"
                                className="h-20 px-12 rounded-[2rem] border-2 border-white/10 text-white text-lg font-bold flex items-center justify-center transition-all hover:bg-white/5 hover:border-white/20 active:scale-95 w-full sm:w-auto"
                            >
                                View Code
                            </a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-16 border-t border-white/5 max-w-4xl mx-auto">
                            {[
                                { label: 'High Precision', icon: <Zap size={18} className="text-amber-500" /> },
                                { label: 'Cloud-Sync Ready', icon: <Shield size={18} className="text-blue-500" /> },
                                { label: 'Award Winning', icon: <Star size={18} className="text-indigo-500" /> },
                                { label: 'Built for 2026', icon: <Sparkles size={18} className="text-emerald-500" /> }
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center gap-3">
                                    <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-white/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
