import React from "react";
import { CharacterArc as CharacterArcType} from "../models/objects/characterArcs"

type CharacterArcProps = CharacterArcType;


export const CharacterArc: React.FC<CharacterArcProps> = ({journey}) => {
    return (
        <section>
            <h1>Character Arc</h1>
            <p>{journey}</p>
        </section>
    )
}