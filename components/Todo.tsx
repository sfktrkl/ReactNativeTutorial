import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { TodoProps } from './types'

// Receive props in this component
export default function Todo({ item, pressHandler }: TodoProps) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});
