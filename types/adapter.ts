import { Resume } from './Resume';
import { CVData } from './cv';

export const adaptResumeToCVData = (resume: Resume, templateId: string = 'modern-blue'): CVData => {
    return {
        id: 'draft',
        title: 'Draft Resume',
        template_id: templateId,
        full_name: `${resume.name.first} ${resume.name.last || ''}`.trim(),
        job_title: resume.tagline || '',
        summary: resume.summary || '',
        contact_info: resume.contacts?.map(c => ({
            type: (c.type as any) || 'other',
            value: c.text
        })) || [],
        experience: resume.experience?.map((e, i) => ({
            id: `exp-${i}`,
            company: e.company,
            role: e.credential,
            startDate: e.dateRange?.start || '',
            endDate: e.dateRange?.end || '',
            current: !e.dateRange?.end,
            description: e.highlights?.join('\n') || '',
            location: e.location
        })) || [],
        education: resume.education?.map((e, i) => ({
            id: `edu-${i}`,
            school: e.institution,
            degree: e.credential,
            field: '', // inferred or combined
            startDate: e.dateRange?.start || '',
            endDate: e.dateRange?.end || '',
            current: !e.dateRange?.end,
            location: e.location,
            description: e.highlights?.join('\n') || ''
        })) || [],
        skills: resume.skills?.flatMap((cat, i) =>
            cat.stack.map((s, j) => ({
                id: `sk-${i}-${j}`,
                name: s,
                level: 'Advanced' // Default
            }))
        ) || [],
        projects: resume.projects?.map((p, i) => ({
            id: `proj-${i}`,
            name: p.name,
            description: p.highlights?.join(' ') || '',
            url: p.url,
            technologies: p.stack
        })) || [],
        certifications: [] // Existing type lacks certifications
    };
};
