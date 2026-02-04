import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-50 pt-32 pb-16 px-6 relative overflow-hidden">
            {/* Soft Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">

                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="flex items-center gap-4 mb-10 group">
                            <div className="flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gray-900 text-white shadow-2xl transition-all group-hover:scale-105 group-hover:-rotate-3">
                                <span className="font-serif font-black text-2xl">CV</span>
                            </div>
                            <span className="text-3xl font-heading font-black text-gray-900 tracking-tight">CVRider</span>
                        </Link>
                        <p className="text-gray-500 font-medium leading-relaxed mb-10 max-w-sm">
                            The next generation of career development tools. Open-source, high-precision, and completely free forever.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Github size={20} />, href: 'https://github.com/blessycode' },
                                { icon: <Twitter size={20} />, href: 'https://x.com/bless13210' },
                                { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/blessed-zhou' },
                                { icon: <Mail size={20} />, href: 'mailto:contact@cvrider.com' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-2xl bg-gray-50 border border-transparent flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-white hover:shadow-xl transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-10">Evolution</h4>
                            <ul className="space-y-5 font-bold text-sm text-gray-500">
                                <li><Link href="#features" className="hover:text-blue-600 transition-colors flex items-center justify-between group">Core Features <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
                                <li><Link href="/editor" className="hover:text-blue-600 transition-colors flex items-center justify-between group">Resume Engine <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /></Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-10">Resources</h4>
                            <ul className="space-y-5 font-bold text-sm text-gray-500">
                                <li><a href="https://github.com/blessycode/CVRider" className="hover:text-blue-600 transition-colors">OS Documentation</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Career Insights</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition-colors">Global Standards</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 mb-10">Legal</h4>
                            <ul className="space-y-5 font-bold text-sm text-gray-500">
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Data Privacy</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">User Interface</Link></li>
                                <li><Link href="#" className="hover:text-blue-600 transition-colors">Ethics Protocol</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-50 pt-12 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-6">
                        <p className="text-xs font-bold text-gray-400">
                            &copy; {new Date().getFullYear()} CVRider. Precision Engineering by <a href="https://blessy-io.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors font-black">Blessy</a>.
                        </p>
                        <div className="h-4 w-px bg-gray-100 hidden sm:block"></div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-emerald-100">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            Global Servers Online
                        </div>
                    </div>

                    <div className="flex gap-8 group">
                        {[
                            { name: 'Vercel', color: 'bg-blue-600' },
                            { name: 'Supabase', color: 'bg-indigo-600' },
                            { name: 'Prisma', color: 'bg-teal-600' }
                        ].map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-2 opacity-50 transition-opacity hover:opacity-100">
                                <div className={`w-1.5 h-1.5 rounded-full ${tech.color}`}></div>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
