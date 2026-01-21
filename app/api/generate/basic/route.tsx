import { generateBasicResumeStream } from "@/utils/templates/generateBasic";
import { Resume, resumeSchema } from "@/types/Resume";

export async function POST(request: Request) {

    const reqResume: Resume = await request.json();
    try {
        resumeSchema.parse(reqResume)
        
        const pdfStream = await generateBasicResumeStream({resume: reqResume});
        
        const headers = new Headers();
        headers.set("Content-Type", "application/pdf");
        return new Response(pdfStream, {status: 200, statusText: "OK", headers});
    } catch (error) {
        return Response.error() // Put in a pull request while this repo remains proof-of-concept
    }
}