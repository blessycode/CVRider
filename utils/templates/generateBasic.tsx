import React from 'react';
import { Page, Text, View, Document, StyleSheet, renderToBuffer, Link } from '@react-pdf/renderer';
import { type Resume, type Education, type Experience, type Project, type Skill, type Contact } from '@/types/Resume';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: "Times-Roman",
        paddingTop: 28,
        paddingBottom: 28,
        paddingHorizontal: 34,
        fontSize: 11,
        lineHeight: 1.25
    },
    header: {
        textAlign: "center",
        marginBottom: 8
    },
    headerTitle: {
        fontFamily: "Times-Bold",
        fontSize: 22,
        lineHeight: 1.1
    },
    heading: {
        width: "100%",
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        marginTop: 10,
        marginBottom: 6,
        paddingBottom: 2,
        fontFamily: "Times-Bold"
    },
    bullet: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 0,
        marginBottom: 2
    },
    bulletText: {
        flex: 1
    },
    sectionInfoLine: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 8
    },
    leftCol: {
        flexGrow: 1,
        flexShrink: 1,
        minWidth: 0
    },
    rightCol: {
        flexGrow: 0,
        flexShrink: 0,
        textAlign: "right"
    },
    subHeader: {
        fontFamily: "Times-Bold"
    },
    italicized: {
        fontFamily: "Times-Italic"
    },
    projectLeft: {
        display: "flex",
        flexDirection: "row"
    },
    projectStack: {
        marginLeft: 2,
        fontFamily: "Times-Italic"
    },
    skillRow: {
        display: "flex",
        flexDirection: "row"
    },
    skillCategory: {
        fontFamily: "Times-Bold"
    },
    skillStack: {
        marginLeft: 2
    }
});

const BasicBullet: React.FC<{ text: string }> = ({ text }: { text: string }) => {
    return (
        <View style={styles.bullet}>
            <Text>{"\u2022 "}</Text>
            <Text style={styles.bulletText}>{text}</Text>
        </View>
    )
}

const BasicContact: React.FC<{ contacts: Contact[] }> = ({ contacts }: { contacts: Contact[] }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", rowGap: 2 }}>
            {contacts.map((contact, index) => {
                return <View key={index} style={{ display: "flex", flexDirection: "row" }}>
                    {contact.url ? <Text><Link href={contact.url}>{contact.text}</Link></Text> : <Text>{contact.text}</Text>}
                    {index < contacts.length - 1 && <Text style={{ marginLeft: 2, marginRight: 2 }}>|</Text>}
                </View>
            })}
        </View>
    )
}

const BasicEducation: React.FC<{ education: Education }> = ({ education }: { education: Education }) => {
    return (
        <View style={{ marginBottom: 6 }}>
            <View style={styles.sectionInfoLine}>
                <View style={styles.leftCol}>
                    <Text style={styles.subHeader}>{education.institution}</Text>
                </View>
                <View style={styles.rightCol}>
                    {education.dateRange && <Text>{education.dateRange.end ? `${education.dateRange.start} - ${education.dateRange.end}` : `${education.dateRange.start} - Present`}</Text>}
                </View>
            </View>
            <View style={styles.sectionInfoLine}>
                <View style={styles.leftCol}>
                    <Text style={styles.italicized}>{education.credential}</Text>
                </View>
                <View style={styles.rightCol}>
                    {education.location && <Text style={styles.italicized}>{education.location}</Text>}
                </View>
            </View>
            {education.highlights && <View>
                {education.highlights.map((highlight, index) => <BasicBullet key={index} text={highlight} />)}
            </View>}
        </View>
    );
}

const BasicExperience: React.FC<{ experience: Experience }> = ({ experience }: { experience: Experience }) => {
    return (
        <View style={{ marginBottom: 6 }}>
            <View style={styles.sectionInfoLine}>
                <View style={styles.leftCol}>
                    <Text style={styles.subHeader}>{experience.credential}</Text>
                </View>
                <View style={styles.rightCol}>
                    {experience.dateRange && <Text>{experience.dateRange.end ? `${experience.dateRange.start} - ${experience.dateRange.end}` : `${experience.dateRange.start} - Present`}</Text>}
                </View>
            </View>
            <View style={styles.sectionInfoLine}>
                <View style={styles.leftCol}>
                    <Text style={styles.italicized}>{experience.company}</Text>
                </View>
                <View style={styles.rightCol}>
                    {experience.location && <Text style={styles.italicized}>{experience.location}</Text>}
                </View>
            </View>
            {experience.highlights && <View>
                {experience.highlights.map((highlight, index) => <BasicBullet key={index} text={highlight} />)}
            </View>}
            {experience.references && experience.references.length > 0 && <View style={{ marginTop: 4 }}>
                <Text style={[styles.subHeader, { fontSize: 10 }]}>References:</Text>
                {experience.references.map((ref, index) => <BasicBullet key={index} text={ref} />)}
            </View>}
        </View>
    );
}

const BasicProject: React.FC<{ project: Project }> = ({ project }: { project: Project }) => {
    return (
        <View style={{ marginBottom: 6 }}>
            <View style={styles.sectionInfoLine}>
                <View style={[styles.leftCol, styles.projectLeft]}>
                    <Text style={styles.subHeader}>{project.name}</Text>
                    {project.stack
                        && project.stack.length > 0
                        && <Text style={styles.projectStack}>{" | "}{project.stack.join(", ")}</Text>}
                </View>
                <View style={styles.rightCol}>
                    {project.dateRange && <Text>{project.dateRange.end ? `${project.dateRange.start} - ${project.dateRange.end}` : `${project.dateRange.start} - Present`}</Text>}
                </View>
            </View>
            {project.highlights && <View>
                {project.highlights.map((highlight, index) => <BasicBullet key={index} text={highlight} />)}
            </View>}
        </View>
    );
}

const BasicSkill: React.FC<{ skill: Skill }> = ({ skill }: { skill: Skill }) => {
    return (
        <View style={styles.skillRow}>
            <Text style={styles.skillCategory}>{skill.category}:</Text>
            <Text style={styles.skillStack}>{skill.stack.join(", ")}</Text>
        </View >
    );
}

const BasicResume: React.FC<{ resume: Resume }> = ({ resume }: { resume: Resume }) => {
    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{resume.name.first} {resume.name.last}</Text>
                    {resume.tagline && <Text style={{ fontSize: 12, marginTop: 2 }}>{resume.tagline}</Text>}
                </View>
                {resume.contacts && <View>
                    <BasicContact contacts={resume.contacts} />
                </View>}

                {resume.summary && <View style={{ marginTop: 10, marginBottom: 4 }}>
                    <Text style={styles.heading}>Professional Summary</Text>
                    <Text style={{ lineHeight: 1.25 }}>{resume.summary}</Text>
                </View>}
                {resume.education
                    && resume.education.length > 0 // Might not need this check if map over zero cardinality doesn't render... check later
                    && <View>
                        <Text style={styles.heading}>Education</Text>
                        {resume.education.map((education, index) => <BasicEducation key={index} education={education} />)}
                    </View>}
                {resume.experience
                    && resume.experience.length > 0
                    && <View>
                        <Text style={styles.heading}>Experience</Text>
                        {resume.experience.map((experience, index) => <BasicExperience key={index} experience={experience} />)}
                    </View>}
                {resume.projects
                    && resume.projects.length > 0
                    && <View>
                        <Text style={styles.heading}>Projects</Text>
                        {resume.projects.map((project, index) => <BasicProject key={index} project={project} />)}
                    </View>}
                {resume.skills
                    && resume.skills.length > 0
                    && <View>
                        <Text style={styles.heading}>Skills</Text>
                        {resume.skills.map((skill, index) => <BasicSkill key={index} skill={skill} />)}
                    </View>}
            </Page>
        </Document>
    );
}

export const generateBasicResumeStream = async ({ resume }: { resume: Resume }) => {
    // Kept for backwards compatibility in case other callers rely on this name;
    // prefer generateBasicResumeBuffer for Next.js route handlers.
    return await renderToBuffer(<BasicResume resume={resume} />)
};

export const generateBasicResumeBuffer = async ({ resume }: { resume: Resume }) => {
    return await renderToBuffer(<BasicResume resume={resume} />)
};