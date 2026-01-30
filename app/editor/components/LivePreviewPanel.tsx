
import React from "react";
import { CVPreview } from "@/components/templates";
import { CVData } from "@/types/cv";
import { Loader2 } from "lucide-react";

interface LivePreviewPanelProps {
    data: CVData;
    templateId: string;
    loading?: boolean;
}

export const LivePreviewPanel: React.FC<LivePreviewPanelProps> = ({
    data,
    templateId,
    loading
}) => {
    // We use an ID for html2pdf to find the content
    const previewId = "cv-preview-content";

    return (
        <div className="relative group">
            {loading && (
                <div className="absolute inset-0 z-10 bg-white/50 backdrop-blur-[2px] flex items-center justify-center rounded-sm">
                    <Loader2 className="h-10 w-10 text-blue-600 animate-spin" />
                </div>
            )}

            <div className="bg-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden ring-1 ring-gray-100 transition-shadow group-hover:shadow-[0_40px_100px_-10px_rgba(0,0,0,0.15)]">
                <CVPreview data={data} templateId={templateId} />
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 whitespace-nowrap">End of Document</span>
                <div className="h-px flex-1 bg-gray-300"></div>
            </div>
        </div>
    );
};
