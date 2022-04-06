import { View, Image, Text } from 'react-native';
import React from 'react';
import { Track } from '../types/Track';

interface TrackItemProps {
  track: Track;
}

const TrackItem: React.FC<TrackItemProps> = ({ track }) => {
  return (
    <View style={{ alignItems: 'center', flexDirection: 'row', padding: 12 }}>
      <Image source={{ uri: track.cover }} style={{ height: 80, width: 80 }} />
      <View style={{ padding: 12 }}>
        <Text style={{ fontWeight: 'bold' }}>
          {track.name.substring(0, 33)}
        </Text>
        <Text style={{ color: 'grey', fontWeight: '600' }}>{track.artist}</Text>
      </View>
    </View>
  );
};

export default TrackItem;
