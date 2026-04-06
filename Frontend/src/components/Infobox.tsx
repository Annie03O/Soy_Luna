import React from "react";
import { Infobox } from "../models/classes/Infobox"

type InfoboxProps = { character: Infobox | undefined};

export const CharacterAside = ({ character }: InfoboxProps) => {
    if (!character) return null; // eller en loader/placeholder

  return <aside>
    <section className="head">{character!.name}</section>
    <section className="poster">
      <img src={character!.posterSrc} alt={character!.posterAlt ?? ""} />
    </section>

    {character!.fields.map((f) => (
      <React.Fragment key={f.index}>
        <section className={`label${f.index}`}>{f.label}</section>
        <section className={`info${f.index}`}>
          {f.info.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </section>
      </React.Fragment>
    ))}
  </aside>
}
