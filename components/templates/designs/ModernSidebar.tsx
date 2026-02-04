"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

export const ModernSidebar: React.FC<TemplateProps> = ({ data, color = 'blue', font = 'sans' }) => {
    const themeColors: Record<string, { primary: string; text: string }> = {
        blue: { primary: 'bg-[#1a365d]', text: 'text-[#1a365d]' },
        emerald: { primary: 'bg-[#064e3b]', text: 'text-[#064e3b]' },
        slate: { primary: 'bg-[#0f172a]', text: 'text-[#0f172a]' },
        purple: { primary: 'bg-[#4c1d95]', text: 'text-[#4c1d95]' },
        rose: { primary: 'bg-[#881337]', text: 'text-[#881337]' },
    };

    const theme = themeColors[color] || themeColors.blue;

    return (
        <div className={`w-full min-h-[297mm] flex bg-white ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>
            {/* Sidebar */}
            <div className={`${theme.primary} w-[32%] text-white p-8 flex flex-col`}>
                {/* Contact */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold tracking-widest uppercase opacity-70 mb-3">Contact</h3>
                    <div className="space-y-2">
                        {data.contact_info.map((contact: ContactInfo, i: number) => (
                            <div key={i} className="text-xs leading-relaxed opacity-90">{contact.value}</div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                    <h3 className="text-sm font-bold tracking-widest uppercase opacity-70 mb-3">Skills</h3>
                    <p className="text-xs leading-relaxed opacity-90">
                        {data.skills.map((s: Skill) => s.name).join(', ')}
                    </p>
                </div>

                {/* Education */}
                <div className="flex-1">
                    <h3 className="text-sm font-bold tracking-widest uppercase opacity-70 mb-3">Education</h3>
                    <div className="space-y-4">
                        {data.education.map((edu: Education) => (
                            <div key={edu.id}>
                                <div className="text-sm font-bold leading-tight">{edu.school}</div>
                                <div className="text-xs opacity-80 mt-1">{edu.degree}</div>
                                {edu.description && (
                                    <div className="text-[10px] opacity-70 mt-1 italic leading-relaxed">
                                        {edu.description}
                                    </div>
                                )}
                                <div className="text-xs opacity-60 mt-1">{edu.startDate} – {edu.endDate}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-10 flex flex-col">
                {/* Header: Name */}
                <header className="mb-6 pb-4 border-b border-gray-100">
                    <h1 className={`text-3xl font-bold ${theme.text} mb-2`}>
                        {data.full_name}
                    </h1>
                    <p className="text-sm text-gray-500">{data.job_title}</p>
                </header>

                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className={`text-sm font-bold tracking-widest uppercase ${theme.text} mb-3`}>Professional Summary</h2>
                    <p className="text-sm leading-relaxed text-gray-700">
                        {data.summary}
                    </p>
                </section>

                {/* Work Experience */}
                <section className="mb-6">
                    <h2 className={`text-sm font-bold tracking-widest uppercase ${theme.text} mb-3`}>Work Experience</h2>
                    <div className="space-y-4">
                        {data.experience.map((exp: Experience) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-sm font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-xs text-gray-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                                </div>
                                <div className={`text-sm ${theme.text} mb-2`}>{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
                                <p className="text-sm leading-relaxed text-gray-600">
                                    {exp.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                {data.projects.length > 0 && (
                    <section className="mb-6">
                        <h2 className={`text-sm font-bold tracking-widest uppercase ${theme.text} mb-3`}>Projects</h2>
                        <div className="space-y-4">
                            {data.projects.map((proj: Project) => (
                                <div key={proj.id}>
                                    <h3 className="text-sm font-bold text-gray-900 mb-1">{proj.name}</h3>
                                    {proj.technologies && proj.technologies.length > 0 && (
                                        <div className="text-sm text-gray-500 mb-2">{proj.technologies.join(', ')}</div>
                                    )}
                                    <p className="text-sm leading-relaxed text-gray-600">
                                        {proj.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
