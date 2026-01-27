import React from 'react';
import { Page, Text, View, Document, StyleSheet, renderToBuffer, Link } from '@react-pdf/renderer';
import { type Resume, type Education, type Experience, type Project, type Skill, type Contact } from '@/types/Resume';

// Create styles
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFFFFF',
        fontFamily: "Helvetica",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 40,
        fontSize: 10,
        lineHeight: 1.3,
        color: '#000000',
    },
    section: {
        marginBottom: 8,
    },
    name: {
        fontSize: 22,
        fontFamily: "Helvetica-Bold",
        textTransform: "uppercase",
        marginBottom: 8,
        textAlign: "center",
    },
    tagline: {
        fontSize: 12,
        fontFamily: "Helvetica-Bold",
        marginBottom: 4,
        textAlign: "center",
    },
    contactRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 12,
        gap: 6,
        justifyContent: "center",
    },
    heading: {
        fontSize: 11,
        fontFamily: "Helvetica-Bold",
        textTransform: "uppercase",
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        marginTop: 6,
        marginBottom: 4,
        paddingBottom: 1,
    },
    subHeading: {
        fontFamily: "Helvetica-Bold",
        fontSize: 10,
    },
    summary: {
        marginBottom: 4,
    },
    educationItem: {
        marginBottom: 6,
    },
    experienceItem: {
        marginBottom: 6,
    },
    projectItem: {
        marginBottom: 6,
    },
    skillCategory: {
        fontFamily: "Helvetica-Bold",
        marginRight: 4,
    },
    skillRow: {
        flexDirection: "row",
        marginBottom: 2,
    },
    bulletPoint: {
        flexDirection: "row",
        marginLeft: 12,
        marginBottom: 1,
    },
    bullet: {
        width: 10,
    },
    bulletText: {
        flex: 1,
    },
    itemHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 1,
    },
    date: {
        fontFamily: "Helvetica-Bold",
    }
});

const ATSBullet: React.FC<{ text: string }> = ({ text }) => (
    <View style={styles.bulletPoint}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.bulletText}>{text}</Text>
    </View>
);

const ATSResume: React.FC<{ resume: Resume }> = ({ resume }) => {
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                {/* 1. Name */}
                <Text style={styles.name}>{resume.name.first} {resume.name.last}</Text>

                {/* 2. Title / Tagline */}
                {resume.tagline && <Text style={styles.tagline}>{resume.tagline}</Text>}

                {/* 3. Contact Details */}
                {resume.contacts && resume.contacts.length > 0 && (
                    <View style={styles.contactRow}>
                        {resume.contacts.map((contact, index) => (
                            <React.Fragment key={index}>
                                {contact.url ? (
                                    <Link href={contact.url} style={{ color: '#000', textDecoration: 'none' }}>
                                        <Text>{contact.text}</Text>
                                    </Link>
                                ) : (
                                    <Text>{contact.text}</Text>
                                )}
                                {resume.contacts && index < resume.contacts.length - 1 && <Text> • </Text>}
                            </React.Fragment>
                        ))}
                    </View>
                )}

                {/* 4. Professional Summary */}
                {resume.summary && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>Professional Summary</Text>
                        <Text style={styles.summary}>{resume.summary}</Text>
                    </View>
                )}

                {/* 5. Technical Skills */}
                {resume.skills && resume.skills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>Technical Skills</Text>
                        {resume.skills.map((skill, index) => (
                            <View key={index} style={styles.skillRow}>
                                <Text style={styles.skillCategory}>{skill.category}:</Text>
                                <Text>{skill.stack.join(", ")}</Text>
                            </View>
                        ))}
                    </View>
                )}

                {/* 6. Education */}
                {resume.education && resume.education.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>Education</Text>
                        {resume.education.map((edu, index) => (
                            <View key={index} style={styles.educationItem}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.subHeading}>{edu.institution}</Text>
                                    {edu.dateRange && (
                                        <Text style={styles.date}>
                                            {edu.dateRange.start} – {edu.dateRange.end || 'Present'}
                                        </Text>
                                    )}
                                </View>
                                <Text>{edu.credential}</Text>
                                {edu.highlights && edu.highlights.map((h, i) => (
                                    <ATSBullet key={i} text={h} />
                                ))}
                            </View>
                        ))}
                    </View>
                )}

                {/* Work Experience */}
                {resume.experience && resume.experience.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>Work Experience</Text>
                        {resume.experience.map((exp, index) => (
                            <View key={index} style={styles.experienceItem}>
                                <View style={styles.itemHeader}>
                                    <Text style={styles.subHeading}>{exp.company}</Text>
                                    {exp.dateRange && (
                                        <Text style={styles.date}>
                                            {exp.dateRange.start} – {exp.dateRange.end || 'Present'}
                                        </Text>
                                    )}
                                </View>
                                <Text>{exp.credential}</Text>
                                {exp.highlights && exp.highlights.map((h, i) => (
                                    <ATSBullet key={i} text={h} />
                                ))}
                                {exp.references && exp.references.length > 0 && (
                                    <View style={{ marginTop: 2 }}>
                                        <Text style={[styles.subHeading, { fontSize: 9 }]}>References:</Text>
                                        {exp.references.map((r, i) => (
                                            <ATSBullet key={i} text={r} />
                                        ))}
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                )}

                {/* 7. Project Experience */}
                {resume.projects && resume.projects.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>Project Experience</Text>
                        {resume.projects.map((project, index) => (
                            <View key={index} style={styles.projectItem}>
                                <View style={styles.itemHeader}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.subHeading}>{project.name}</Text>
                                        {project.stack && project.stack.length > 0 && (
                                            <Text> | {project.stack.join(", ")}</Text>
                                        )}
                                    </View>
                                    {project.dateRange && (
                                        <Text style={styles.date}>
                                            {project.dateRange.start} – {project.dateRange.end || 'Present'}
                                        </Text>
                                    )}
                                </View>
                                {project.highlights && project.highlights.map((h, i) => (
                                    <ATSBullet key={i} text={h} />
                                ))}
                            </View>
                        ))}
                    </View>
                )}

                {/* 8. Soft Skills */}
                {resume.softSkills && resume.softSkills.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>Soft Skills</Text>
                        <Text>{resume.softSkills.join(" • ")}</Text>
                    </View>
                )}

                {/* 9. References */}
                {resume.references && resume.references.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.heading}>References</Text>
                        {resume.references.map((ref, index) => (
                            <Text key={index}>{ref}</Text>
                        ))}
                    </View>
                )}
            </Page>
        </Document>
    );
};

export const generateATSResumeBuffer = async ({ resume }: { resume: Resume }) => {
    return await renderToBuffer(<ATSResume resume={resume} />);
};
