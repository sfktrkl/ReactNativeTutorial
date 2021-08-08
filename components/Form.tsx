import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

import { FormProps } from './types'

export default function Form({submitHandler}: FormProps) {
  const [ text, setText ] = useState('');

  const changeHandler = (value: string) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo"
        onChangeText={(value) => changeHandler(value)}
      />
      <Button
        onPress={() => submitHandler(text)}
        color="coral"
        title="Add Todo"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
