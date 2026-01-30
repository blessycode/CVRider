"use client";

import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

/**
 * Super-Robust PDF Downloader using html-to-image + jsPDF
 */
export const downloadPDF = async (fileName: string = "cv"): Promise<void> => {
    const element = document.getElementById("cv-pdf-target");

    if (!element) {
        console.error("Target element not found: cv-pdf-target");
        throw new Error("CV content not found. Please try again.");
    }

    try {
        console.log("Starting Capture with html-to-image...");

        // 1. Remove focus artifacts from the capture
        if (typeof document !== 'undefined' && document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        // 2. Clear any selection
        if (typeof window !== 'undefined' && window.getSelection) {
            window.getSelection()?.removeAllRanges();
        }

        // Wait for rendering to stabilize
        await new Promise(resolve => setTimeout(resolve, 200));

        // 3. Capture DOM to high-quality Image
        const dataUrl = await htmlToImage.toPng(element, {
            pixelRatio: 2.5, // Even higher resolution for ultra-sharp text
            backgroundColor: '#ffffff',
            cacheBust: true,
            style: {
                // Force removal of all outlines, shadows, and borders that cause artifacts
                outline: 'none !important',
                border: 'none !important',
                boxShadow: 'none !important',
                userSelect: 'none !important',
                webkitUserSelect: 'none !important',
                // Reset common causes of "white boxes"
                webkitFontSmoothing: 'antialiased',
                mozOsxFontSmoothing: 'grayscale',
            } as any
        });

        console.log("Image captured. Building PDF Document...");

        // 4. Create PDF Document (A4 size)
        const pdf = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: "a4",
            compress: true
        });

        const pdfWidth = 210;
        const pdfHeight = 297;

        // Calculate aspect ratio to fit the page
        const imgWidth = pdfWidth;
        const imgHeight = (element.scrollHeight * pdfWidth) / element.scrollWidth;

        let heightLeft = imgHeight;
        let position = 0;

        // 5. Add generated image to PDF pages
        pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;

        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= pdfHeight;
        }

        // 6. Download file
        pdf.save(`${fileName}.pdf`);
        console.log("PDF generation success.");

    } catch (error) {
        console.error("PDF Capture failure:", error);
        alert("We encountered an issue while generating the high-quality PDF. Please try one more time.");
        throw error;
    }
};
