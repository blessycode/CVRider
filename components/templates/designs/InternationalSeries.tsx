"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

// ============================================
// TEMPLATE 1: STANDARD EUROPEAN (ATS Friendly)
// ============================================
export const StandardEuropean: React.FC<TemplateProps> = ({ data, font = 'sans' }) => {
    return (
        <div className={`w-full min-h-[297mm] bg-white p-10 text-gray-800 flex flex-col ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>
            {/* Header: Name + Contact */}
            <header className="mb-6 border-b border-gray-200 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {data.full_name}
                </h1>
                <div className="text-sm text-gray-600 mb-4">{data.job_title}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                    {data.contact_info.map((c: ContactInfo, i: number) => (
                        <span key={i}>{c.value}</span>
                    ))}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Professional Summary</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Technical Skills</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    {data.skills.map((s: Skill) => s.name).join(', ')}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Work Experience</h2>
                <div className="space-y-4">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-sm font-bold text-gray-900">{exp.role}</h3>
                                <span className="text-xs text-gray-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
                            <p className="text-sm leading-relaxed text-gray-700">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Projects</h2>
                    <div className="space-y-4">
                        {data.projects.map((proj: Project) => (
                            <div key={proj.id}>
                                <h3 className="text-sm font-bold text-gray-900 mb-1">{proj.name}</h3>
                                {proj.technologies && proj.technologies.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-2">{proj.technologies.join(', ')}</div>
                                )}
                                <p className="text-sm leading-relaxed text-gray-700">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3">Education</h2>
                <div className="space-y-3">
                    {data.education.map((edu: Education) => (
                        <div key={edu.id}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-sm font-bold text-gray-900">{edu.school}</h3>
                                <span className="text-xs text-gray-500">{edu.startDate} – {edu.endDate}</span>
                            </div>
                            <div className="text-sm text-gray-600">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// ============================================
// TEMPLATE 2: SWISS TYPOGRAPHY (ATS Friendly)
// ============================================
export const SwissTypography: React.FC<TemplateProps> = ({ data, font = 'sans' }) => {
    return (
        <div className={`w-full min-h-[297mm] bg-white p-10 text-black flex flex-col ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>
            {/* Header: Name + Contact */}
            <header className="mb-6 border-b-4 border-black pb-6">
                <h1 className="text-3xl font-bold text-black mb-2">
                    {data.full_name}
                </h1>
                <div className="text-sm font-medium text-red-600 mb-4">{data.job_title}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
                    {data.contact_info.map((c: ContactInfo, i: number) => (
                        <span key={i}>{c.value}</span>
                    ))}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-3">Professional Summary</h2>
                <p className="text-sm leading-relaxed text-gray-800">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-3">Technical Skills</h2>
                <p className="text-sm leading-relaxed text-gray-800">
                    {data.skills.map((s: Skill) => s.name).join(', ')}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-red-600 mb-3">Work Experience</h2>
                <div className="space-y-4">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-sm font-bold text-black">{exp.role}</h3>
                                <span className="text-xs text-gray-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                            </div>
                            <div className="text-sm font-bold text-black mb-2">{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
                            <p className="text-sm leading-relaxed text-gray-700">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-red-600 mb-3">Projects</h2>
                    <div className="space-y-4">
                        {data.projects.map((proj: Project) => (
                            <div key={proj.id}>
                                <h3 className="text-sm font-bold text-black mb-1">{proj.name}</h3>
                                {proj.technologies && proj.technologies.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-2">{proj.technologies.join(', ')}</div>
                                )}
                                <p className="text-sm leading-relaxed text-gray-700">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-3">Education</h2>
                <div className="space-y-3">
                    {data.education.map((edu: Education) => (
                        <div key={edu.id}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-sm font-bold text-black">{edu.school}</h3>
                                <span className="text-xs text-gray-500">{edu.startDate} – {edu.endDate}</span>
                            </div>
                            <div className="text-sm text-gray-700">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// ============================================
// TEMPLATE 3: DEVELOPER TERMINAL (ATS Friendly)
// ============================================
export const DeveloperTerminal: React.FC<TemplateProps> = ({ data }) => {
    return (
        <div className="w-full min-h-[297mm] bg-[#0f172a] p-10 text-white font-mono flex flex-col">
            {/* Header: Name + Contact */}
            <header className="mb-6 border-b border-emerald-500/30 pb-6">
                <div className="flex items-center gap-2 text-emerald-500 text-xs mb-3">
                    <span>user@profile:~$ whoami</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">
                    {data.full_name}
                </h1>
                <div className="text-sm text-emerald-400 mb-4">&gt; {data.job_title}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                    {data.contact_info.map((c: ContactInfo, i: number) => (
                        <span key={i} className="flex items-center gap-1">
                            <span className="text-emerald-500">$</span> {c.value}
                        </span>
                    ))}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <div className="flex items-center gap-2 text-emerald-500 text-xs mb-2">
                    <span>cat summary.txt</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <div className="flex items-center gap-2 text-emerald-500 text-xs mb-2">
                    <span>tree skills/</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                    {data.skills.map((s: Skill) => s.name).join(', ')}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <div className="flex items-center gap-2 text-emerald-500 text-xs mb-3">
                    <span>ls experience/</span>
                </div>
                <div className="space-y-4">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-sm font-bold text-white">{exp.role}</h3>
                                <span className="text-xs text-slate-500">[{exp.startDate} - {exp.current ? 'RUNNING' : exp.endDate}]</span>
                            </div>
                            <div className="text-sm text-emerald-500/70 mb-2">@ {exp.company}</div>
                            <p className="text-sm leading-relaxed text-slate-400">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="mb-6">
                    <div className="flex items-center gap-2 text-emerald-500 text-xs mb-3">
                        <span>ls projects/</span>
                    </div>
                    <div className="space-y-4">
                        {data.projects.map((proj: Project) => (
                            <div key={proj.id}>
                                <h3 className="text-sm font-bold text-white mb-1">{proj.name}</h3>
                                {proj.technologies && proj.technologies.length > 0 && (
                                    <div className="text-sm text-emerald-500/70 mb-2">{proj.technologies.join(', ')}</div>
                                )}
                                <p className="text-sm leading-relaxed text-slate-400">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            <section className="mb-6">
                <div className="flex items-center gap-2 text-emerald-500 text-xs mb-3">
                    <span>cat education.log</span>
                </div>
                <div className="space-y-3">
                    {data.education.map((edu: Education) => (
                        <div key={edu.id}>
                            <h3 className="text-sm font-bold text-white">{edu.school}</h3>
                            <div className="text-sm text-slate-400">{edu.degree}</div>
                            <div className="text-xs text-emerald-500/50 mt-1">{edu.endDate}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

// ============================================
// TEMPLATE 4: ZEN SERIF (ATS Friendly)
// ============================================
export const ZenSerif: React.FC<TemplateProps> = ({ data }) => {
    return (
        <div className="w-full min-h-[297mm] bg-[#fbfaf8] p-12 text-slate-800 font-serif flex flex-col">
            {/* Header: Name + Contact */}
            <header className="mb-6 text-center pb-6 border-b border-slate-200">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                    {data.full_name}
                </h1>
                <div className="text-sm text-slate-500 mb-4">{data.job_title}</div>
                <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                    {data.contact_info.slice(0, 4).map((c: ContactInfo, i: number) => (
                        <span key={i}>{c.value}</span>
                    ))}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6 text-center">
                <p className="text-sm leading-relaxed text-slate-600 italic">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3 text-center">Skills</h2>
                <p className="text-sm leading-relaxed text-slate-600 text-center">
                    {data.skills.map((s: Skill) => s.name).join(', ')}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3 text-center">Experience</h2>
                <div className="space-y-4">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id} className="text-center">
                            <h3 className="text-sm font-bold text-slate-800">{exp.role}</h3>
                            <div className="text-xs text-amber-600/60 mb-2">{exp.company} — {exp.startDate} – {exp.current ? 'Present' : exp.endDate}</div>
                            <p className="text-sm leading-relaxed text-slate-600">
                                {exp.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            {data.projects.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3 text-center">Projects</h2>
                    <div className="space-y-4">
                        {data.projects.map((proj: Project) => (
                            <div key={proj.id} className="text-center">
                                <h3 className="text-sm font-bold text-slate-800 mb-1">{proj.name}</h3>
                                <p className="text-sm leading-relaxed text-slate-600">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-slate-400 mb-3 text-center">Education</h2>
                <div className="space-y-3">
                    {data.education.map((edu: Education) => (
                        <div key={edu.id} className="text-center">
                            <h3 className="text-sm font-bold text-slate-800">{edu.school}</h3>
                            <div className="text-sm text-slate-500 italic">{edu.degree}</div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
