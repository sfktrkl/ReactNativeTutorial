import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});
