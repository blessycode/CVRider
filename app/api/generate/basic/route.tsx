import { NextResponse } from "next/server";
import { BasicResume } from "@/utils/templates/generateBasic";
import { renderToStream } from '@react-pdf/renderer';

export async function POST(request: Request) { // Convert to post request

    const resumeJSON = await request.json();
    
    const pdf = await renderToStream(<BasicResume resume={ resumeJSON } />); // Get from POST payload

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf")

    return new NextResponse(pdf, {status: 200, statusText: "OK", headers});
}