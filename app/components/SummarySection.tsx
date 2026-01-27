
import React from 'react';
import { Card } from "./ui/Card";
import { FileText } from "lucide-react";

interface SummarySectionProps {
    summary: string | undefined;
    onChange: (summary: string) => void;
}

export const SummarySection: React.FC<SummarySectionProps> = ({ summary, onChange }) => {
    return (
        <Card title="Profile" description="A brief overview of your career and value proposition." icon={<FileText size={20} />}>
            <div className="flex flex-col gap-2">
                <textarea
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 min-h-[200px]"
                    value={summary || ''}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="e.g. Results-oriented Senior Software Engineer with 6 years of experience building scalable web applications. Skilled in React, Node.js, and Cloud Infrastructure..."
                />
                <p className="text-xs text-zinc-500 text-right">
                    {summary?.length || 0} characters
                </p>
            </div>
        </Card>
    );
};
