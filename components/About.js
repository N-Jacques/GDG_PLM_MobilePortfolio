import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function About() {
  // Helper function to handle opening links
  function openProject(url) {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  }

  return (
    <View style={styles.container}>
      {/* 1. SKILLS SECTION */}
      <View style={styles.section}>
        <Text style={styles.centeredTitle}>Skills</Text>
        
        <View style={styles.skillsRow}>
          {/* Programming Column */}
          <View style={styles.column}>
            <Text style={styles.columnHeader}>Programming</Text>
            <Text>• JavaScript</Text>
            <Text>• React Native</Text>
            <Text>• HTML/CSS</Text>
            <Text>• Python</Text>
          </View>

          {/* Technical Column */}
          <View style={styles.column}>
            <Text style={styles.columnHeader}>Technical</Text>
            <Text>• Git/GitHub/Bitbucket</Text>
            <Text>• Expo Snack</Text>
            <Text>• Databases</Text>
          </View>
        </View>
      </View>

      {/*HOBBIES SECTION */}
      <View style={styles.section}>
        <Text style={styles.centeredTitle}>Hobbies</Text>
        <Text style={styles.bulletItem}>Competitive Gaming</Text>
        <Text style={styles.bulletItem}>Photography</Text>
        <Text style={styles.bulletItem}>Reading Books</Text>
        <Text style={styles.bulletItem}>Biking</Text>
      </View>

      {/* 3. PROJECTS SECTION */}
      <View style={styles.section}>
        <Text style={styles.centeredTitle}>Projects</Text>
        
        {/* Clickable Project Card 1 */}
        <TouchableOpacity 
          style={styles.projectCard}
          onPress={function() { openProject('https://github.com/N-Jacques/OOP_DSA'); }}
        >
          <Text style={styles.projectTitle}>Shopping System</Text>
          <Text style={styles.projectDescription}>
            A terminal-based shopping system built using python and sqlite. (Click to view)
          </Text>
        </TouchableOpacity>

        {/* Clickable Project Card 2 */}
        <TouchableOpacity 
          style={styles.projectCard}
          onPress={function() { openProject('https://github.com/N-Jacques/ADS_EnrollmentSystem'); }}
        >
          <Text style={styles.projectTitle}>Enrollment System</Text>
          <Text style={styles.projectDescription}>
            Enrollment System for Irregular Students of Pamantasan ng Lungsod ng Maynila (Click to view)
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  centeredTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#20232a',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  skillsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  columnHeader: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#61dafb',
  },
  bulletItem: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  projectCard: {
    borderLeftWidth: 4,
    borderLeftColor: '#61dafb',
    padding: 15, 
    marginBottom: 15,

  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#20232a',
  },
  projectDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});

export default About;