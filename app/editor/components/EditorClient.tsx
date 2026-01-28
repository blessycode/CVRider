"use client";

import { useState } from "react";
import { Resume } from "@/types/Resume";
import { ResumeForm } from "@/app/components/ResumeForm";
import { PreviewPanel } from "@/app/components/PreviewPanel";
import { Session } from "next-auth";
import { logout } from "@/actions/logout";
import Link from "next/link";

interface EditorClientProps {
    session: Session | null;
}

export function EditorClient({ session }: EditorClientProps) {
    const [loading, setLoading] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const [resumeData, setResumeData] = useState<Resume>({
        name: {
            first: "Alex",
            last: "Johnson",
        },
        tagline: "Graduate Trainee Data Analyst | Python • SQL • Data Visualization",
        summary: "Highly motivated Graduate Data Analyst with a strong foundation in Python, SQL, and statistical modeling. Passionate about transforming complex datasets into actionable insights. Seeking a Graduate IT program to leverage technical skills in data-driven decision making.",
        contacts: [
            {
                text: "alex.johnson@email.com",
                url: "mailto:alex.johnson@email.com",
            },
            {
                text: "+1 (555) 000-1234",
            },
            {
                text: "linkedin.com/in/alexjohnson",
                url: "https://linkedin.com/in/alexjohnson",
            },
            {
                text: "github.com/alexj-data",
                url: "https://github.com/alexj-data",
            },
        ],
        education: [
            {
                institution: "State University of Technology",
                credential: "B.S. in Data Science & Business Analytics",
                dateRange: {
                    start: "09-2020",
                    end: "05-2024",
                },
                location: "Chicago, IL",
                highlights: [
                    "GPA: 3.9/4.0",
                    "Dean's List: All Semesters",
                    "Relevant Coursework: Machine Learning, Database Management, Statistical Inference",
                ],
            },
        ],
        experience: [
            {
                company: "Global Tech Solutions",
                credential: "Data Analyst Intern",
                dateRange: {
                    start: "06-2023",
                    end: "08-2023",
                },
                location: "Remote",
                highlights: [
                    "Automated weekly reporting pipelines using Python and SQL, saving 10+ hours of manual work per month.",
                    "Analyzed customer churn data to identify key risk factors, contributing to a 5% improvement in retention strategies.",
                    "Presented data-driven insights to senior management using interactive Power BI dashboards.",
                ],
            },
        ],
        skills: [
            {
                category: "Programming",
                stack: ["Python (Pandas, NumPy, Scikit-learn)", "SQL (PostgreSQL, MySQL)", "R"],
            },
            {
                category: "Data Visualization",
                stack: ["Tableau", "Power BI", "Matplotlib", "Seaborn"],
            },
            {
                category: "Tools & Core",
                stack: ["Excel (VBA, Pivot Tables)", "Git", "AWS (S3, Redshift)", "Jupyter Notebooks"],
            },
        ],
        projects: [
            {
                name: "Predictive Housing Market Analysis",
                stack: ["Python", "Scikit-learn", "Tableau"],
                dateRange: { start: "01-2024", end: "04-2024" },
                highlights: [
                    "Developed a regression model to predict housing prices with 92% accuracy using a dataset of 50,000+ entries.",
                    "Cleaned and pre-processed raw data using Pandas, handling missing values and outliers.",
                    "Visualized key price drivers in Tableau for stakeholder presentation.",
                ],
            },
            {
                name: "E-commerce Customer Segmentation",
                stack: ["Python", "SQL", "K-means"],
                dateRange: { start: "09-2023", end: "12-2023" },
                highlights: [
                    "Performed RFM analysis and K-means clustering to segment customers into 5 distinct personas.",
                    "Optimized SQL queries to extract transaction data from a large-scale database, reducing processing time by 40%.",
                    "Provided recommendations that led to a 15% increase in targeted campaign conversion rates.",
                ],
            },
            {
                name: "Inventory Optimization Dashboard",
                stack: ["Power BI", "SQL", "Excel"],
                dateRange: { start: "05-2023", end: "08-2023" },
                highlights: [
                    "Created an automated Power BI dashboard for real-time inventory tracking and demand forecasting.",
                    "Integrated multiple data sources using Power Query and handled ETL processes.",
                    "Identified $10k+ potential savings by highlighting overstock patterns in seasonal items.",
                ],
            },
        ],
        softSkills: [
            "Analytical Thinking",
            "Communication & Presentation",
            "Problem Solving",
            "Team Collaboration",
            "Attention to Detail"
        ],
        references: [
            "References available upon request"
        ]
    });

    const handleGenerateResume = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/generate/ats", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(resumeData),
            });

            if (!response.ok) {
                const errData = await response.json().catch(() => ({}));
                console.error("Server Error:", errData);
                throw new Error(errData.details || errData.error || "Failed to generate resume");
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            setPdfUrl(url);
        } catch (error: any) {
            console.error("Error generating resume:", error);
            alert(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa] font-sans text-zinc-900">
            <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/80 backdrop-blur-md px-6 py-4">
                <div className="mx-auto flex max-w-[1400px] items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1e3a8a] text-white shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M8 13h8" /><path d="M8 17h8" /><path d="M10 9h8" /></svg>
                        </div>
                        <h1 className="text-xl font-bold tracking-tight text-[#1e3a8a]">CVRider</h1>
                    </Link>
                    <div className="flex items-center gap-4">
                        {session && (
                            <>
                                <span className="text-sm font-medium text-zinc-600">
                                    Hi, <span className="text-zinc-900 font-bold">{session.user?.name || session.user?.email}</span>
                                </span>
                                <form action={logout}>
                                    <button type="submit" className="text-sm font-medium text-zinc-600 hover:text-red-500 transition-colors">
                                        Log out
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </header>

            <main className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 p-6 lg:grid-cols-12 lg:p-8">
                {/* Left Column: Form */}
                <div className="flex flex-col gap-6 lg:col-span-7 xl:col-span-7">
                    <ResumeForm
                        resumeData={resumeData}
                        setResumeData={setResumeData}
                    />
                </div>

                {/* Right Column: Preview */}
                <div className="flex flex-col gap-6 lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24 lg:h-fit">
                    <PreviewPanel
                        pdfUrl={pdfUrl}
                        loading={loading}
                        onGenerate={handleGenerateResume}
                    />
                </div>
            </main>

            <footer className="mt-auto border-t border-zinc-200 bg-white py-8 text-center text-sm text-zinc-500">
                <div className="mx-auto max-w-7xl px-6 flex flex-col items-center gap-2">
                    <p>&copy; {new Date().getFullYear()} CVRider. All rights reserved.</p>
                    <p>
                        Developed by{" "}
                        <a
                            href="https://blessy-io.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
                        >
                            Blessy
                        </a>
                        .
                    </p>
                </div>
            </footer>
        </div>
    );
}
