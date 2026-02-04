export interface Experience {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
    location?: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    current: boolean;
    location?: string;
}

export interface Skill {
    id: string;
    name: string;
    level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Project {
    id: string;
    name: string;
    description: string;
    url?: string;
    technologies?: string[];
}

export interface Certification {
    id: string;
    name: string;
    issuer: string;
    date: string;
    url?: string;
}

export interface ContactInfo {
    type: 'email' | 'phone' | 'linkedin' | 'github' | 'website' | 'other';
    value: string;
    label?: string; // e.g. "Portfolio"
}

export interface CVData {
    id?: string;
    user_id?: string;
    title: string; // Internal title for the resume
    template_id: string;

    // Personal Info
    full_name: string;
    job_title: string;
    summary: string;
    photo_url?: string;
    contact_info: ContactInfo[];

    // Sections
    experience: Experience[];
    education: Education[];
    skills: Skill[];
    projects: Project[];
    certifications: Certification[];

    // Customization
    primary_color?: string; // allow slight overrides
}

export const sampleCV: CVData = {
    id: 'sample-1',
    title: 'My Professional Resume',
    template_id: 'modern-1',
    full_name: 'Alex Johnson',
    job_title: 'Senior Full Stack Developer',
    summary: 'Passionate and experienced Full Stack Developer with over 6 years of experience building scalable web applications. Proficient in React, Node.js, and Cloud Architecture. Dedicated to writing clean, maintainable code and solving complex user problems.',
    photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    contact_info: [
        { type: 'email', value: 'alex.johnson@example.com' },
        { type: 'phone', value: '+1 (555) 123-4567' },
        { type: 'linkedin', value: 'linkedin.com/in/alexjohnson' },
        { type: 'website', value: 'alexjohnson.dev' }
    ],
    experience: [
        {
            id: 'exp-1',
            company: 'TechFlow Solutions',
            role: 'Senior Software Engineer',
            startDate: '2021-03',
            endDate: '',
            current: true,
            description: 'Leading a team of 5 developers in rebuilding the company core SaaS platform. Improved performance by 40% and reduced technical debt. Implemented CI/CD pipelines and automated testing strategies.',
            location: 'San Francisco, CA'
        },
        {
            id: 'exp-2',
            company: 'Creative Digital Agency',
            role: 'Full Stack Developer',
            startDate: '2018-06',
            endDate: '2021-02',
            current: false,
            description: 'Developed responsive websites and web applications for diverse clients. Collaborated with designers to implement pixel-perfect user interfaces using React and Tailwind CSS.',
            location: 'Austin, TX'
        }
    ],
    education: [
        {
            id: 'edu-1',
            school: 'University of Technology',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2014-09',
            endDate: '2018-05',
            current: false,
            location: 'Boston, MA'
        }
    ],
    skills: [
        { id: 'sk-1', name: 'React', level: 'Expert' },
        { id: 'sk-2', name: 'TypeScript', level: 'Expert' },
        { id: 'sk-3', name: 'Node.js', level: 'Advanced' },
        { id: 'sk-4', name: 'PostgreSQL', level: 'Advanced' },
        { id: 'sk-5', name: 'AWS', level: 'Intermediate' },
        { id: 'sk-6', name: 'Docker', level: 'Intermediate' }
    ],
    projects: [
        {
            id: 'proj-1',
            name: 'E-commerce Dashboard',
            description: 'Real-time analytics dashboard for e-commerce store owners. Built with Next.js, Supabase, and Chart.js.',
            url: 'dashboard-demo.com',
            technologies: ['Next.js', 'Supabase', 'Chart.js']
        },
        {
            id: 'proj-2',
            name: 'TaskMaster App',
            description: 'Collaborative task management application with real-time updates using WebSockets.',
            url: 'taskmaster-demo.com',
            technologies: ['React', 'Node.js', 'Socket.io']
        }
    ],
    certifications: [
        {
            id: 'cert-1',
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: '2022-11'
        }
    ]
};
