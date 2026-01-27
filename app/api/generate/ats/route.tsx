import { generateATSResumeBuffer } from "@/utils/templates/generateATS";
import { Resume, resumeSchema } from "@/types/Resume";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const parseResult = resumeSchema.safeParse(body);

        if (!parseResult.success) {
            console.error("Validation Error:", JSON.stringify(parseResult.error.format(), null, 2));
            return new Response(JSON.stringify({
                error: "Invalid resume data",
                details: parseResult.error.issues.map((e) => `${e.path.join('.')}: ${e.message}`).join(", ")
            }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }

        const reqResume: Resume = parseResult.data;
        const pdfBuffer = await generateATSResumeBuffer({ resume: reqResume });
        const pdfBytes = new Uint8Array(pdfBuffer);

        const headers = new Headers();
        headers.set("Content-Type", "application/pdf");
        return new Response(pdfBytes, { status: 200, statusText: "OK", headers });
    } catch (error) {
        console.error("Generation Error:", error);
        return new Response(JSON.stringify({
            error: "Failed to generate PDF",
            details: error instanceof Error ? error.message : String(error)
        }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
