import { Link } from "react-router-dom";
import { LutteoSum } from "../../Relationships/Romances/Summaries/LutteoSum";
import { MatteoSeasonOne } from "./Character Arc/MatteoSeasonOne";
import { MatteoSeasonThree } from "./Character Arc/MatteoSeasonThree";
import { MatteoSeasonTwo } from "./Character Arc/MatteoSeasonTwo";
import { MatteoInfo } from "./MatteoInfo";

import { MambarSum } from "../../Relationships/Romances/Summaries/MambarSum";
import { GasteoSum } from "../../Relationships/Friendships/Summaries/GasteoSum";
import { SitteoSum } from "../../Relationships/Friendships/Summaries/SitteoSum";

export const MatteoPage = () => {
    return <div className="container">
        <section className="headline"><h1>Matteo Balsano</h1></section>
        <aside className="sidebar">
            <MatteoInfo />
        </aside>
        <section className="personality"><h2>Personality</h2>
          <p>Matteo is a charismatic and talented roller skater with a passion for music and dance. He is known for his charming personality, quick wit, and natural leadership skills. Matteo is deeply connected to his friends and often acts as the glue that holds the group together. His journey is marked by personal growth, as he learns to navigate the complexities of relationships, ambition, and self-discovery.
           He is confident, outgoing, and has a magnetic presence that draws people to him. He is fiercely loyal to his friends and has a strong sense of justice. Despite his laid-back demeanor, Matteo is ambitious and strives to be the best in everything he does, especially when it comes to skating and music. He is also sensitive and caring, often putting others' needs before his own.</p>
        </section>
        <section className="characterarc"><h2>Character arc</h2>
           <MatteoSeasonOne/>
           <MatteoSeasonTwo/>
           <MatteoSeasonThree/>
        </section>
        <section className="relationships"><h2>Relationships</h2>
            <h3>Romances</h3>
            <section className="ship-container">
                <h4><Link to={"/Luna"}>Luna Valente</Link></h4>
                       <LutteoSum>Girlfriend</LutteoSum>
                <h4><Link to={"/Àmbar"}>Àmbar Smith</Link></h4>
                        <MambarSum>Ex-Girlfriend</MambarSum>
            </section>
            <h3>Friendships</h3>
            <section className="ship-container">
                <h4><Link to={"/Gastón"}>Gastón Battan</Link></h4>
                   <GasteoSum/>
                <h4><Link to={"/Simón"}>Simón Alvarez</Link></h4>
                   <SitteoSum/>
            </section>
        </section>
        <footer>footer</footer>
    </div>;
}