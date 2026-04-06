import {  ComponentType } from "react";

export type EpisodeItem = {
  label: string;   // "Episode 1:", "Episodes 3–10:" osv
  text: string;    // själva beskrivningen
};

export type EpisodeBlock = {
  title: string;        // t.ex. "Episodes 1–10: A New Beginning"
  items: EpisodeItem[]; // li-raderna under
};
