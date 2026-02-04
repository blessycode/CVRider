import Link from 'next/link';
import { Zap, Layout, Download, CheckCircle, Shield, Cloud, Smartphone, MousePointer2, Sparkles, ArrowRight } from 'lucide-react';

const features = [
    {
        name: 'Beautiful Templates',
        description: 'Clean, professional layouts designed for every industry and career level.',
        icon: <Layout className="h-7 w-7" />,
        color: 'bg-blue-600',
        badge: 'Top Pick'
    },
    {
        name: 'ATS Optimized',
        description: 'Engineered to pass employer tracking systems and get you more interviews.',
        icon: <Shield className="h-7 w-7" />,
        color: 'bg-indigo-600',
    },
    {
        name: 'Live Preview',
        description: 'See your changes instantly as you type. No more guessing.',
        icon: <Zap className="h-7 w-7" />,
        color: 'bg-amber-500',
    },
    {
        name: 'Smart Export',
        description: 'Download print-ready PDFs in seconds. No account needed.',
        icon: <Download className="h-7 w-7" />,
        color: 'bg-purple-600',
    },
    {
        name: 'Privacy First',
        description: 'Your data stays on your device. We never store your personal info.',
        icon: <CheckCircle className="h-7 w-7" />,
        color: 'bg-emerald-600',
        badge: 'Secure'
    },
    {
        name: 'Instant Results',
        description: 'Blazing fast export and preview. No waiting, just professional results.',
        icon: <Zap className="h-7 w-7" />,
        color: 'bg-cyan-500',
    }
];

export const Features = () => {
    return (
        <section className="py-32 relative bg-white overflow-hidden" id="features">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24">
                    <div className="max-w-2xl text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-8">
                            <Sparkles size={12} />
                            <span>System Capabilities</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-gray-900 leading-tight mb-8">
                            Powerful tools. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Simpler experience.</span>
                        </h2>
                        <p className="text-xl text-gray-500 font-medium leading-relaxed">
                            We've removed the complexity from resume building. No accounts, no fees, just professional results.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-10 rounded-[3rem] bg-gray-50/50 border border-gray-100 transition-all duration-500 hover:bg-white hover:soft-shadow hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Decorative Background Glow */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 ${feature.color} opacity-0 group-hover:opacity-[0.03] rounded-full blur-[80px] transition-opacity duration-700`}></div>

                            <div className={`${feature.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl group-hover:scale-110 transition-transform relative`}>
                                <div className="absolute inset-0 bg-inherit rounded-inherit blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                                <span className="relative z-10">{feature.icon}</span>
                            </div>

                            {feature.badge && (
                                <div className="absolute top-10 right-10 px-3 py-1 bg-white border border-gray-100 rounded-full text-[9px] font-extrabold text-blue-600 uppercase tracking-widest shadow-sm group-hover:border-blue-100 transition-colors">
                                    {feature.badge}
                                </div>
                            )}

                            <h3 className="text-2xl font-heading font-extrabold text-gray-900 mb-6 tracking-tight group-hover:text-blue-600 transition-colors">{feature.name}</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                {feature.description}
                            </p>

                            {/* Hover Action Indicator */}
                            <div className="mt-8 pt-8 border-t border-gray-100/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                                <span>Learn More</span>
                                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Bento Section */}
                <div className="mt-24 grid grid-cols-1 lg:grid-cols-1 gap-8">
                    <div className="p-12 bg-gray-900 rounded-[3.5rem] relative overflow-hidden group shadow-2xl">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <div className="relative z-10 max-w-2xl mx-auto text-center">
                            <h3 className="text-4xl font-heading font-extrabold text-white mb-6 leading-tight">Professional results. <br /> In minutes, not hours.</h3>
                            <p className="text-lg text-gray-400 font-medium mb-10 leading-relaxed">Join thousands of professionals who have bypassed the complexity and used CVRider to secure their dream roles.</p>
                            <Link href="/editor" className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-[0.2em] group/btn">
                                <span>Start Building Now</span>
                                <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-2" />
                            </Link>
                        </div>

                        {/* Abstract Tech Visualization Overlay */}
                        <div className="absolute bottom-[-10%] right-[-10%] w-72 lg:w-96 text-gray-800 opacity-20 font-mono text-[10px] pointer-events-none select-none">
                            {`{
  "name": "CVRider",
  "version": "2.0.8",
  "build": "NextJS 14",
  "license": "Proprietary",
  "premium": false,
  "hidden_fees": 0,
  "privacy": "absolute"
}`}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
