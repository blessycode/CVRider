"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

/**
 * Downloads the CV as a PDF file.
 * Uses html2canvas to capture the CV preview and jsPDF to create proper A4 PDF.
 * Handles multi-page CVs automatically.
 */
export const downloadPDF = async (fileName: string = "cv"): Promise<void> => {
    const element = document.getElementById("cv-preview-content");

    if (!element) {
        console.error("CV preview element not found");
        throw new Error("CV preview element not found. Please try again.");
    }

    const container = element.parentElement;

    // Store original visibility
    const originalVisibility = container?.style.visibility || "";
    const originalLeft = container?.style.left || "";

    try {
        // Make element visible for capture (but still off-screen)
        if (container) {
            container.style.visibility = "visible";
            container.style.left = "-9999px";
        }

        // Wait for styles to apply
        await new Promise(resolve => setTimeout(resolve, 100));

        console.log("Capturing element:", element.scrollWidth, element.scrollHeight);

        // Capture the element with high quality settings
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: "#ffffff",
            onclone: (clonedDoc) => {
                const clonedElement = clonedDoc.getElementById("cv-preview-content");
                if (clonedElement) {
                    clonedElement.style.visibility = "visible";
                }
            }
        });

        console.log("Canvas created:", canvas.width, canvas.height);

        const imgData = canvas.toDataURL("image/png");

        // Create PDF with A4 dimensions
        const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: "a4"
        });

        // A4 dimensions in mm
        const pdfWidth = pdf.internal.pageSize.getWidth(); // 210
        const pdfHeight = pdf.internal.pageSize.getHeight(); // 297

        // Calculate image dimensions to fit A4 width
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;

        // Add additional pages if content overflows
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pdfHeight;
        }

        // Download the PDF
        pdf.save(`${fileName}.pdf`);

        console.log("PDF saved successfully");
    } catch (error) {
        console.error("PDF generation failed:", error);
        throw error;
    } finally {
        // Restore original visibility
        if (container) {
            container.style.visibility = originalVisibility;
            container.style.left = originalLeft;
        }
    }
};
