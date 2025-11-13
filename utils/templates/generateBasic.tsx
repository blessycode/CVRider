import React from 'react';
import { Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import type { Resume, Education } from '@/types/Resume';

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    fontFamily: "Times-Roman",
    padding: 20
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
  leftBlock: {
    flexDirection: "row",
    flexGrow:1,
    justifyContent: "flex-end"
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
            <Text style={styles.heading}>Education</Text>
            <View style={styles.sectionInformation}>
                <View>
                    <Text style={styles.subHeader}>{education.institution}</Text>
                    <Text>{education.credential}</Text>
                </View>
                <View style={styles.leftBlock}>
                    {education.dateRange && <Text>{education.dateRange.end ? `${education.dateRange.start} - ${education.dateRange.end}` : `${education.dateRange.start}`}</Text>}
                    {education.location && <Text>{education.location}</Text>}
                </View>
            </View>
            {education.highlights && <View>
                {education.highlights.map(highlight => <BasicBullet text={highlight} />)}
            </View>}
        </View>
    );
}

// Create Document Component
const BasicResume: React.FC<{ resume: Resume}> = ( { resume } : { resume : Resume} ) => {
    return (
    <Document>
        <Page size="LETTER" style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{resume.name.first} {resume.name.last}</Text>
            </View>
                {resume.education 
                && resume.education.length > 0 // Might not need this check if map over zero cardinality doesn't render... check later
                && resume.education.map(education => <BasicEducation education={education}/>)}
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