"use client";

import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";

/**
 * Super-Robust PDF Downloader using html-to-image + jsPDF
 * This version uses pixelRatio for scaling, which is much more reliable
 * than CSS transforms and avoids the "white box" layout artifacts.
 */
export const downloadPDF = async (fileName: string = "cv"): Promise<void> => {
    const element = document.getElementById("cv-pdf-target");

    if (!element) {
        console.error("Target element not found: cv-pdf-target");
        throw new Error("CV content not found. Please try again.");
    }

    try {
        console.log("Starting Capture with html-to-image...");

        // Capture as PNG with high pixel ratio for retina-quality text
        const dataUrl = await htmlToImage.toPng(element, {
            pixelRatio: 2, // High resolution (2x)
            backgroundColor: '#ffffff', // Force white background
            cacheBust: true,
            style: {
                // Ensure the container has no weird artifacts during capture
                outline: 'none',
                border: 'none',
                boxShadow: 'none',
            }
        });

        console.log("Image captured. Building PDF...");

        // Create PDF - A4 Standard
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = 210;
        const pdfHeight = 297;

        // Calculate dimensions to fit the page width
        // We use the element's client dimensions because pixelRatio handles the scaling
        const imgWidth = pdfWidth;
        const imgHeight = (element.scrollHeight * pdfWidth) / element.scrollWidth;

        let heightLeft = imgHeight;
        let position = 0;

        // Add first page
        pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pdfHeight;

        // Multi-page support
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight, undefined, 'FAST');
            heightLeft -= pdfHeight;
        }

        pdf.save(`${fileName}.pdf`);
        console.log("PDF download complete.");

    } catch (error) {
        console.error("PDF Capture failed:", error);
        throw error;
    }
};
