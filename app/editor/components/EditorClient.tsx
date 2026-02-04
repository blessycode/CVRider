"use client";

import { useState, useMemo, useEffect } from "react";
import { Resume } from "@/types/Resume";
import { ResumeForm } from "@/app/components/ResumeForm";
import { LivePreviewPanel } from "./LivePreviewPanel";
import { Session } from "next-auth";
import Link from "next/link";
import { adaptResumeToCVData } from "@/types/adapter";
import { TEMPLATES } from "@/components/templates";
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
    const [isDownloading, setIsDownloading] = useState(false);
    const [isCapturing, setIsCapturing] = useState(false);

    const [resumeData, setResumeData] = useState<Resume>({
        name: { first: "[First Name]", last: "[Last Name]" },
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
                highlights: ["[Achievement or key course]"],
            },
        ],
        experience: [
            {
                company: "[Company Name]",
                credential: "[Job Title / Role]",
                dateRange: { start: "[Start Date]", end: "[Present / End Date]" },
                location: "[City, Country]",
                highlights: ["[Briefly describe your main responsibility.]"],
            },
        ],
        skills: [
            { category: "[Category]", stack: ["[Skill 1]", "[Skill 2]"] },
        ],
        projects: [
            {
                name: "[Project Name]",
                stack: ["[Tech 1]"],
                dateRange: { start: "[Start Date]", end: "[End Date]" },
                highlights: ["[Goal of the project]"],
            },
        ],
        softSkills: ["[Skill 1]"],
        references: ["Available upon request"]
    });

    const cvData = useMemo(() => adaptResumeToCVData(resumeData, selectedTemplateId), [resumeData, selectedTemplateId]);

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

    useEffect(() => { setIsSaved(false); }, [resumeData]);

    useEffect(() => {
        const savedData = localStorage.getItem('cvrider-draft');
        if (savedData) {
            try {
                const { resumeData: savedResume, templateId: savedTemplate } = JSON.parse(savedData);
                if (savedResume) setResumeData(savedResume);
                if (savedTemplate) setSelectedTemplateId(savedTemplate);
            } catch (e) {
                console.error("Failed to load draft:", e);
            }
        }
    }, []);

    const handleSave = async () => {
        setIsSaving(true);
        try {
            localStorage.setItem('cvrider-draft', JSON.stringify({
                resumeData,
                templateId: selectedTemplateId,
                updatedAt: new Date().toISOString()
            }));
            setIsSaved(true);
            setTimeout(() => setIsSaved(false), 2000);
        } catch (error) {
            console.error("Save failed:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            setIsCapturing(true);
            const fileName = `${resumeData.name.first}_${resumeData.name.last}_CV`.replace(/\s+/g, '_');
            await new Promise(resolve => setTimeout(resolve, 500));
            await downloadPDF(fileName);
        } catch (error) {
            console.error("Download failed:", error);
            alert("Failed to generate PDF. Please try again.");
        } finally {
            setIsCapturing(false);
            setIsDownloading(false);
        }
    };

    const handlePrint = () => { window.print(); };

    return (
        <div className="flex h-screen bg-gray-50/50 overflow-hidden font-sans relative">
            {/* Download Overlay */}
            {isDownloading && (
                <div className="fixed inset-0 z-[10000] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center p-8 text-center animate-fade-in">
                    <div className="relative mb-10">
                        <div className="w-24 h-24 border-4 border-blue-50 border-t-blue-600 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Download className="text-blue-600" size={28} />
                        </div>
                    </div>
                    <h3 className="text-3xl font-heading font-extrabold text-gray-900 mb-3 tracking-tight text-center">Preparing Your CV</h3>
                    <p className="text-gray-500 max-w-xs font-medium text-center">Sit back while we synthesize your professional document.</p>
                </div>
            )}

            {/* Desktop Sidebar Navigation */}
            <aside className={`bg-white border-r border-gray-100 transition-all duration-500 ease-in-out flex flex-col z-40 ${isSidebarOpen ? 'w-80' : 'w-0 -ml-1 overflow-hidden lg:w-24 lg:ml-0'}`}>
                <div className="p-8 flex items-center gap-4 border-b border-gray-50 h-[88px]">
                    <Link href="/" className="flex items-center gap-3 group whitespace-nowrap">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-xl group-hover:scale-105 transition-transform">
                            <span className="font-serif font-bold text-xl">CV</span>
                        </div>
                        {isSidebarOpen && <span className="text-2xl font-heading font-extrabold text-gray-900 tracking-tight">CVRider</span>}
                    </Link>
                </div>

                <div className="p-6">
                    <div className="px-2">
                        <div className="flex justify-between items-center mb-2.5">
                            <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-[0.2em]">Profile Health</span>
                            <span className="text-[11px] font-extrabold text-blue-600">{completionPercentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 transition-all duration-1000 ease-out" style={{ width: `${completionPercentage}%` }}></div>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto p-6 space-y-2 custom-scrollbar">
                    {SECTIONS.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 group ${activeSection === section.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`${activeSection === section.id ? 'text-white' : 'text-gray-400 group-hover:text-blue-600'}`}>{section.icon}</span>
                                {isSidebarOpen && <span className="text-[15px] font-bold tracking-tight">{section.label}</span>}
                            </div>
                            {isSidebarOpen && sectionCompletion[section.id] && (
                                <div className={`flex h-6 w-6 items-center justify-center rounded-full ${activeSection === section.id ? 'bg-white/20' : 'bg-emerald-50 text-emerald-600'}`}>
                                    <Check size={14} strokeWidth={3} />
                                </div>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-8 border-t border-gray-50">
                    <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full border border-gray-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest text-center">Cloud Sync Ready</span>
                    </div>
                </div>
            </aside>

            {/* Main Editor Section */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                <header className="h-[88px] bg-white/70 backdrop-blur-xl border-b border-gray-100 px-8 flex items-center justify-between z-30">
                    <div className="flex items-center gap-6">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-3 hover:bg-gray-50 rounded-2xl transition-all text-gray-500 lg:flex border border-transparent hover:border-gray-100 shadow-sm">
                            {isSidebarOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                        <div className="h-8 w-px bg-gray-100 hidden sm:block"></div>
                        <h2 className="text-xl font-heading font-extrabold text-gray-900 hidden sm:block tracking-tight">
                            {SECTIONS.find(s => s.id === activeSection)?.label}
                        </h2>
                    </div>

                    <div className="flex items-center gap-4 uppercase tracking-[0.1em] text-[10px] font-extrabold">
                        <div className="hidden lg:flex items-center gap-3 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-gray-500">
                            <Layout size={16} className="text-gray-400" />
                            <span className="text-gray-400">Template:</span>
                            <select value={selectedTemplateId} onChange={(e) => setSelectedTemplateId(e.target.value)} className="bg-transparent text-gray-900 outline-none cursor-pointer font-bold">
                                {TEMPLATES.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                            </select>
                        </div>
                        <button onClick={handlePrint} className="hidden xl:inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-white border border-gray-100 text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all shadow-sm">
                            <Printer size={18} />
                            <span>Print</span>
                        </button>
                        <button onClick={handleDownload} disabled={isDownloading} className={`hidden sm:inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-white border border-gray-100 transition-all active:scale-95 shadow-sm ${isDownloading ? 'opacity-50 cursor-wait' : 'text-gray-900 hover:border-gray-900 hover:bg-gray-50'}`}>
                            <Download size={18} />
                            <span>Export</span>
                        </button>
                        <button onClick={handleSave} className={`inline-flex items-center gap-3 px-8 py-3 rounded-2xl transition-all active:scale-95 ${isSaved ? 'bg-emerald-500 text-white' : 'bg-gray-900 text-white hover:bg-blue-600 shadow-xl shadow-gray-200'}`}>
                            {isSaved ? <CheckCircle2 size={18} /> : <Save size={18} />}
                            <span>{isSaved ? 'Saved' : 'Save Draft'}</span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 flex overflow-hidden">
                    <main className="flex-1 overflow-y-auto p-10 md:p-16 custom-scrollbar flex justify-center bg-transparent">
                        <div className="w-full max-w-3xl space-y-12 animate-fade-in-up">
                            <div className="border-b border-gray-50 pb-12">
                                <Link href="/" className="inline-flex items-center gap-2 text-blue-600 font-extrabold text-xs mb-8 hover:translate-x-[-5px] transition-transform uppercase tracking-widest">
                                    <ChevronLeft size={16} />
                                    <span>Back to Website</span>
                                </Link>
                                <h3 className="text-5xl font-heading font-extrabold text-gray-900 mb-4 tracking-tight">
                                    {SECTIONS.find(s => s.id === activeSection)?.label}
                                </h3>
                                <p className="text-xl text-gray-500 font-medium leading-relaxed font-sans">
                                    Make your profile stand out with a few simple details.
                                </p>
                            </div>

                            <ResumeForm activeSection={activeSection} resumeData={resumeData} setResumeData={setResumeData} />

                            <div className="flex justify-between items-center pt-12 border-t border-gray-50">
                                <button onClick={() => {
                                    const idx = SECTIONS.findIndex(s => s.id === activeSection);
                                    if (idx > 0) setActiveSection(SECTIONS[idx - 1].id);
                                }} disabled={activeSection === SECTIONS[0].id} className="flex items-center gap-2 text-gray-400 hover:text-gray-900 disabled:opacity-30 font-extrabold uppercase tracking-widest text-[11px]">
                                    <ChevronLeft size={20} />
                                    <span>Back</span>
                                </button>
                                <button onClick={() => {
                                    const idx = SECTIONS.findIndex(s => s.id === activeSection);
                                    if (idx < SECTIONS.length - 1) setActiveSection(SECTIONS[idx + 1].id);
                                }} disabled={activeSection === SECTIONS[SECTIONS.length - 1].id} className="inline-flex items-center gap-3 px-10 py-4 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-2xl font-extrabold uppercase tracking-widest text-[11px] transition-all">
                                    <span>Next Step</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    </main>

                    <div className="hidden 2xl:block w-[1000px] bg-gray-50/50 border-l border-gray-100 relative overflow-y-auto p-12 custom-scrollbar">
                        <div className="sticky top-0 mb-12 flex items-center justify-between z-20">
                            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
                                <Sparkles className="h-5 w-5 text-blue-600" />
                                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-gray-400">Live Preview</span>
                            </div>
                        </div>

                        <div className="flex justify-center pb-20">
                            <div className="transform scale-90 origin-top soft-shadow-lg rounded-sm overflow-hidden bg-white hover:scale-95 transition-transform duration-700">
                                <LivePreviewPanel data={cvData} templateId={selectedTemplateId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Print Mirror Container */}
            <div className="fixed left-0 top-0 bg-white" style={{ zIndex: isCapturing ? 9999 : -50, opacity: 1, visibility: 'visible', width: '210mm', minHeight: '297mm', left: isCapturing ? 0 : '-10000px', pointerEvents: 'none' }}>
                <div id="cv-pdf-target" className="bg-white">
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
