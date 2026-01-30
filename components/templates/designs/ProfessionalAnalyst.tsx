"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

export const ProfessionalAnalyst: React.FC<TemplateProps> = ({ data, font = 'sans' }) => {
    // Group skills by level or create logical groups
    const groupSkills = (skills: Skill[]) => {
        const groups: Record<string, string[]> = {
            'Programming': [],
            'Data & Visualization': [],
            'Tools & Frameworks': [],
        };

        skills.forEach((skill, index) => {
            // Distribute skills across groups for demo purposes
            // In real usage, you might want to add a 'category' field to skills
            if (index % 3 === 0) {
                groups['Programming'].push(skill.name);
            } else if (index % 3 === 1) {
                groups['Data & Visualization'].push(skill.name);
            } else {
                groups['Tools & Frameworks'].push(skill.name);
            }
        });

        return groups;
    };

    const skillGroups = groupSkills(data.skills);

    return (
        <div className={`w-full min-h-[297mm] bg-white p-10 text-gray-900 flex flex-col ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>

            {/* Header: Name + Role + Contact */}
            <header className="mb-6 text-center border-b border-gray-300 pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">
                    {data.full_name}
                </h1>
                <div className="text-sm font-medium text-gray-600 mb-4">{data.job_title}</div>
                <div className="flex justify-center flex-wrap gap-x-2 text-xs text-gray-500">
                    {data.contact_info.map((contact: ContactInfo, i: number) => (
                        <span key={i} className="flex items-center">
                            {contact.value}
                            {i < data.contact_info.length - 1 && <span className="mx-2">•</span>}
                        </span>
                    ))}
                </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3 border-b border-gray-200 pb-1">Professional Summary</h2>
                <p className="text-sm leading-relaxed text-gray-700">
                    {data.summary}
                </p>
            </section>

            {/* Technical Skills - Grouped */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3 border-b border-gray-200 pb-1">Technical Skills</h2>
                <div className="space-y-2">
                    {Object.entries(skillGroups).map(([category, skills]) => (
                        skills.length > 0 && (
                            <div key={category} className="text-sm">
                                <span className="font-bold text-gray-800">{category}:</span>{' '}
                                <span className="text-gray-700">{skills.join(', ')}</span>
                            </div>
                        )
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3 border-b border-gray-200 pb-1">Education</h2>
                <div className="space-y-3">
                    {data.education.map((edu: Education) => (
                        <div key={edu.id}>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-sm font-bold text-gray-900">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</h3>
                                <span className="text-xs text-gray-500">{edu.startDate} – {edu.endDate}</span>
                            </div>
                            <div className="text-sm text-gray-600">{edu.school}{edu.location ? `, ${edu.location}` : ''}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Work Experience */}
            <section className="mb-6">
                <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3 border-b border-gray-200 pb-1">Work Experience</h2>
                <div className="space-y-4">
                    {data.experience.map((exp: Experience) => (
                        <div key={exp.id}>
                            <div className="flex justify-between items-baseline mb-1">
                                <h3 className="text-sm font-bold text-gray-900">{exp.role}</h3>
                                <span className="text-xs text-gray-500">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</span>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">{exp.company}{exp.location ? `, ${exp.location}` : ''}</div>
                            <div className="text-sm leading-relaxed text-gray-700 pl-4">
                                {exp.description.split('. ').filter(s => s.trim()).map((sentence, idx) => (
                                    <div key={idx} className="flex items-start mb-1">
                                        <span className="mr-2">•</span>
                                        <span>{sentence.trim()}{!sentence.endsWith('.') && '.'}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Project Experience */}
            {data.projects.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3 border-b border-gray-200 pb-1">Project Experience</h2>
                    <div className="space-y-4">
                        {data.projects.map((proj: Project) => (
                            <div key={proj.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="text-sm font-bold text-gray-900">{proj.name}</h3>
                                </div>
                                {proj.technologies && proj.technologies.length > 0 && (
                                    <div className="text-sm text-gray-600 mb-2">{proj.technologies.join(', ')}</div>
                                )}
                                <div className="text-sm leading-relaxed text-gray-700 pl-4">
                                    {proj.description.split('. ').filter(s => s.trim()).map((sentence, idx) => (
                                        <div key={idx} className="flex items-start mb-1">
                                            <span className="mr-2">•</span>
                                            <span>{sentence.trim()}{!sentence.endsWith('.') && '.'}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Certifications / Additional */}
            {data.certifications && data.certifications.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-3 border-b border-gray-200 pb-1">Certifications</h2>
                    <div className="space-y-2">
                        {data.certifications.map((cert) => (
                            <div key={cert.id} className="text-sm text-gray-700">
                                <span className="font-bold">{cert.name}</span> – {cert.issuer} ({cert.date})
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* References */}
            <section className="mt-auto pt-4">
                <p className="text-xs text-gray-400 text-center">References available upon request</p>
            </section>
        </div>
    );
};
