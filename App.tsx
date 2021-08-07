import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // name will be set as the string.
  const [ name, setName ] = useState('Safak');
  // It can be used more than one states.
  // Any type can be passed to the state object, boolean, string etc..
  const [ person, setPerson ] = useState({ name: 'Mario', age: 40 });
  const clickHandler = () => {
      setName('Mehmet');
      setPerson({ name: 'Luigi', age: 30 });
  }

  const [ input, setInput ] = useState({ name: 'Safak', age: 25 });
  const onTextChanged = (text: string) => {
    // Code to remove non-numeric characters from text
    let age = parseInt(text.replace(/[^0-9]/g, ''));
    setInput({ name: input.name, age: age });
  }

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

      { /* Output the dynamic data using the variable name. */ }
      <Text style={ { marginTop: 20 } }>My name is { name }.</Text>
      <Text>His name is {person.name} and his age is {person.age}.</Text>
      { /* An arrow function can also be used in onPress event. */ }
      <Button title='Update' onPress={clickHandler} />

      <Text style={ { marginTop: 20 } }>Name: { input.name }, Age: { input.age }</Text>
      <Text>Enter name:</Text>
      { /* Assing a style to TextInput to see it clearly. */ }
      { /* multiline is used to make text input have more than one line when input is large enough. */ }
      { /* Other than using value, a placeholder can be used also. */}
      <TextInput 
        multiline
        style={styles.input}
        value={ input.name }
        onChangeText={(value) => setInput({ name: value, age: input.age })} />

      { /* keyboard type numeric will open up the numeric keyboard in mobile */ }
      <Text>Enter age:</Text>
      <TextInput 
        keyboardType='numeric'
        style={styles.input}
        value={ input.age.toString() }
        onChangeText={(text) => onTextChanged(text)} />

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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    paddingLeft: 8,
    width: 200,
  },
});
