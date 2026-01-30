
import React from 'react';
import { Resume } from "@/types/Resume";
import { PersonalDetails } from "./PersonalDetails";
import { SummarySection } from "./SummarySection";
import { ContactList } from "./ContactList";
import { EducationList } from "./EducationList";
import { ExperienceList } from "./ExperienceList";
import { ProjectList } from "./ProjectList";
import { SkillList } from "./SkillList";
import { SimpleList } from "./SimpleList";
import { User, FileText } from "lucide-react";
import { SectionID } from "@/app/editor/components/EditorClient";

interface ResumeFormProps {
    activeSection: SectionID;
    resumeData: Resume;
    setResumeData: (data: Resume) => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ activeSection, resumeData, setResumeData }) => {
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
                    description="Highlight your interpersonal and professional soft skills."
                    icon={<User size={20} />}
                    items={resumeData.softSkills || []}
                    placeholder="e.g. Strategic Communication"
                    onChange={(softSkills) => setResumeData({ ...resumeData, softSkills })}
                />;
            case 'references':
                return <SimpleList
                    title="References"
                    description="Professional contacts who can vouch for your work."
                    icon={<FileText size={20} />}
                    items={resumeData.references || []}
                    placeholder="e.g. Jane Smith, CTO - jane.smith@tech.com"
                    onChange={(references) => setResumeData({ ...resumeData, references })}
                />;
            default:
                return null;
        }
    };

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderContent()}
        </div>
    );
};
