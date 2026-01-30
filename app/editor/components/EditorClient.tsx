"use client";

import { useState, useMemo, useEffect } from "react";
import { Resume } from "@/types/Resume";
import { ResumeForm } from "@/app/components/ResumeForm";
import { LivePreviewPanel } from "./LivePreviewPanel";
import { Session } from "next-auth";
import { logout } from "@/actions/logout";
import Link from "next/link";
import { adaptResumeToCVData } from "@/types/adapter";
import { TEMPLATES } from "@/components/templates";
import { saveResume } from "@/lib/actions/resume";
import { downloadPDF } from "@/lib/utils/pdfDownload";
import {
    User,
    FileText,
    Phone,
    Wrench,
    GraduationCap,
    Briefcase,
    FolderGit2,
    ChevronLeft,
    ArrowRight,
    Printer,
    Download,
    Save,
    Layout,
    LogOut,
    Menu,
    X,
    Sparkles,
    CheckCircle2,
    Check
} from "lucide-react";

interface EditorClientProps {
    session: Session | null;
}

export type SectionID = 'profile' | 'summary' | 'contacts' | 'education' | 'experience' | 'skills' | 'projects' | 'softSkills' | 'references';

const SECTIONS: { id: SectionID; label: string; icon: React.ReactNode }[] = [
    { id: 'profile', label: 'Personal Info', icon: <User size={20} /> },
    { id: 'summary', label: 'Professional Summary', icon: <FileText size={20} /> },
    { id: 'contacts', label: 'Contact Details', icon: <Phone size={20} /> },
    { id: 'skills', label: 'Technical Skills', icon: <Wrench size={20} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
    { id: 'experience', label: 'Work Experience', icon: <Briefcase size={20} /> },
    { id: 'projects', label: 'Projects', icon: <FolderGit2 size={20} /> },
    { id: 'softSkills', label: 'Soft Skills', icon: <User size={20} /> },
    { id: 'references', label: 'References', icon: <FileText size={20} /> },
];

export function EditorClient({ session }: EditorClientProps) {
    const [selectedTemplateId, setSelectedTemplateId] = useState("modern-blue");
    const [activeSection, setActiveSection] = useState<SectionID>('profile');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSaved, setIsSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const [resumeData, setResumeData] = useState<Resume>({
        name: {
            first: "[First Name]",
            last: "[Last Name]",
        },
        tagline: "[Your Professional Tagline / Headline]",
        summary: "[Write a brief professional summary here. Highlight your key strengths, years of experience, and primary career goals.]",
        contacts: [
            { text: "your.email@example.com", url: "mailto:your.email@example.com", type: "email" },
            { text: "[Phone Number]", type: "phone" },
            { text: "linkedin.com/in/[username]", url: "https://linkedin.com/in/", type: "linkedin" },
            { text: "github.com/[username]", url: "https://github.com/", type: "github" },
        ],
        education: [
            {
                institution: "[University/Institution Name]",
                credential: "[Degree or Certification Title]",
                dateRange: { start: "[Start Date]", end: "[End Date / Present]" },
                location: "[City, Country]",
                highlights: ["[Specific achievement or key course]", "[Academic honor or relevant project]"],
            },
        ],
        experience: [
            {
                company: "[Company Name]",
                credential: "[Job Title / Role]",
                dateRange: { start: "[Start Date]", end: "[Present / End Date]" },
                location: "[City, Country]",
                highlights: [
                    "[Briefly describe your main responsibility.]",
                    "[Highlight a key achievement with a quantifiable metric if possible.]",
                    "[Note a specific tool or skill you utilized in this role.]"
                ],
            },
        ],
        skills: [
            { category: "[Category, e.g. Technical]", stack: ["[Skill 1]", "[Skill 2]", "[Skill 3]"] },
            { category: "[Category, e.g. Tools]", stack: ["[Software 1]", "[Software 2]"] },
        ],
        projects: [
            {
                name: "[Project Name]",
                stack: ["[Tech 1]", "[Tech 2]"],
                dateRange: { start: "[Start Date]", end: "[End Date]" },
                highlights: ["[Goal of the project]", "[Your specific contribution or the final outcome]"],
            },
        ],
        softSkills: ["[Skill 1]", "[Skill 2]", "[Skill 3]"],
        references: ["Available upon request"]
    });

    const cvData = useMemo(() => adaptResumeToCVData(resumeData, selectedTemplateId), [resumeData, selectedTemplateId]);

    // Completion Tracking
    const sectionCompletion = useMemo(() => ({
        profile: !!(resumeData.name.first && resumeData.name.last),
        summary: !!resumeData.summary && resumeData.summary.length > 20,
        contacts: (resumeData.contacts?.length || 0) > 0,
        education: (resumeData.education?.length || 0) > 0,
        experience: (resumeData.experience?.length || 0) > 0,
        skills: (resumeData.skills?.length || 0) > 0,
        projects: (resumeData.projects?.length || 0) > 0,
        softSkills: (resumeData.softSkills?.length || 0) > 0,
        references: (resumeData.references?.length || 0) > 0,
    }), [resumeData]);

    const completionPercentage = useMemo(() => {
        const values = Object.values(sectionCompletion);
        const complete = values.filter(Boolean).length;
        return Math.round((complete / values.length) * 100);
    }, [sectionCompletion]);

    // Track unsaved changes
    useEffect(() => {
        setIsSaved(false);
    }, [resumeData]);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await saveResume({ resumeData, templateId: selectedTemplateId }, `${resumeData.name.first} ${resumeData.name.last}`);
            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 2000);
        } catch (error) {
            console.error("Save failed:", error);
            alert("Failed to save resume. Please make sure you are logged in.");
        } finally {
            setIsSaving(false);
        }
    };

    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            const fileName = `${resumeData.name.first}_${resumeData.name.last}_CV`.replace(/\s+/g, '_');
            await downloadPDF(fileName);
        } catch (error) {
            console.error("Download failed:", error);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setIsDownloading(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex h-screen bg-[#f8fafc] overflow-hidden font-sans">
            {/* Desktop Sidebar Navigation */}
            <aside className={`bg-white border-r border-gray-200 transition-all duration-300 flex flex-col z-40 ${isSidebarOpen ? 'w-72' : 'w-0 -ml-1 overflow-hidden lg:w-20 lg:ml-0'}`}>
                <div className="p-6 flex items-center gap-3 border-b border-gray-100 h-[73px]">
                    <Link href="/" className="flex items-center gap-3 group whitespace-nowrap">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white shadow-lg shadow-gray-200 group-hover:scale-110 transition-transform">
                            <span className="font-serif font-bold text-lg">CV</span>
                        </div>
                        {isSidebarOpen && <span className="text-xl font-serif font-bold text-gray-900">CVRider</span>}
                    </Link>
                </div>

                <div className="p-4 space-y-4">
                    <div className="px-2">
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Completion</span>
                            <span className="text-[10px] font-bold text-blue-600">{completionPercentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blue-500 transition-all duration-500 ease-out"
                                style={{ width: `${completionPercentage}%` }}
                            ></div>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto p-4 space-y-1.5 custom-scrollbar">
                    {SECTIONS.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`
                                w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
                                ${activeSection === section.id
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
                            `}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`${activeSection === section.id ? 'text-white' : 'text-gray-400 group-hover:text-gray-900'} transition-colors`}>
                                    {section.icon}
                                </span>
                                {isSidebarOpen && <span className="text-[14px] font-bold tracking-tight">{section.label}</span>}
                            </div>
                            {isSidebarOpen && sectionCompletion[section.id] && (
                                <div className={`flex h-5 w-5 items-center justify-center rounded-full ${activeSection === section.id ? 'bg-white/20' : 'bg-emerald-50 text-emerald-600'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    {session && isSidebarOpen && (
                        <div className="mb-4 px-4 py-3 bg-blue-50 rounded-2xl flex items-center gap-3 border border-blue-100">
                            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
                                {session.user?.name?.[0]}
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold text-blue-900 truncate">{session.user?.name}</p>
                                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Premium User</p>
                            </div>
                        </div>
                    )}
                    <form action={logout}>
                        <button type="submit" className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all font-bold text-sm">
                            <LogOut size={18} />
                            {isSidebarOpen && <span>Sign Out</span>}
                        </button>
                    </form>
                </div>
            </aside>

            {/* Main Editor Section */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Fixed Top Action Bar */}
                <header className="h-[73px] bg-white border-b border-gray-200 px-6 flex items-center justify-between z-30">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2.5 hover:bg-gray-100 rounded-xl transition-colors text-gray-500 lg:flex"
                        >
                            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                        <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>
                        <h2 className="text-lg font-bold text-gray-900 hidden sm:block">
                            {SECTIONS.find(s => s.id === activeSection)?.label}
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 font-heading uppercase tracking-widest text-[11px] font-bold">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-gray-500">
                            <Layout size={14} />
                            <span>Template:</span>
                            <select
                                value={selectedTemplateId}
                                onChange={(e) => setSelectedTemplateId(e.target.value)}
                                className="bg-transparent text-gray-900 outline-none cursor-pointer"
                            >
                                {TEMPLATES.map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handlePrint}
                            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border-2 border-gray-100 text-gray-500 hover:text-gray-900 transition-all active:scale-95 shadow-sm"
                            title="Print using Browser (Recommended for Quality)"
                        >
                            <Printer size={16} />
                            <span>Print</span>
                        </button>

                        <button
                            onClick={handleDownload}
                            disabled={isDownloading}
                            className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border-2 border-gray-100 transition-all active:scale-95 shadow-sm ${isDownloading ? 'opacity-50 cursor-wait' : 'text-gray-900 hover:border-gray-900'}`}
                        >
                            <Download size={16} className={isDownloading ? 'animate-pulse' : ''} />
                            <span>{isDownloading ? 'Generating...' : 'Export PDF'}</span>
                        </button>

                        <button
                            onClick={handleSave}
                            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full transition-all active:scale-95 ${isSaved ? 'bg-emerald-500 text-white' : 'bg-gray-900 text-white hover:bg-black shadow-lg shadow-gray-200'
                                }`}
                        >
                            {isSaved ? <CheckCircle2 size={16} /> : <Save size={16} />}
                            <span>{isSaved ? 'Saved' : isSaving ? 'Saving...' : 'Save Changes'}</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    {/* Form Scroll Area */}
                    <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar flex justify-center">
                        <div className="w-full max-w-3xl space-y-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
                            {/* Section Header Info */}
                            <div className="border-b border-gray-100 pb-8">
                                <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm mb-6 hover:translate-x-[-4px] transition-transform">
                                    <ChevronLeft size={16} />
                                    <span>Back to Website</span>
                                </Link>
                                <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                                    {SECTIONS.find(s => s.id === activeSection)?.label}
                                </h3>
                                <p className="text-lg text-gray-500 font-medium">
                                    Update this section to refine your professional profile.
                                </p>
                            </div>

                            <ResumeForm
                                activeSection={activeSection}
                                resumeData={resumeData}
                                setResumeData={setResumeData}
                            />

                            {/* Section Navigation Buttons */}
                            <div className="flex justify-between items-center pt-10 border-t border-gray-100">
                                <button
                                    onClick={() => {
                                        const idx = SECTIONS.findIndex(s => s.id === activeSection);
                                        if (idx > 0) setActiveSection(SECTIONS[idx - 1].id);
                                    }}
                                    disabled={activeSection === SECTIONS[0].id}
                                    className="flex items-center gap-2 text-gray-400 hover:text-gray-900 disabled:opacity-30 font-bold transition-all"
                                >
                                    <ChevronLeft size={20} />
                                    <span>Previous Section</span>
                                </button>
                                <button
                                    onClick={() => {
                                        const idx = SECTIONS.findIndex(s => s.id === activeSection);
                                        if (idx < SECTIONS.length - 1) setActiveSection(SECTIONS[idx + 1].id);
                                    }}
                                    disabled={activeSection === SECTIONS[SECTIONS.length - 1].id}
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-2xl font-bold transition-all active:scale-95 disabled:opacity-30"
                                >
                                    <span>Next Step</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </main>

                    {/* Preview Area (Right Side, Scrollable independently) */}
                    <div className="hidden xl:block w-[900px] bg-gray-50 border-l border-gray-200 relative overflow-y-auto p-8 custom-scrollbar">
                        <div className="sticky top-0 mb-8 flex items-center justify-between z-20">
                            <div className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full border border-gray-200 shadow-sm">
                                <Sparkles className="h-4 w-4 text-blue-600" />
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Live Render Engine</span>
                            </div>
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading}
                                className={`p-3 bg-white rounded-full border border-gray-200 transition-colors shadow-sm active:scale-95 ${isDownloading ? 'opacity-50 cursor-wait' : 'text-gray-900 hover:border-gray-900'}`}
                            >
                                <Download size={20} className={isDownloading ? 'animate-pulse' : ''} />
                            </button>
                        </div>

                        <div className="flex justify-center pb-20">
                            <div className="transform scale-95 origin-top shadow-[0_48px_100px_-24px_rgba(0,0,0,0.15)] rounded-sm overflow-hidden bg-white">
                                <LivePreviewPanel
                                    data={cvData}
                                    templateId={selectedTemplateId}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden off-screen preview for PDF generation (always rendered) */}
            <div
                className="fixed"
                style={{
                    left: '-9999px',
                    top: 0,
                    width: '210mm',
                    visibility: 'hidden',
                    pointerEvents: 'none'
                }}
                aria-hidden="true"
            >
                <div id="cv-preview-content" className="bg-white">
                    {(() => {
                        const template = TEMPLATES.find(t => t.id === selectedTemplateId) || TEMPLATES[0];
                        const TemplateComponent = template.component;
                        return <TemplateComponent data={cvData} {...template.props} />;
                    })()}
                </div>
            </div>
        </div>
    );
}
