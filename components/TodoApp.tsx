
import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';

import Header from './Header';
import Todo from './Todo';
import Form from './Form'

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { text: 'Buy a coffee', key: '1' },
    { text: 'Create an application', key: '2' },
    { text: 'Play games on computer', key: '3' },
  ]);

  const [key, setKey] = useState(todos.length + 1);

  const pressHandler = (key: string) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text: string) => {
    if (text.length <= 3)
    {
      // Title, message, and an array of object representing buttons
      Alert.alert('OOPS!', 'Todos must be over 3 chars long.', [
        { text: 'Understood', onPress: () => console.log('Todo minimum char alert closed.')},
      ]);
      return;
    }

    setTodos((todos) => {
      return [
        // Spread operator, insert all elements from todos.
        ...todos,
        { text: text, key: key.toString() },
      ];
    });
    setKey(key + 1);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Form submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <Todo item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  content: {
    paddingRight: 40,
    paddingLeft: 40,
  },
  list: {
    marginTop: 20,
  },
});
