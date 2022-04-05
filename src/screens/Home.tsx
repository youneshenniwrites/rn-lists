import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.home}>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
