import React from 'react';
import { Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import type { Resume, Education } from '@/types/Resume';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    fontFamily: "Times-Roman",
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
  bullet: {
    flexDirection: 'row',
    marginRight: 20
  }
});

const BasicBullet: React.FC<{text : string}> = ({ text } : { text : string}) => {
    return (
        <View style={styles.bullet}>
            <Text>{"\u2022"}</Text>
            <Text>{text}</Text>
        </View>
    )
}

const BasicEducation: React.FC<{education : Education}> = ({ education } : { education : Education}) => {    
    return (
        <View>
            <Text>Education</Text>
            <Text>{education.credential}</Text>
            <Text>{education.institution}</Text>
            {education.dateRange && <Text>TBD...</Text>}
            {education.location && <Text>{education.location}</Text>}
            {education.highlights && <View>
                {education.highlights.map(highlight => <BasicBullet text={highlight} />)}
            </View>}
        </View>
    );
}

// Create Document Component
const BasicResume: React.FC<{ resume: Resume}> = ( { resume } : { resume : Resume} ) => {
    const hasEducation = resume.education && resume.education.length > 0;
  
    return (
    <Document>
        <Page size="LETTER" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{resume.name.first} {resume.name.last}</Text>
            </View>
                {hasEducation && resume.education.map(education => <BasicEducation education={education}/>)}
            <View >
                <Text>Experience</Text>
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