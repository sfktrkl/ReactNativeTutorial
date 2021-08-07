import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    { /* View component is just like div component in HTML */ }
    { /* style prop is used to add styles. React native is not using CSS, but emulates. */}
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello World!</Text>
        { /* Use Text component everytime when a text needs to be output. */ }
      </View>
      <View style={styles.body}>
        { /* Styles will not be inherited from view to the texts. */ }
        <Text>Lorem ipsum dolor sit amet.</Text>
        { /* But texts within texts will inherit the styles. */ }
        <Text style={styles.boldText}>Lorem ipsum <Text>dolor sit amet.</Text></Text>
      </View>
    </View>
  );
}

// Create method invokes the object (container) which will be used.
// In CSS names are hypened but here camelCase is used.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
});
