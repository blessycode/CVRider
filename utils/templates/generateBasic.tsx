import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import type { Resume } from '@/types/Resume';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const BasicResume: React.FC<{ resume: Resume}> = ( { resume } : { resume : Resume} ) => {
  return (
    <Document>
        <Page size="LETTER" style={styles.page}>
        <View style={styles.section}>
            <Text>{resume.name.first}</Text>
        </View>
        <View style={styles.section}>
            <Text>Section #2</Text>
        </View>
        </Page>
    </Document>
  );
}
