import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PlaylistDetail from '../screens/PlaylistDetail';

export type RouteParams = {
  Home: undefined;
  Playlist: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Playlist"
          component={PlaylistDetail}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
