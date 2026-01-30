"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

export const MinimalSingleColumn: React.FC<TemplateProps> = ({ data, font = 'sans' }) => {
    return (
        <div className={`w-full min-h-[297mm] bg-white p-10 text-gray-800 flex flex-col ${font === 'serif' ? 'font-serif' : font === 'mono' ? 'font-mono' : 'font-sans'}`}>

            {/* Header: Name + Contact */}
            <header className="mb-6 border-b border-gray-100 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {data.full_name}
                </h1>
                <div className="text-sm text-gray-500 mb-4">{data.job_title}</div>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
                    {data.contact_info.map((contact: ContactInfo, i: number) => (
                        <span key={i}>{contact.value}</span>
                    ))}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">Professional Summary</h2>
                <p className="text-sm leading-relaxed text-gray-600">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">Technical Skills</h2>
                <p className="text-sm leading-relaxed text-gray-600">
                    {data.skills.map((s: Skill) => s.name).join(', ')}
                </p>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">Work Experience</h2>
                <div className="space-y-4">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-sm font-bold text-gray-900">{exp.role}</h3>
                                <span className="text-xs text-gray-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">{exp.company}{exp.location ? ` | ${exp.location}` : ''}</div>
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
                    <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">Projects</h2>
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
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">Education</h2>
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
                    <h2 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-3">Certifications</h2>
                    <div className="space-y-2">
                        {data.certifications.map((cert) => (
                            <div key={cert.id} className="text-sm text-gray-600">
                                <span className="font-bold">{cert.name}</span> – {cert.issuer} ({cert.date})
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};
