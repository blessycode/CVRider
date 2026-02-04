"use client";

import React from 'react';
import { TemplateProps } from '@/types/template';
import { Experience, Education, Skill, Project, ContactInfo } from '@/types/cv';

export const CorporateSidebar: React.FC<TemplateProps> = ({ data, font = 'sans' }) => {
    return (
        <div className={`w-full min-h-[297mm] bg-white shadow-lg flex flex-col ${font === 'serif' ? 'font-serif' : 'font-sans'}`}>
            {/* Header */}
            <header className="bg-gray-900 text-white p-8">
                <h1 className="text-4xl font-bold">{data.full_name}</h1>
                <p className="text-lg mt-2 text-gray-300">{data.job_title}</p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm opacity-90">
                    {data.contact_info.map((contact: ContactInfo, i: number) => (
                        <span key={i} className="flex items-center gap-1">
                            {contact.value}
                        </span>
                    ))}
                </div>
            </header>

            <div className="grid grid-cols-3 flex-1">
                {/* Left Sidebar */}
                <aside className="col-span-1 bg-gray-50 p-6 space-y-8 border-r border-gray-100">
                    {/* Skills */}
                    <div>
                        <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 mb-3 text-gray-900 uppercase tracking-wider">Skills</h2>
                        <ul className="space-y-2 text-sm text-gray-700">
                            {data.skills.map((skill: Skill) => (
                                <li key={skill.id} className="flex justify-between items-center">
                                    <span>{skill.name}</span>
                                    {skill.level && <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-600 uppercase font-black">{skill.level}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Certifications (Replacing Languages as it's more relevant to the data we have) */}
                    {data.certifications && data.certifications.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 mb-3 text-gray-900 uppercase tracking-wider">Certifications</h2>
                            <ul className="space-y-4 text-sm text-gray-700">
                                {data.certifications.map((cert) => (
                                    <li key={cert.id}>
                                        <p className="font-bold text-gray-900 leading-tight">{cert.name}</p>
                                        <p className="text-xs text-gray-500 mt-1">{cert.issuer} — {cert.date}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </aside>

                {/* Main Content */}
                <main className="col-span-2 p-8 space-y-8">
                    {/* Professional Summary */}
                    {data.summary && (
                        <section>
                            <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 mb-3 text-gray-900 uppercase tracking-wider">
                                Professional Summary
                            </h2>
                            <p className="text-sm leading-relaxed text-gray-700 whitespace-pre-line">
                                {data.summary}
                            </p>
                        </section>
                    )}

                    {/* Education */}
                    <section>
                        <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 mb-3 text-gray-900 uppercase tracking-wider">
                            Education
                        </h2>
                        <div className="space-y-6">
                            {data.education.map((edu: Education) => (
                                <div key={edu.id} className="text-sm">
                                    <div className="flex justify-between items-start">
                                        <p className="font-bold text-gray-900 text-base">{edu.degree}{edu.field ? ` in ${edu.field}` : ''}</p>
                                        <p className="text-gray-500 font-medium whitespace-nowrap ml-4">{edu.startDate} – {edu.endDate}</p>
                                    </div>
                                    <p className="text-gray-700 font-semibold mt-0.5">{edu.school}{edu.location ? `, ${edu.location}` : ''}</p>
                                    {edu.description && (
                                        <p className="text-gray-600 mt-2 whitespace-pre-line text-[13px] leading-relaxed italic border-l-2 border-gray-100 pl-3">
                                            {edu.description}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Work Experience */}
                    <section>
                        <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 mb-3 text-gray-900 uppercase tracking-wider">
                            Work Experience
                        </h2>

                        <div className="space-y-8">
                            {data.experience.map((exp: Experience) => (
                                <div key={exp.id} className="text-sm">
                                    <div className="flex justify-between items-start">
                                        <p className="font-bold text-gray-900 text-base">{exp.role}</p>
                                        <p className="text-gray-500 font-medium whitespace-nowrap ml-4">{exp.startDate} – {exp.current ? 'Present' : exp.endDate}</p>
                                    </div>
                                    <p className="text-gray-700 font-semibold mt-0.5">{exp.company}{exp.location ? `, ${exp.location}` : ''}</p>
                                    <p className="text-gray-600 mt-2 whitespace-pre-line leading-relaxed text-[13px]">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    {data.projects.length > 0 && (
                        <section>
                            <h2 className="text-xl font-bold border-b-2 border-gray-900 pb-2 mb-3 text-gray-900 uppercase tracking-wider">
                                Projects & Achievements
                            </h2>

                            <div className="space-y-6">
                                {data.projects.map((proj: Project) => (
                                    <div key={proj.id} className="text-sm">
                                        <p className="font-bold text-gray-900 text-base">{proj.name}</p>
                                        {proj.technologies && proj.technologies.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-1 mb-2">
                                                {proj.technologies.map((tech, i) => (
                                                    <span key={i} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded font-bold uppercase">{tech}</span>
                                                ))}
                                            </div>
                                        )}
                                        <p className="text-gray-600 leading-relaxed text-[13px] whitespace-pre-line">
                                            {proj.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};
