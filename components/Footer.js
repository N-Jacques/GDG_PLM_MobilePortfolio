import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

function Footer() {
  
  // just for avoiding crashes
  function openLink(url) {
    Linking.openURL(url).catch((err) => console.error("Couldn't load page", err));
  }

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Connect with me:</Text>
      
      
      <TouchableOpacity onPress={function() { openLink('https://github.com/'); }}>{/* Edit in github profile link here */}
        <Text style={styles.link}>GitHub Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={function() { openLink('https://www.linkedin.com/in/'); }}> {/* Edit in linkedin profile link here */}
        <Text style={styles.link}>LinkedIn Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 30,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  link: {
    color: '#007AFF',
    fontSize: 16,
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
});

export default Footer;