import { AlbumItem } from "./AlbumItem";
import { CharacterItem } from "./CharacterItem";
import { SeasonItem } from "./SeasonItem";
import { AllSongs } from "./AllSongs";

export type SearchType = {
  characters: CharacterItem[];
  seasons: SeasonItem[];
  albums: AlbumItem[];
  songs: AllSongs; // <-- inte en array längre
};