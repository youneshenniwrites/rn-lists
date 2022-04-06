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
    return <TrackItem track={item} />;
  };

  const EmptyState = () => (
    <View style={styles.playlist}>
      <Text>No music found.</Text>
    </View>
  );

  const Header = () => (
    <View style={styles.playlist}>
      <Text style={styles.title}>{playlist?.name}</Text>
      <Text style={styles.subtitle}>{playlist?.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.playlist}>
      {playlist ? (
        <FlatList
          data={playlist.tracks}
          keyExtractor={(track) => track.name}
          renderItem={renderItem}
          style={{ width: '100%' }}
          ItemSeparatorComponent={() => <Separator />}
          numColumns={2}
          ListHeaderComponent={<Header />}
          ListEmptyComponent={<EmptyState />}
          onRefresh={() => console.log('refetch music')}
          refreshing={false}
          onEndReached={() => console.log('load more')}
          onEndReachedThreshold={0.5}
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
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 12,
  },
  subtitle: {
    fontSize: 14,
    padding: 6,
    fontWeight: '500',
    color: 'grey',
  },
});
