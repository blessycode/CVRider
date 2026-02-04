import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, Star, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 px-6 overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] -z-10 animate-pulse-soft"></div>
            <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-[100px] -z-10" style={{ animationDelay: '4s' }}></div>

            {/* Floating Geometric Decorations */}
            <div className="absolute top-[20%] left-[5%] w-12 h-12 border border-blue-200/50 rounded-lg -z-10 rotate-12 animate-float-slow"></div>
            <div className="absolute bottom-[25%] right-[10%] w-16 h-16 border border-indigo-200/30 rounded-full -z-10 animate-float-slow" style={{ animationDelay: '2s' }}></div>

            <div className="mx-auto max-w-7xl w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-7 text-center lg:text-left relative z-10">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white border border-gray-100 shadow-sm mb-10 group transition-all hover:border-blue-200 active:scale-95">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-500 opacity-80"></div>
                                    </div>
                                ))}
                            </div>
                            <span className="text-[11px] font-extrabold text-gray-500 uppercase tracking-[0.15em]">Trusted by 250k+ professionals</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-2 animate-pulse"></div>
                        </div>

                        <h1 className="text-6xl md:text-7xl xl:text-8xl font-heading font-extrabold tracking-tight text-gray-900 leading-[1.02] mb-8 text-balance">
                            Build Your CV <br />
                            <span className="relative">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Masterpiece</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-100 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                                    <path d="M0,10 Q50,0 100,10" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-12 text-balance">
                            The world's most intuitive <span className="text-gray-900 font-bold">professional CV & resume builder</span>. Create a job-winning document in minutes with our high-precision editor.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
                            <Link
                                href="/editor"
                                className="group relative h-16 px-10 rounded-2xl bg-gray-900 text-white text-base font-bold flex items-center justify-center transition-all hover:bg-black hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] hover:-translate-y-1 active:scale-95 overflow-hidden w-full sm:w-auto"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Start Building Now
                                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </Link>

                            <Link
                                href="#templates"
                                className="h-16 px-10 rounded-2xl border-2 border-gray-100 bg-white text-gray-600 text-base font-bold flex items-center justify-center transition-all hover:border-gray-900 hover:text-gray-900 active:scale-95 w-full sm:w-auto"
                            >
                                View Gallery
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-8 border-t border-gray-100 max-w-xl mx-auto lg:mx-0">
                            {[
                                { label: 'ATS-Friendly', icon: <ShieldCheck size={18} className="text-blue-500" /> },
                                { label: 'High-Res PDF', icon: <Zap size={18} className="text-amber-500" /> },
                                { label: 'Free Forever', icon: <Star size={18} className="text-indigo-500" /> }
                            ].map((badge, idx) => (
                                <div key={idx} className="flex items-center gap-2.5">
                                    <div className="flex-shrink-0">{badge.icon}</div>
                                    <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest leading-none">{badge.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Visual Component */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div className="relative animate-float-slow">
                            {/* Layered Cards Stack */}
                            <div className="absolute top-10 -right-10 w-full h-[600px] bg-indigo-50/50 rounded-[3rem] border border-gray-100 transform rotate-6 scale-95"></div>
                            <div className="absolute top-5 -right-5 w-full h-[600px] bg-white/80 backdrop-blur-sm rounded-[3rem] border border-gray-100 transform rotate-3 scale-100 shadow-xl"></div>

                            {/* Main Document Mockup */}
                            <div className="relative w-full h-[600px] bg-white rounded-[3rem] border-[1px] border-gray-100 shadow-2xl overflow-hidden p-3">
                                <div className="w-full h-full rounded-[2.5rem] bg-gray-50 border border-gray-100 overflow-hidden flex flex-col">
                                    {/* Mock Browser Header */}
                                    <div className="bg-white px-6 py-4 flex items-center justify-between border-b border-gray-100">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                                        </div>
                                        <div className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] text-gray-400 font-bold uppercase tracking-widest border border-gray-200/50">
                                            preview_v2.pdf
                                        </div>
                                    </div>

                                    {/* Mock Content */}
                                    <div className="p-10 flex-1 space-y-10 overflow-hidden bg-white">
                                        <div className="flex justify-between items-start border-b border-gray-50 pb-10">
                                            <div className="space-y-4">
                                                <div className="h-10 w-48 bg-gray-900 rounded-xl"></div>
                                                <div className="h-4 w-72 bg-gray-100 rounded-lg"></div>
                                            </div>
                                            <div className="w-24 h-24 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                                                <Sparkles size={32} className="text-blue-500 animate-pulse" />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="h-5 w-32 bg-indigo-100 rounded-lg"></div>
                                            <div className="space-y-3">
                                                <div className="h-3 w-full bg-gray-50 rounded"></div>
                                                <div className="h-3 w-full bg-gray-50 rounded"></div>
                                                <div className="h-3 w-4/5 bg-gray-50 rounded"></div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6 pt-6">
                                            <div className="h-32 bg-gray-50 rounded-3xl p-6 border border-gray-100/50 flex flex-col justify-end">
                                                <div className="h-3 w-full bg-white rounded shadow-sm"></div>
                                            </div>
                                            <div className="h-32 bg-gray-50 rounded-3xl p-6 border border-gray-100/50 flex flex-col justify-end">
                                                <div className="h-3 w-full bg-white rounded shadow-sm"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Micro-UI elements */}
                            <div className="absolute top-20 -left-12 p-5 glass-panel rounded-3xl shadow-2xl border border-white animate-soft-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                                        <Star size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <div className="text-xs font-extrabold text-gray-900">Score: 98%</div>
                                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">ATS Optimized</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-20 -right-10 p-5 glass-panel rounded-3xl shadow-2xl border border-white animate-float-slow" style={{ animationDelay: '1s' }}>
                                <div className="flex items-center gap-4">
                                    <div className="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-600 w-4/5"></div>
                                    </div>
                                    <span className="text-[10px] font-extrabold text-blue-600">EXPORTING...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
