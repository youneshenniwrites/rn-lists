import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_KEY, getPlaylist } from '../api/music';
import { RouteParams } from '../navigation/RootNavigator';
import { Playlist } from '../types/Playlist';

const PlaylistDetail: React.FC = () => {
  const [playlist, setPlaylist] = useState<Playlist>();

  const route = useRoute<RouteProp<RouteParams, 'Playlist'>>();
  const playlistId = route.params?.id || API_KEY;

  useEffect(() => {
    getPlaylist(playlistId).then((response) => {
      setPlaylist(response);
    });
  }, []);

  return (
    <SafeAreaView style={styles.playlist}>
      {playlist ? (
        <Text>{playlist.name}</Text>
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </SafeAreaView>
  );
};

export default PlaylistDetail;

const styles = StyleSheet.create({
  playlist: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
