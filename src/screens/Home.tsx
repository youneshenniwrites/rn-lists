import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getPlaylists } from '../api/music';

import { Button } from '../components/Button';
import { RouteParams } from '../navigation/RootNavigator';
import { Playlist } from '../types/Playlist';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const [playlists, setPlaylists] = useState<Playlist[]>();
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  useEffect(() => {
    getPlaylists().then((response) => {
      setPlaylists(response);
    });
  }, []);

  return (
    <SafeAreaView style={styles.playlists}>
      {playlists ? (
        playlists.map((playlist) => (
          <View key={playlist.id} style={styles.button}>
            <Text style={styles.text}>{playlist.name}</Text>
            <Button
              onPress={() =>
                navigation.navigate('Playlist', { id: playlist.id })
              }
            >
              Open
            </Button>
          </View>
        ))
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
  },
  text: { marginBottom: 6 },
});
