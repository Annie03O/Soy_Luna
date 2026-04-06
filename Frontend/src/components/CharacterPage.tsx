import { Link } from "react-router-dom"
import type { Page } from "../models/classes/AllType";    
import { CharacterAside } from "./Infobox";

type CharacterPageProps = Page;

export const CharacterPage: React.FC<CharacterPageProps> = ({id, label, imgUrl, actor, infobox, description}) => {
    return (
        <section className="container">
            <section className="headline">
                <h1>{label}</h1>
            </section>
            <aside className="sidebar">
                <CharacterAside character={infobox}/>
            </aside>  
            <section className="personality">
               <h2>Personality</h2>
               <p>{description}</p>
            </section>
            
        </section>       
    )
}