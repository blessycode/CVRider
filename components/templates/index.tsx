import { ModernSidebar } from './designs/ModernSidebar';
import { MinimalSingleColumn } from './designs/MinimalSingleColumn';
import { ProfessionalClassic } from './designs/ProfessionalClassic';
import { CreativeBold } from './designs/CreativeBold';
import { StandardEuropean, SwissTypography, DeveloperTerminal, ZenSerif } from './designs/InternationalSeries';
import { ProfessionalAnalyst } from './designs/ProfessionalAnalyst';
import { CorporateSidebar } from './designs/CorporateSidebar';
import { ClassicUniversal } from './designs/ClassicUniversal';
import { CVData } from '@/types/cv';

export interface TemplateConfig {
    id: string;
    name: string;
    description: string;
    component: React.FC<any>;
    props: {
        color?: string;
        font?: string;
    };
    thumbnailClass: string; // CSS class for a preview div color
}

export const TEMPLATES: TemplateConfig[] = [
    // INTERNATIONAL SERIES (New)
    {
        id: 'international-european',
        name: 'Standard European',
        description: 'Highly structured layout following global professional standards.',
        component: StandardEuropean,
        props: { font: 'sans' },
        thumbnailClass: 'bg-blue-50 border-l-4 border-blue-600'
    },
    {
        id: 'international-swiss',
        name: 'Swiss Modernist',
        description: 'Bold typography and high-contrast grid-based layout.',
        component: SwissTypography,
        props: { font: 'sans' },
        thumbnailClass: 'bg-white border-t-[10px] border-black'
    },
    {
        id: 'international-terminal',
        name: 'Tech Terminal',
        description: 'A dedicated monospace dark mode for software engineers.',
        component: DeveloperTerminal,
        props: { font: 'mono' },
        thumbnailClass: 'bg-[#0f172a]'
    },
    {
        id: 'international-zen',
        name: 'Zen Minimalist',
        description: 'Calm, airy, and centered design for creative clarity.',
        component: ZenSerif,
        props: { font: 'serif' },
        thumbnailClass: 'bg-[#fbfaf8]'
    },

    // MODERN SERIES (Sidebar)
    {
        id: 'modern-blue',
        // ... (the rest of the templates)
        name: 'Modern Executive',
        description: 'Deep navy professional sidebar for a commanding presence.',
        component: ModernSidebar,
        props: { color: 'blue', font: 'sans' },
        thumbnailClass: 'bg-[#1a365d]'
    },
    {
        id: 'modern-slate',
        name: 'Slate Precision',
        description: 'Sleek neutral tones for tech and engineering roles.',
        component: ModernSidebar,
        props: { color: 'slate', font: 'sans' },
        thumbnailClass: 'bg-[#334155]'
    },
    {
        id: 'modern-emerald',
        name: 'Emerald Growth',
        description: 'Fresh organic greens for management and creative leadership.',
        component: ModernSidebar,
        props: { color: 'emerald', font: 'serif' },
        thumbnailClass: 'bg-[#064e3b]'
    },

    // MINIMAL SERIES (Clean)
    {
        id: 'minimal-sans',
        name: 'Minimal Pure',
        description: 'Focus on content with high-end sans-serif typography.',
        component: MinimalSingleColumn,
        props: { font: 'sans' },
        thumbnailClass: 'bg-white border border-gray-200'
    },
    {
        id: 'minimal-serif',
        name: 'Elegant Typeface',
        description: 'Sophisticated serif layout for law, finance, or academia.',
        component: MinimalSingleColumn,
        props: { font: 'serif' },
        thumbnailClass: 'bg-gray-50 border border-gray-100'
    },
    {
        id: 'minimal-mono',
        name: 'Developer Mono',
        description: 'Technical aesthetic using clean monospace fonts.',
        component: MinimalSingleColumn,
        props: { font: 'mono' },
        thumbnailClass: 'bg-gray-200'
    },

    // PROFESSIONAL SERIES (Classic)
    {
        id: 'professional-executive',
        name: 'Classic Boardroom',
        description: 'The standard for senior roles and traditional corporate.',
        component: ProfessionalClassic,
        props: { color: 'gray', font: 'serif' },
        thumbnailClass: 'bg-gray-800'
    },
    {
        id: 'professional-gold',
        name: 'Prestige Gold',
        description: 'Premium accents for high-stakes leadership positions.',
        component: ProfessionalClassic,
        props: { color: 'gold', font: 'serif' },
        thumbnailClass: 'bg-amber-700'
    },
    {
        id: 'professional-blue',
        name: 'Corporate Blue',
        description: 'Trusted corporate layout with deep indigo accents.',
        component: ProfessionalClassic,
        props: { color: 'blue', font: 'sans' },
        thumbnailClass: 'bg-blue-900'
    },

    // CREATIVE SERIES (Bold)
    {
        id: 'creative-gradient',
        name: 'Vibrant Portfolio',
        description: 'Impactful gradients for designers and innovators.',
        component: CreativeBold,
        props: { color: 'purple', font: 'sans' },
        thumbnailClass: 'bg-gradient-to-br from-purple-500 to-indigo-600'
    },
    {
        id: 'creative-teal',
        name: 'Modern Startup',
        description: 'Bold teal energy for the modern tech landscape.',
        component: CreativeBold,
        props: { color: 'teal', font: 'sans' },
        thumbnailClass: 'bg-teal-500'
    },
    {
        id: 'creative-black',
        name: 'High Contrast',
        description: 'Bold black and white statement for maximum impact.',
        component: CreativeBold,
        props: { color: 'black', font: 'sans' },
        thumbnailClass: 'bg-black'
    },

    // ANALYST SERIES (ATS-Optimized)
    {
        id: 'analyst-professional',
        name: 'Professional Analyst',
        description: 'Single-column ATS-friendly layout with grouped skills for data and analytics roles.',
        component: ProfessionalAnalyst,
        props: { font: 'sans' },
        thumbnailClass: 'bg-white border border-gray-300'
    },
    {
        id: 'corporate-modern',
        name: 'Corporate Executive',
        description: 'Modern split-column design with a bold high-contrast header.',
        component: CorporateSidebar,
        props: { font: 'sans' },
        thumbnailClass: 'bg-gray-900 border-t-[20px] border-gray-900'
    },
    {
        id: 'classic-centered',
        name: 'The Universal Classic',
        description: 'A timeless, clean single-column design suitable for all industries.',
        component: ClassicUniversal,
        props: { font: 'serif' },
        thumbnailClass: 'bg-white border-b-4 border-gray-900'
    },
];

export const getTemplate = (id: string) => {
    return TEMPLATES.find(t => t.id === id) || TEMPLATES[0];
};

export const CVPreview: React.FC<{ data: CVData; templateId: string; scale?: number }> = ({
    data,
    templateId,
    scale = 1
}) => {
    const template = getTemplate(templateId);
    const TemplateComponent = template.component;

    return (
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
            <div id="cv-preview-content" className="w-full min-h-[297mm] shadow-2xl bg-white overflow-hidden text-left origin-top">
                <TemplateComponent data={data} {...template.props} />
            </div>
        </div>
    );
};
