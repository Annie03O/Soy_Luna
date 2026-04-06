import { Text } from "./Text";
import {  EpisodeBlock } from "./EpisodeItem"; 
import { ShipSum } from "./ShipSum";

export type Description = {
    id: string;
    personality?: Text;
    characterArc?: EpisodeBlock;
    shipSum?: ShipSum;
    seasonSum?: Text;
    albumSum?: Text;
    songSum?: Text;
    castSum?: Text; 
}