import z from "zod";

// -- TypeScript type definitions
export type DateRange = {
    start: string,
    end?: string,
} // Refactor to use template literal mm-dd-yyyy

export type Education = {
    credential: string,
    institution: string,
    dateRange?: DateRange,
    location?: string,
    highlights?: [string, ...string[]],
}

export type Experience = {
    credential: string,
    company: string,
    dateRange?: DateRange,
    location?: string,
    highlights?: [string, ...string[]],
}

export type Project = {
    name: string,
    url?: string
    stack?: string[],
    dateRange?: DateRange,
    highlights?: [string, ...string[]],
}

export type Skill = {
    category: string,
    stack: [string, ...string[]],
}

export type Resume = {
    name: {
        first: string,
        middle?: string
        last?: string,
    },
    education?: [Education, ...Education[]],
    experience?: [Experience, ...Experience[]],
    projects?: [Project, ...Project[]],
    skills?: [Skill, ...Skill[]],
}

// -- Zod Schema definitions
export const dateRangeSchema = z.object({
    start: z.string(),
    end: z.string(),
}); // Refactor to enforce mm-dd-yyyy

export const educationSchema = z.object({
    credential: z.string(),
    institution: z.string(),
    dateRange: dateRangeSchema.optional(),
    location: z.string().optional(),
    highlights: z.array(z.string()).min(1).optional(),
});

export const experienceSchema = z.object({
    credential: z.string(),
    company: z.string(),
    dateRange: dateRangeSchema.optional(),
    location: z.string().optional(),
    highlights: z.array(z.string()).min(1).optional(),
});

export const projectSchema = z.object({
    name: z.string(),
    url: z.string().optional(),
    stack: z.array(z.string()).min(1).optional(),
    dateRange: dateRangeSchema.optional(),
    highlights: z.array(z.string()).min(1).optional(),
});

export const skillSchema = z.object({
    category: z.string(),
    stack: z.array(z.string()),
});

export const resumeSchema = z.object({
    name: z.object({
        first: z.string(),
        middle: z.string().optional(),
        last: z.string().optional(),
    }),
    education: z.array(educationSchema).min(1).optional(),
    experience: z.array(experienceSchema).min(1).optional(),
    projects: z.array(projectSchema).min(1).optional(),
    skills: z.array(skillSchema).min(1).optional(),
});