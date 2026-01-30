import Link from 'next/link';
import { ArrowRight, Sparkles, FileText, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-52 lg:pb-36 overflow-hidden bg-white">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -z-10 opacity-70 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    {/* Content */}
                    <div className="text-center lg:text-left">
                        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-sm font-bold text-blue-700 animate-fade-in">
                            <Sparkles size={14} className="text-blue-600" />
                            <span className="uppercase tracking-widest text-[11px]">Free & Open Source Forever</span>
                        </div>

                        <h1 className="text-5xl font-serif font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-[1.1]">
                            Build Your <br />
                            <span className="text-blue-600">Professional Resume</span> <br />
                            in Minutes
                        </h1>

                        <p className="mt-8 text-lg leading-8 text-gray-500 max-w-2xl mx-auto lg:mx-0 font-medium">
                            Create stunning, ATS-friendly resumes with our collection of expert-designed templates.
                            Stand out to recruiters and land your dream job with ease.
                        </p>

                        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                            <Link
                                href="/auth/signup"
                                className="group inline-flex h-14 items-center justify-center rounded-full bg-gray-900 px-10 text-base font-bold text-white transition-all hover:bg-black hover:shadow-2xl hover:-translate-y-1 active:scale-95 uppercase tracking-widest"
                            >
                                Start Building Free
                                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                            <Link
                                href="#templates"
                                className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-10 text-base font-bold text-gray-600 transition-all hover:border-gray-900 hover:text-gray-900 active:scale-95 uppercase tracking-widest"
                            >
                                View Templates
                            </Link>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-600" />
                                <span className="text-xs font-bold uppercase tracking-wider">No Credit Card</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-blue-600" />
                                <span className="text-xs font-bold uppercase tracking-wider">ATS Friendly</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Mockup */}
                    <div className="relative">
                        <div className="relative rounded-3xl border-8 border-gray-900 bg-white shadow-2xl lg:w-[500px] overflow-hidden rotate-2 transform hover:rotate-0 transition-transform duration-700">
                            {/* Mock Tool Bar */}
                            <div className="bg-gray-900 p-4 flex items-center justify-between border-b border-gray-800">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                                <div className="px-3 py-1 bg-gray-800 rounded font-mono text-[10px] text-gray-400">cvrider.com/editor</div>
                            </div>

                            {/* Mock Resume Content */}
                            <div className="p-8 space-y-6 bg-white min-h-[600px]">
                                <div className="space-y-3 pb-6 border-b border-gray-100">
                                    <div className="h-4 w-32 bg-gray-900 rounded"></div>
                                    <div className="h-2 w-48 bg-gray-200 rounded"></div>
                                </div>
                                <div className="space-y-4">
                                    <div className="h-3 w-20 bg-gray-100 rounded"></div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                                        <div className="h-2 w-full bg-gray-50 rounded"></div>
                                        <div className="h-2 w-3/4 bg-gray-50 rounded"></div>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-4">
                                    <div className="h-3 w-24 bg-gray-100 rounded"></div>
                                    <div className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                                        <div className="h-2 w-32 bg-gray-200 rounded"></div>
                                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Float Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl border border-gray-100 animate-bounce">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-gray-900">Modern Sidebar</div>
                                    <div className="text-xs text-gray-400 font-medium tracking-wide font-heading uppercase mt-1">Template Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
