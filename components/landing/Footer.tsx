import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Col */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white shadow-lg">
                                <span className="font-serif font-bold text-lg">CV</span>
                            </div>
                            <span className="text-2xl font-serif font-bold text-gray-900 tracking-tight">CVRider</span>
                        </Link>
                        <p className="text-gray-500 font-medium leading-relaxed mb-8">
                            An open-source resume builder designed to help you create professional, ATS-friendly resumes in minutes.
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
                                    className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-blue-600 hover:border-blue-100 hover:bg-blue-50 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-8 font-heading">Product</h4>
                        <ul className="space-y-4 font-medium text-gray-500">
                            <li><Link href="#features" className="hover:text-blue-600 transition-colors flex items-center gap-1">Features <ArrowUpRight size={14} /></Link></li>
                            <li><Link href="#templates" className="hover:text-blue-600 transition-colors flex items-center gap-1">Templates <ArrowUpRight size={14} /></Link></li>
                            <li><Link href="/editor" className="hover:text-blue-600 transition-colors flex items-center gap-1">Resume Editor <ArrowUpRight size={14} /></Link></li>
                        </ul>
                    </div>

                    {/* Resources Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-8 font-heading">Resources</h4>
                        <ul className="space-y-4 font-medium text-gray-500">
                            <li><a href="https://github.com/blessycode/CVRider" className="hover:text-blue-600 transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Career Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Resumes Examples</a></li>
                        </ul>
                    </div>

                    {/* Legal Col */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-8 font-heading">Legal</h4>
                        <ul className="space-y-4 font-medium text-gray-500">
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-blue-600 transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm font-medium text-gray-400">
                        &copy; {new Date().getFullYear()} CVRider. Built with passion by <a href="https://blessy-io.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors">Blessy</a>.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        <span>Deploy: Vercel</span>
                        <span>DB: Supabase</span>
                        <span>PRISMA ORM</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
