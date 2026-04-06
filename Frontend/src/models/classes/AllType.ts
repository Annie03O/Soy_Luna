import { SongItem } from "./Album/SongItem";
import { Infobox } from "./Infobox";

export type Page = {
  id: string;
  label: string;
  category?: string;
  actor?: string;
  path: string;
  imgUrl?: string,
  season?: number;
  nosongs?: number;
  release?: string; // YYYY-MM-DD  
  spotifyUrl?: string;
  ytUrl?: string;
  album?: string;
  songs?: SongItem[];
  description?: string;
  infobox?: Infobox | undefined;
}
