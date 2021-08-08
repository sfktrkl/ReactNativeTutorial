import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>1</Text>
      <Text style={styles.box2}>2</Text>
      <Text style={styles.box3}>3</Text>
      <Text style={styles.box4}>4</Text>
    </View>
  );
}

// Views like wrapper components and they use flexboxes.
// Using flex 1, will make them fill the entire space.
// Everything inside the flex container becomes a flex item.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // By default flex direction is 'column' on top of each other (use full width).
    // 'row' will make them next to each other (use full height).
    flexDirection: 'row',             // This is the main axis (other is cross axis).
    justifyContent: 'space-around',   // How elements should be spread out in the main axis.
    alignItems: 'center',             // How elements should be spread out in the cross axis.
    paddingTop: 40,
    backgroundColor: '#555',
  },
  // Each child can also have a flex property.
  // Assigning flex value will define their share of space.
  box1: {
    flex: 3,
    paddingVertical: 10,
    backgroundColor: 'violet',
  },
  box2: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'gold',
  },
  box3: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'coral',
  },
  box4: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'skyblue',
  },
});

