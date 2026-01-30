import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={require('../assets/snack-icon.png')}
        style={styles.profileImage} 
      />
      <Text style={styles.nameText}>Your Name</Text> 
      <Text style={styles.subText}>Aspired Career</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    paddingTop: 70,
    padding: 30,
    backgroundColor: '#20232a'
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#61dafb', 
  },
  nameText: {
    fontSize: 28,
    color: '#61dafb',
    fontWeight: 'bold',
    marginTop: 10,
  },
  subText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Header;