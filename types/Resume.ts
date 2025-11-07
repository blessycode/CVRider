type DateRange = {
    start: string,
    end?: string,
} // Refactor to use template literal YYYY-DD-MM

type Highlight = string[];

type Education = {
    credential: string,
    institution: string,
    location?: string,
    dateRange?: DateRange,
    highlights?: Highlight[],
}

type Experience = {
    credential: string,
    company: string,
    location?: string,
    dateRange?: DateRange,
    highlights?: Highlight[],
}

type Project = {
    name: string,
    url?: string
    stack?: string[],
    dateRange?: DateRange,
    highlights?: Highlight,
}

type Skill = {
    category: string,
    stack: string[],
}

export type Resume = {
    name: {
        first: string,
        middle?: string
        last?: string,
    },
    education: Education[],
    experience?: Experience[],
    projects?: Project[],
    skills?: Skill[],
}