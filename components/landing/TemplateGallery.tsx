"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import { TEMPLATES } from '@/components/templates';

const templates = TEMPLATES.map(t => ({
    id: t.id,
    name: t.name,
    text: t.description,
    style: t.thumbnailClass
}));

export const TemplateGallery = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden" id="templates">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-base font-bold text-blue-600 uppercase tracking-widest mb-3 font-heading">Templates</h2>
                        <p className="text-4xl font-serif font-bold tracking-tight text-gray-900 leading-tight">
                            Professional Templates for <br /> Every Career Path
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all outline-none"
                        >
                            <ChevronLeft size={24} className="text-gray-600" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all outline-none"
                        >
                            <ChevronRight size={24} className="text-gray-600" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
                >
                    {templates.map((t, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[320px] md:w-[400px] group snap-center"
                        >
                            <div className="relative aspect-[3/4] rounded-[2rem] border-2 border-gray-100 bg-gray-50 overflow-hidden mb-6 transition-all duration-500 group-hover:border-blue-600 group-hover:shadow-2xl">
                                {/* Template Mock View */}
                                <div className={`absolute inset-0 p-8 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500`}>
                                    <div className={`h-10 -mx-8 -mt-8 mb-8 ${t.style}`}></div>
                                    <div className="h-4 w-24 bg-current rounded mb-4"></div>
                                    <div className="space-y-2">
                                        <div className="h-1.5 w-full bg-gray-300 rounded"></div>
                                        <div className="h-1.5 w-full bg-gray-300 rounded"></div>
                                        <div className="h-1.5 w-3/4 bg-gray-300 rounded"></div>
                                    </div>
                                    <div className="mt-8 space-y-4">
                                        <div className="h-2 w-16 bg-gray-200 rounded"></div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                                    </div>
                                </div>

                                {/* Hover Button */}
                                <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center">
                                    <Link
                                        href="/editor"
                                        className="h-14 px-8 bg-white text-gray-900 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                                    >
                                        Use This Template
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">{t.name} Template</h3>
                            <p className="text-gray-500 font-medium mt-1 uppercase tracking-widest text-xs">{t.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
