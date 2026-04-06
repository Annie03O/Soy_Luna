export type SongItem = {
  id: number;
  label: string;
  path: string;
  artist: string;
  release: string;   // YYYY-MM-DD
  season: number;
  album: string;
  img: string;
  spotifyUrl: string;
  ytUrl: string;
};