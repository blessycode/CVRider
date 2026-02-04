"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Layout, MousePointer2 } from 'lucide-react';

const cleanTemplates = [
    {
        id: 'modern-blue',
        name: 'Executive Elite',
        tagline: 'Refined structure for leadership roles.',
        image: '/_gemini/antigravity/brain/56be44e1-8bb5-4871-88fc-343d79db06d7/cyberpunk_resume_template_1_1770207819340.png',
        accent: 'from-blue-500/10 to-transparent',
        tag: 'Recommended'
    },
    {
        id: 'minimal-future',
        name: 'Quantum Minimal',
        tagline: 'Clean aesthetics with precise data architecture.',
        image: '/_gemini/antigravity/brain/56be44e1-8bb5-4871-88fc-343d79db06d7/futuristic_minimal_resume_template_2_1770207835969.png',
        accent: 'from-indigo-500/10 to-transparent',
        tag: 'Popular'
    },
    {
        id: 'neo-classic',
        name: 'The Professional',
        tagline: 'A timeless bridge between legacy and modern tech.',
        image: '/_gemini/antigravity/brain/56be44e1-8bb5-4871-88fc-343d79db06d7/cyberpunk_resume_template_1_1770207819340.png',
        accent: 'from-emerald-500/10 to-transparent',
        tag: 'Classic'
    }
];

export const TemplateGallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-40 bg-gray-50/50 overflow-hidden relative" id="templates">
            {/* Background Branding Elements */}
            <div className="absolute top-0 right-0 p-20 opacity-[0.03] select-none pointer-events-none rotate-12 transform">
                <Layout size={600} strokeWidth={0.5} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
                    <div className="max-w-xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-8">
                            <Layout size={12} />
                            <span>Design Showroom</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                            Curated Layouts <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Built for Success</span>
                        </h2>
                    </div>

                    <div className="flex bg-white p-2 rounded-3xl border border-gray-100 shadow-sm gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-2xl hover:bg-gray-50 hover:text-blue-600 transition-all outline-none"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="w-px h-8 bg-gray-100 self-center"></div>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-2xl hover:bg-gray-50 hover:text-blue-600 transition-all outline-none"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-12 overflow-x-auto pb-20 snap-x snap-mandatory no-scrollbar"
                >
                    {cleanTemplates.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[340px] md:w-[600px] group snap-center"
                        >
                            <div className="relative group transition-all duration-700">
                                {/* Visual Card Body */}
                                <div className={`relative aspect-[3/4.2] rounded-[4rem] bg-white border-8 border-white overflow-hidden mb-10 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:shadow-[0_48px_100px_-20px_rgba(37,99,235,0.2)] group-hover:-translate-y-4`}>

                                    {/* Template Background Accent */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${t.accent} opacity-50 transition-opacity duration-700 group-hover:opacity-100`}></div>

                                    {/* The Image */}
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="absolute inset-0 w-full h-full object-cover opacity-[0.85] group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    {/* Hover Interactive Layer */}
                                    <div className="absolute inset-x-8 bottom-8 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                        <Link
                                            href="/editor"
                                            className="w-full h-16 bg-white text-gray-900 rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 group/btn"
                                        >
                                            <MousePointer2 size={16} className="group-hover/btn:animate-bounce" />
                                            Use This Layout
                                        </Link>
                                    </div>

                                    {/* Badge */}
                                    <div className="absolute top-10 left-10 px-5 py-2 bg-white/90 backdrop-blur-md rounded-full border border-white/50 text-[10px] font-black uppercase tracking-widest text-blue-600 shadow-sm">
                                        {t.tag}
                                    </div>
                                </div>

                                {/* Text Label */}
                                <div className="px-6 text-center md:text-left transition-all duration-500 group-hover:translate-x-2">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                                        <h3 className="text-3xl font-heading font-extrabold text-gray-900 tracking-tight">{t.name}</h3>
                                        <div className="h-px flex-1 bg-gray-100 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    </div>
                                    <p className="text-gray-500 font-medium text-lg leading-relaxed max-w-sm">{t.tagline}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Gallery Info */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-16">
                    <div className="flex gap-12">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total Templates</span>
                            <span className="text-2xl font-heading font-bold text-gray-900">12 Premium Styles</span>
                        </div>
                        <div className="w-px h-10 bg-gray-100 self-center"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Standard</span>
                            <span className="text-2xl font-heading font-bold text-gray-900">ATS Compatible</span>
                        </div>
                    </div>

                    <Link href="/editor" className="flex items-center gap-3 text-[11px] font-black text-blue-600 hover:text-blue-700 uppercase tracking-[0.2em] group">
                        Start building with any template
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
