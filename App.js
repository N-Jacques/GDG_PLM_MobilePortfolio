import { ScrollView, StyleSheet, SafeAreaView } from 'react-native';


import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <About />
        <Footer />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 40
  }
});