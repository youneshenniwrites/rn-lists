import { RouteProp, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  View,
  Text,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { API_KEY, getPlaylist } from '../api/music';
import Separator from '../components/Separator';
import TrackItem from '../components/TrackItem';
import { RouteParams } from '../navigation/RootNavigator';
import { Playlist } from '../types/Playlist';
import { Track } from '../types/Track';

const PlaylistDetail: React.FC = () => {
  const [playlist, setPlaylist] = useState<Playlist>();

  const route = useRoute<RouteProp<RouteParams, 'Playlist'>>();
  const playlistId = route.params?.id || API_KEY;

  useEffect(() => {
    getPlaylist(playlistId).then((response) => {
      setPlaylist(response);
    });
  }, []);

  const renderItem: ListRenderItem<Track> = ({ item }) => {
    return <TrackItem key={item.name} track={item} />;
  };

  return (
    <SafeAreaView style={styles.playlist}>
      {playlist ? (
        <FlatList
          data={playlist.tracks}
          renderItem={renderItem}
          style={{ width: '100%' }}
          ItemSeparatorComponent={() => <Separator />}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
