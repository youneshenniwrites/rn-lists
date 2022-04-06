import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Track } from '../types/Track';

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <View style={styles.trackItem}>
      <Image
        source={{ uri: track.cover }}
        style={{ height: 120, width: 120 }}
      />
      <View style={{ padding: 12 }}>
        <Text
          style={{ fontWeight: 'bold', textAlign: 'center', paddingBottom: 6 }}
        >
          {track.name.substring(0, 33)}
        </Text>
        <Text style={{ color: 'grey', fontWeight: '600', textAlign: 'center' }}>
          {track.artist}
        </Text>
      </View>
    </View>
  );
};

export default TrackItem;

const styles = StyleSheet.create({
  trackItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
});
