import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  SectionList,
  SectionListRenderItem,
  SectionListData,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlaylists } from '../api/music';

import { Button } from '../components/Button';
import TrackItem from '../components/TrackItem';
import { RouteParams } from '../navigation/RootNavigator';
import { Playlist } from '../types/Playlist';
import { Track } from '../types/Track';
import { randomKeyGenerator } from '../utils';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [playlists, setPlaylists] = useState<Playlist[]>();
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  useEffect(() => {
    getPlaylists().then((response) => {
      setPlaylists(response);
    });
  }, []);

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<Playlist>;
  }) => {
    return (
      <View style={{ marginVertical: 12 }}>
        <Text>{section.title}</Text>
      </View>
    );
  };

  const renderTrackItem: ListRenderItem<Track> = ({ item }) => (
    <TrackItem track={item} type="small" />
  );

  const renderItem: SectionListRenderItem<Playlist> = ({ item }) => {
    return (
      <>
        <FlatList
          horizontal
          data={item.tracks}
          renderItem={renderTrackItem}
          keyExtractor={randomKeyGenerator}
        />
        <Button
          onPress={() => navigation.navigate('Playlist', { id: item.id })}
        >
          See more...
        </Button>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.playlists}>
      {playlists ? (
        <SectionList
          sections={playlists.map((playlist) => {
            return {
              title: playlist.name,
              data: [playlist],
            };
          })}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      ) : (
        <ActivityIndicator size="large" color="black" />
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  playlists: {
    flex: 1,
    height: '100%',
    padding: 12,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    paddingVertical: 12,
  },
  text: { marginBottom: 6 },
});
