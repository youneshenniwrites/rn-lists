import axios from 'axios';
import { Playlist } from '../types/Playlist';

export const getPlaylists = () =>
  axios
    .get<Playlist[]>(`https://www.wawasensei.dev/api/spotify/homePlaylists`)
    .then((response) => {
      return response.data;
    });

export const getPlaylist = (playlistId: string) =>
  axios
    .get<Playlist>(
      `https://www.wawasensei.dev/api/spotify/playlistContent?playlist_id=${playlistId}`
    )
    .then((response) => {
      return response.data;
    });

export const API_KEY = '37i9dQZF1DXe5W6diBL5N4';
