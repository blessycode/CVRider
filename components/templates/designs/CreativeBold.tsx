"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

export const CreativeBold: React.FC<TemplateProps> = ({ data, color = 'purple', font = 'sans' }) => {
    const themes: Record<string, { primary: string; text: string; accent: string }> = {
        purple: { primary: 'bg-[#581c87]', text: 'text-[#581c87]', accent: 'bg-purple-50' },
        pink: { primary: 'bg-[#9f1239]', text: 'text-[#9f1239]', accent: 'bg-pink-50' },
        orange: { primary: 'bg-[#7c2d12]', text: 'text-[#7c2d12]', accent: 'bg-orange-50' },
        teal: { primary: 'bg-[#134e4a]', text: 'text-[#134e4a]', accent: 'bg-teal-50' },
        black: { primary: 'bg-gray-900', text: 'text-gray-900', accent: 'bg-gray-50' },
    };

    const th = themes[color] || themes.purple;

    return (
        <div className={`w-full min-h-[297mm] bg-white text-gray-800 flex flex-col ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>

            {/* Header: Name + Contact */}
            <div className={`w-full ${th.primary} p-10 text-white`}>
                <h1 className="text-3xl font-bold mb-2">
                    {data.full_name}
                </h1>
                <p className="text-sm font-medium opacity-90 mb-4">{data.job_title}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs opacity-80">
                    {data.contact_info.map((c: ContactInfo, i: number) => (
                        <span key={i}>{c.value}</span>
                    ))}
                </div>
            </div>

            <div className="flex-1 p-10 flex flex-col">
                {/* Professional Summary */}
                <section className="mb-6">
                    <h2 className={`text-sm font-bold tracking-widest uppercase ${th.text} mb-3`}>Professional Summary</h2>
                    <p className="text-sm leading-relaxed text-gray-700">
                        {data.summary}
                    </p>
                </section>

                {/* Technical Skills */}
                <section className="mb-6">
                    <h2 className={`text-sm font-bold tracking-widest uppercase ${th.text} mb-3`}>Technical Skills</h2>
                    <p className="text-sm leading-relaxed text-gray-700">
                        {data.skills.map((s: Skill) => s.name).join(', ')}
                    </p>
                </section>

                {/* Work Experience */}
                <section className="mb-6">
                    <h2 className={`text-sm font-bold tracking-widest uppercase ${th.text} mb-3`}>Work Experience</h2>
                    <div className="space-y-4">
                        {data.experience.map((exp: Experience) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-sm font-bold text-gray-900">{exp.role}</h3>
                                    <span className="text-xs text-gray-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                                </div>
                                <div className={`text-sm ${th.text} mb-2`}>{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
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
                        <h2 className={`text-sm font-bold tracking-widest uppercase ${th.text} mb-3`}>Projects</h2>
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

                {/* Education */}
                <section className="mb-6">
                    <h2 className={`text-sm font-bold tracking-widest uppercase ${th.text} mb-3`}>Education</h2>
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

                {/* Certifications */}
                {data.certifications && data.certifications.length > 0 && (
                    <section className="mb-6">
                        <h2 className={`text-sm font-bold tracking-widest uppercase ${th.text} mb-3`}>Certifications</h2>
                        <div className="space-y-2">
                            {data.certifications.map((cert) => (
                                <div key={cert.id} className="text-sm text-gray-700">
                                    <span className="font-bold">{cert.name}</span> – {cert.issuer} ({cert.date})
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
