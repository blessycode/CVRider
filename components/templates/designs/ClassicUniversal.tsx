"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

/* Reusable Section */
const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="text-sm font-bold tracking-[0.2em] border-b-2 border-gray-900 pb-1 mb-4 text-gray-900">
            {title}
        </h2>
        {children}
    </div>
);

/* Reusable Item row */
const Item: React.FC<{ title: string; subtitle: string; right: string }> = ({ title, subtitle, right }) => (
    <div className="flex justify-between items-start text-sm mb-1">
        <div className="flex-1 pr-4">
            <p className="font-bold text-gray-900 uppercase tracking-tight">{title}</p>
            <p className="text-gray-700 italic">{subtitle}</p>
        </div>
        <p className="text-right text-gray-500 font-medium whitespace-nowrap">{right}</p>
    </div>
);

export const ClassicUniversal: React.FC<TemplateProps> = ({ data, font = 'serif' }) => {
    return (
        <div className={`w-full min-h-[297mm] bg-white p-12 text-gray-800 flex flex-col ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>
            {/* Name and Title */}
            <header className="mb-8">
                <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">{data.full_name}</h1>
                <p className="text-xl font-medium text-gray-600 mt-1 uppercase tracking-widest">{data.job_title}</p>
            </header>

            {/* Contact */}
            <div className="text-sm mb-10 pb-6 border-b border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-gray-500 font-medium">
                {data.contact_info.map((c: ContactInfo, i: number) => (
                    <span key={i} className="flex items-center gap-1">
                        {i > 0 && <span className="text-gray-300 mr-2">•</span>}
                        {c.value}
                    </span>
                ))}
            </div>

            {/* Summary */}
            {data.summary && (
                <section className="mb-10">
                    <p className="text-[15px] leading-relaxed text-gray-700 italic">
                        {data.summary}
                    </p>
                </section>
            )}

            {/* Education */}
            <Section title="EDUCATION">
                <div className="space-y-6">
                    {data.education.map((edu: Education) => (
                        <div key={edu.id}>
                            <Item
                                title={edu.degree + (edu.field ? ` in ${edu.field}` : '')}
                                subtitle={edu.school}
                                right={`${edu.startDate} – ${edu.endDate}`}
                            />
                            {edu.description && (
                                <p className="text-sm text-gray-600 mt-2 leading-relaxed italic border-l-2 border-gray-100 pl-4 ml-1">
                                    {edu.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Work Experience */}
            <Section title="WORK EXPERIENCE">
                <div className="space-y-8">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id}>
                            <Item
                                title={exp.role}
                                subtitle={exp.company + (exp.location ? `, ${exp.location}` : '')}
                                right={`${exp.startDate} – ${exp.current ? 'Present' : exp.endDate}`}
                            />
                            <div className="text-sm leading-relaxed text-gray-700 mt-3 whitespace-pre-line pl-1">
                                {exp.description}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Skills */}
            <Section title="SKILLS & COMPETENCIES">
                <p className="text-sm leading-relaxed text-gray-700 pl-1 font-medium bg-gray-50 p-4 rounded-lg border border-gray-100">
                    {data.skills.map((s: Skill) => s.name).join(' • ')}
                </p>
            </Section>

            {/* Projects */}
            {data.projects.length > 0 && (
                <Section title="PERSONAL PROJECTS & ACHIEVEMENTS">
                    <div className="space-y-6">
                        {data.projects.map((proj: Project) => (
                            <div key={proj.id} className="pl-1">
                                <p className="font-bold text-gray-900 text-sm uppercase tracking-tight">{proj.name}</p>
                                <div className="text-sm leading-relaxed text-gray-700 mt-2 whitespace-pre-line">
                                    {proj.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {/* Technical Grouping (If any) */}
            {data.certifications && data.certifications.length > 0 && (
                <Section title="CERTIFICATIONS">
                    <div className="grid grid-cols-2 gap-4">
                        {data.certifications.map((cert) => (
                            <div key={cert.id} className="text-sm">
                                <p className="font-bold text-gray-900">{cert.name}</p>
                                <p className="text-gray-500 text-xs mt-0.5">{cert.issuer} ({cert.date})</p>
                            </div>
                        ))}
                    </div>
                </Section>
            )}
        </div>
    );
};
