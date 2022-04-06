import { View, StyleSheet } from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 12,
  },
});
