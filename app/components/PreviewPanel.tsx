
import React from "react";
import { Loader2, Download, RefreshCw } from "lucide-react";

interface PreviewPanelProps {
    pdfUrl: string | null;
    loading: boolean;
    onGenerate: () => void;
}

export const PreviewPanel: React.FC<PreviewPanelProps> = ({
    pdfUrl,
    loading,
    onGenerate,
}) => {
    return (
        <div className="flex flex-col gap-6 sticky top-8">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-zinc-900">
                    Live Preview
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={onGenerate}
                        disabled={loading}
                        className="flex items-center justify-center gap-2 rounded-xl bg-white border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 disabled:opacity-50"
                        title="Update Preview"
                    >
                        {loading ? (
                            <Loader2 className="animate-spin" size={16} />
                        ) : (
                            <>
                                <RefreshCw size={16} />
                                <span className="hidden sm:inline">Update</span>
                            </>
                        )}
                    </button>

                    {pdfUrl && (
                        <a
                            href={pdfUrl}
                            download="resume.pdf"
                            className="flex items-center justify-center gap-2 rounded-xl bg-[#1e3a8a] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-900 hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <Download size={16} />
                            Download PDF
                        </a>
                    )}
                </div>
            </div>

            <div className="relative w-full rounded-sm bg-white paper-shadow-lg aspect-[1/1.414] overflow-hidden">
                {pdfUrl ? (
                    <iframe
                        src={pdfUrl}
                        className="h-full w-full border-none"
                        title="Resume PDF Preview"
                    />
                ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-white text-zinc-400">
                        <div className="h-20 w-16 border-2 border-dashed border-zinc-200 rounded-sm flex items-center justify-center">
                            <div className="h-16 w-12 bg-zinc-50 rounded-sm"></div>
                        </div>
                        <p className="text-sm font-medium">Your resume preview will appear here</p>
                    </div>
                )}
            </div>
        </div>
    );
};
