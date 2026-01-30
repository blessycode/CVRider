
import React from 'react';
import { Card } from "./ui/Card";
import { FileText } from "lucide-react";

interface SummarySectionProps {
    summary: string | undefined;
    onChange: (summary: string) => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ summary, onChange }) => {
    return (
        <Card title="Professional Summary" description="A high-impact overview of your career and value proposition." icon={<FileText size={20} />}>
            <div className="flex flex-col gap-4">
                <textarea
                    className="w-full rounded-2xl border-2 border-transparent bg-gray-50 px-5 py-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-blue-600 focus:bg-white shadow-sm hover:bg-gray-100/50 min-h-[250px] leading-relaxed"
                    value={summary || ''}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="e.g. Results-oriented Senior Software Engineer with 6 years of experience building scalable web applications. Skilled in React, Node.js, and Cloud Infrastructure..."
                />
                <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Recommended: 300-600 characters</span>
                    <span className="text-xs font-bold text-blue-600">
                        {summary?.length || 0} chars
                    </span>
                </div>
            </div>
        </Card>
    );
};
