
import { prisma } from "@/lib/prisma";
import { adaptResumeToCVData } from "@/types/adapter";
import { CVPreview } from "@/components/templates";
import { notFound } from "next/navigation";
import Script from "next/script";

interface PrintPageProps {
    params: {
        id: string;
    };
}

export default async function PrintPage({ params }: PrintPageProps) {
    const { id } = params;

    const resume = await prisma.resume.findUnique({
        where: { id },
    });

    if (!resume) {
        return notFound();
    }

    const content = resume.content as any;
    const resumeData = content.resumeData;
    const templateId = content.templateId || "modern-blue";

    const cvData = adaptResumeToCVData(resumeData, templateId);

    return (
        <div className="bg-white min-h-screen">
            <div className="print-container">
                <CVPreview data={cvData} templateId={templateId} />
            </div>

            {/* Auto-trigger print */}
            <Script id="print-trigger" strategy="afterInteractive">
                {`
                    setTimeout(() => {
                        window.print();
                    }, 1000);
                `}
            </Script>
        </div>
    );
}
