import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Track } from '../types/Track';

interface TrackItemProps {
  track: Track;
  type: string;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, type = 'normal' }) => {
  const artCover = type === 'small' ? 75 : 120;
  return (
    <View
      style={[styles.trackItem, { width: type === 'small' ? 120 : undefined }]}
    >
      <Image
        source={{ uri: track.cover }}
        style={{ height: artCover, width: artCover }}
      />
      <View style={{ padding: 12 }}>
        <Text
          style={{ fontWeight: 'bold', textAlign: 'center', paddingBottom: 6 }}
          numberOfLines={1}
        >
          {track.name.substring(0, 33)}
        </Text>
        <Text
          style={{ color: 'grey', fontWeight: '600', textAlign: 'center' }}
          numberOfLines={1}
        >
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
