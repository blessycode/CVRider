export type DateRange = {
    start: string,
    end?: string,
} // Refactor to use template literal YYYY-DD-MM

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
    location?: string,
    dateRange?: DateRange,
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
    education: [Education, ...Education[]],
    experience?: [Experience, ...Experience[]],
    projects?: [Project, ...Project[]],
    skills?: [Skill, ...Skill[]],
}