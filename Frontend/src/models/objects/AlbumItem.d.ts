export type SongItem = {
    id: number;
    label: string;
    path: string;
    artist: string;
    release: string;
    season: number;
    album: string;
    img: string;
    spotifyUrl: string;
    ytUrl: string;
};
export type AlbumItem = {
    id: number;
    imgUrl: string;
    path: string;
    label: string;
    season?: number;
    nosongs?: number;
    release?: string;
};
export type AlbumWithSongs = AlbumItem & {
    songs: SongItem[];
};
export type AlbumKey = "albumOne" | "albumTwo" | "albumThree" | "albumFour";
export type AlbumWithBuckets = AlbumItem & {
    songs: Partial<Record<AlbumKey, SongItem[]>>;
};
export declare const albums: AlbumWithSongs[];
