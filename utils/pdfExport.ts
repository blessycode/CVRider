
export const exportToPDF = async (elementId: string, filename: string = 'resume.pdf') => {
    if (typeof window === 'undefined') return;

    // Dynamic import strictly for client-side
    // @ts-ignore
    const html2pdf = (await import('html2pdf.js')).default;

    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id ${elementId} not found`);
        return;
    }

    const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
            scale: 3, // Increased for crispness
            useCORS: true,
            logging: false,
            letterRendering: true,
            allowTaint: false,
            backgroundColor: '#ffffff',
            onclone: (clonedDoc: Document) => {
                const clonedElement = clonedDoc.getElementById(elementId);
                if (!clonedElement) return;

                // Ensure the background color is preserved on the root
                const sourceElement = document.getElementById(elementId);
                if (!sourceElement) return;

                const styleTags = clonedDoc.querySelectorAll('style, link[rel="stylesheet"]');

                // Set explicit dimensions for A4
                clonedElement.style.width = '210mm';
                clonedElement.style.minHeight = '297mm';
                clonedElement.style.height = 'auto'; // Allow it to grow
                clonedElement.style.overflow = 'visible';

                // Force all background colors to be printable
                const allElements = clonedElement.querySelectorAll('*');
                allElements.forEach((el) => {
                    const htmlEl = el as HTMLElement;
                    const style = window.getComputedStyle(el);

                    // html2canvas sometimes misses background colors if they use modern syntax
                    if (style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent') {
                        htmlEl.style.backgroundColor = style.backgroundColor;
                        (htmlEl.style as any).webkitPrintColorAdjust = 'exact';
                        (htmlEl.style as any).printColorAdjust = 'exact';
                    }

                    if (style.color) {
                        htmlEl.style.color = style.color;
                    }

                    if (style.borderColor && style.borderStyle !== 'none') {
                        htmlEl.style.borderColor = style.borderColor;
                    }
                });
            }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'], avoid: 'section, .avoid-break' }
    };

    try {
        await html2pdf().set(opt).from(element).save();
    } catch (error) {
        console.error("PDF Export failed:", error);
        alert("We encountered an error generating your PDF. \n\nPRO TIP: You can always press 'Ctrl+P' (Cmd+P) and select 'Save as PDF' for a perfect result.");
    }
};
