import React from 'react';
import { Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import { type Resume, type Education, type Experience, type Project, type Skill } from '@/types/Resume';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    fontFamily: "Times-Roman",
    padding: 20,
    fontSize: 16
  },
  header: {
    margin: 4,
    padding: 4,
    textAlign: "center"
  },
  headerTitle: {
    fontFamily: "Times-Bold",
    fontSize: 32
  },
  heading: {
    width: "100%",
    fontSize: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  bullet: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20
  },
  sectionInformation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subHeader: {
    fontFamily: "Times-Bold"
  },
  italicized: {
    fontFamily: "Times-Italic"
  }
});

const BasicBullet: React.FC<{ text : string }> = ({ text } : { text : string }) => {
    return (
        <View style={styles.bullet}>
            <Text>{"\u2022 "}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const BasicEducation: React.FC<{ education : Education }> = ({ education } : { education : Education}) => {    
    return (
        <View>
            <View style={styles.sectionInformation}>
                <View>
                    <Text style={styles.subHeader}>{education.institution}</Text>
                    <Text style={styles.italicized}>{education.credential}</Text>
                </View>
                <View>
                    {education.dateRange && <Text>{education.dateRange.end ? `${education.dateRange.start} - ${education.dateRange.end}` : `${education.dateRange.start} - Present`}</Text>}
                    {education.location && <Text style={styles.italicized}>{education.location}</Text>}
                </View>
            </View>
            {education.highlights && <View>
                {education.highlights.map(highlight => <BasicBullet text={highlight} />)}
            </View>}
        </View>
    );
}

const BasicExperience: React.FC<{ experience: Experience }> = ({ experience } : { experience : Experience }) => {
    return (
        <View>
            <View style={styles.sectionInformation}>
                <View>
                    <Text style={styles.subHeader}>{experience.credential}</Text>
                    <Text style={styles.italicized}>{experience.company}</Text>
                </View>
                <View>
                    {experience.dateRange && <Text>{experience.dateRange.end ? `${experience.dateRange.start} - ${experience.dateRange.end}` : `${experience.dateRange.start} - Present`}</Text>}
                    {experience.location && <Text style={styles.italicized}>{experience.location}</Text>}
                </View>
            </View>
            {experience.highlights && <View>
                {experience.highlights.map(highlight => <BasicBullet text={highlight} />)}
            </View>}
        </View>
    );
}

const BasicProject: React.FC<{ project : Project }> = ({ project } : { project : Project }) => {
    return (
        <View>
            {/* ... */}
        </View>
    );
}

const BasicSkill: React.FC<{ skill : Skill }> = ({ skill } : { skill : Skill }) => {
    return (
        <View>
            {/* ... */}
        </View>
    );
}

// Create Document Component
const BasicResume: React.FC<{ resume: Resume }> = ( { resume } : { resume : Resume } ) => {
    return (
    <Document>
        <Page size="LETTER" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{resume.name.first} {resume.name.last}</Text>
            </View>
                {resume.education 
                && resume.education.length > 0 // Might not need this check if map over zero cardinality doesn't render... check later
                && <View>
                        <Text style={styles.heading}>Education</Text>  
                        {resume.education.map(education => <BasicEducation education={education}/>)}
                </View>}
            <View >
                {resume.experience
                && resume.experience.length > 0
                && <View>
                    <Text style={styles.heading}>Experience</Text>
                    {resume.experience.map(experience  => <BasicExperience experience={experience}/>)}
                </View>}
            </View>
            <View >
                <Text>Projects</Text>
            </View>
            <View >
                <Text>Skills</Text>
            </View>
        </Page>
    </Document>
  );
}

export const generateBasicResumeStream = async ({ resume } : { resume : Resume}) => {
    return await renderToStream(<BasicResume resume={ resume } />)
};