import { AlbumItem } from "./AlbumItem";
import { SongItem } from "./SongItem";

// Album med låtlista
export type AlbumWithSongs = AlbumItem & {
  songs: SongItem[];
};

export type AlbumKey = "albumOne" | "albumTwo" | "albumThree" | "albumFour";

export type AlbumWithBuckets = AlbumItem & {
  songs: Partial<Record<AlbumKey, SongItem[]>>; // t.ex. { albumOne: [...] }
};
