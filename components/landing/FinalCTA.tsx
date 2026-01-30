import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-white px-6">
            <div className="max-w-7xl mx-auto">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-[3rem] sm:px-16 border-8 border-gray-100">
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -z-10"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] -z-10"></div>

                    <h2 className="mx-auto max-w-2xl text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl mb-8">
                        Ready to Land Your <br />
                        <span className="text-blue-400">Dream Job?</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400 font-medium mb-12">
                        Join thousands of professionals who have used CVRider to accelerate their career. Start building your perfect resume today.
                    </p>

                    <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                        <Link
                            href="/auth/signup"
                            className="group rounded-full bg-white px-10 py-4 text-base font-bold text-gray-900 shadow-xl hover:bg-gray-100 active:scale-95 transition-all flex items-center gap-2 uppercase tracking-widest"
                        >
                            Create Your Resume Now
                            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
                        </Link>
                    </div>

                    <div className="mt-12 flex justify-center items-center gap-3">
                        <Sparkles className="text-blue-400 h-5 w-5" />
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Free Forever • No Credit Card • Open Source</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
