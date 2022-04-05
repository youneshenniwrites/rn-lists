import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const PlaylistDetail = () => {
  return (
    <View style={styles.playlistDetail}>
      <Text>PlaylistDetail</Text>
    </View>
  );
};

export default PlaylistDetail;

const styles = StyleSheet.create({
  playlistDetail: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
