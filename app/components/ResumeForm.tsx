
import React, { useState } from 'react';
import { Resume } from "@/types/Resume";
import { PersonalDetails } from "./PersonalDetails";
import { SummarySection } from "./SummarySection";
import { ContactList } from "./ContactList";
import { EducationList } from "./EducationList";
import { ExperienceList } from "./ExperienceList";
import { ProjectList } from "./ProjectList";
import { SkillList } from "./SkillList";
import { SimpleList } from "./SimpleList";
import { User, Phone, GraduationCap, Briefcase, FolderGit2, Wrench, FileText } from "lucide-react";

interface ResumeFormProps {
    resumeData: Resume;
    setResumeData: (data: Resume) => void;
}

type Section = 'profile' | 'summary' | 'contacts' | 'education' | 'experience' | 'skills' | 'projects' | 'softSkills' | 'references';

export const ResumeForm: React.FC<ResumeFormProps> = ({ resumeData, setResumeData }) => {
    const [activeSection, setActiveSection] = useState<Section>('profile');

    const sections: { id: Section; label: string; icon: React.ReactNode }[] = [
        { id: 'profile', label: 'Personal Info', icon: <User size={18} /> },
        { id: 'summary', label: 'Summary', icon: <FileText size={18} /> },
        { id: 'contacts', label: 'Contact', icon: <Phone size={18} /> },
        { id: 'skills', label: 'Technical Skills', icon: <Wrench size={18} /> },
        { id: 'education', label: 'Education', icon: <GraduationCap size={18} /> },
        { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
        { id: 'projects', label: 'Projects', icon: <FolderGit2 size={18} /> },
        { id: 'softSkills', label: 'Soft Skills', icon: <User size={18} /> },
        { id: 'references', label: 'References', icon: <FileText size={18} /> },
    ];

    const renderContent = () => {
        switch (activeSection) {
            case 'profile':
                return <PersonalDetails
                    name={resumeData.name}
                    tagline={resumeData.tagline}
                    onChange={(data) => setResumeData({ ...resumeData, ...data })}
                />;
            case 'summary':
                return <SummarySection
                    summary={resumeData.summary}
                    onChange={(summary) => setResumeData({ ...resumeData, summary })}
                />;
            case 'contacts':
                return <ContactList contacts={resumeData.contacts || []} onChange={(contacts) => setResumeData({ ...resumeData, contacts: contacts as any })} />;
            case 'education':
                return <EducationList educationList={resumeData.education || []} onChange={(education) => setResumeData({ ...resumeData, education: education as any })} />;
            case 'experience':
                return <ExperienceList experienceList={resumeData.experience || []} onChange={(experience) => setResumeData({ ...resumeData, experience: experience as any })} />;
            case 'skills':
                return <SkillList skillList={resumeData.skills || []} onChange={(skills) => setResumeData({ ...resumeData, skills: skills as any })} />;
            case 'projects':
                return <ProjectList projectList={resumeData.projects || []} onChange={(projects) => setResumeData({ ...resumeData, projects: projects as any })} />;
            case 'softSkills':
                return <SimpleList
                    title="Soft Skills"
                    description="Enter your professional soft skills."
                    icon={<User size={20} />}
                    items={resumeData.softSkills || []}
                    placeholder="e.g. Problem Solving"
                    onChange={(softSkills) => setResumeData({ ...resumeData, softSkills })}
                />;
            case 'references':
                return <SimpleList
                    title="References"
                    description="List your professional references."
                    icon={<FileText size={20} />}
                    items={resumeData.references || []}
                    placeholder="e.g. John Doe, Senior Manager at Tech Corp - john.doe@email.com"
                    onChange={(references) => setResumeData({ ...resumeData, references })}
                />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-8 p-4">
            <div className="flex flex-col gap-2 mb-2">
                <h2 className="text-3xl font-bold text-zinc-900">Resume Editor</h2>
                <p className="text-zinc-600 text-lg">Fill in the sections below to build your professional resume.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="sticky top-[72px] z-10 -mx-6 bg-[#f5f6fa]/95 px-6 py-2 backdrop-blur-sm sm:mx-0 sm:bg-transparent sm:px-0 sm:py-0">
                <div className="flex overflow-x-auto pb-2 no-scrollbar rounded-xl bg-white p-2 shadow-sm border border-zinc-200">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`
                                flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all rounded-lg flex-1 justify-center
                                ${activeSection === section.id
                                    ? 'bg-[#1e3a8a] text-white shadow-md'
                                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'}
                            `}
                        >
                            {section.icon}
                            <span className="hidden sm:inline">{section.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="min-h-[400px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                {renderContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-zinc-200 mt-4">
                <button
                    onClick={() => {
                        const idx = sections.findIndex(s => s.id === activeSection);
                        if (idx > 0) setActiveSection(sections[idx - 1].id);
                    }}
                    disabled={activeSection === sections[0].id}
                    className="px-4 py-2 text-sm font-medium text-zinc-600 disabled:opacity-30 hover:bg-zinc-100 rounded-lg transition-colors"
                >
                    Previous
                </button>
                <button
                    onClick={() => {
                        const idx = sections.findIndex(s => s.id === activeSection);
                        if (idx < sections.length - 1) setActiveSection(sections[idx + 1].id);
                    }}
                    disabled={activeSection === sections[sections.length - 1].id}
                    className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-30"
                >
                    Next Step
                </button>
            </div>
        </div>
    );
};
