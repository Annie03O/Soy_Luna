import { SongItem } from "../objects/AlbumItem";
export type Page = {
    id: string;
    label: string;
    actor?: string;
    path: string;
    imgUrl: string;
    season?: number;
    nosongs?: number;
    release?: string;
    spotifyUrl?: string;
    ytUrl?: string;
    album?: string;
    songs?: SongItem[];
};
