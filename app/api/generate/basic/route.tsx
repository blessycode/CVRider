import { generateBasicResumeStream } from "@/utils/templates/generateBasic";
import { Resume } from "@/types/Resume";

export async function POST(request: Request) {

    const reqResume: Resume = await request.json();
    
    const pdfStream = await generateBasicResumeStream({resume: reqResume});
    
    const headers = new Headers();
    headers.set("Content-Type", "application/pdf")

    return new Response(pdfStream, {status: 200, statusText: "OK", headers});
}