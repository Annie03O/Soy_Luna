import { Link } from "react-router"; 
import { ÁmbarDelfiJazminSum } from "../../Relationships/Friendships/Summaries/ÁmbarDelfiJazmin";
import { DelfiInfo } from "./DelfiInfo";
import { DelfiSeasonOne } from "./Character Arc/DelfiSeasonOne";
import { DelfiSeasonTwo } from "./Character Arc/DelfiSeasonTwo";
import { DelfiSeasonThree } from "./Character Arc/DelfiSeasonThree";
import { PelfiSum } from "../../Relationships/Romances/Summaries/PelfiSum";
import { GastónDelfi } from "../../Relationships/Romances/Summaries/GastónDelfi";

export const DelfiPage = () => {
    return <div className="container">
        <section className="headline">
            <h1>Delfi Alzamendi</h1>
        </section>
        <aside className="sidebar">
            <DelfiInfo/>
        </aside>
        <section className="personality">
            <h2>Personality</h2>
            <p>Delfi starts off as a stylish, confident, and sometimes snobby girl who follows Ámbar and enjoys being part of the popular crowd. She can be competitive and judgmental, especially toward Luna and her friends. However, over time, she matures and becomes more independent, kind, and supportive. Delfi learns to value real friendships, especially with Jazmín, and shows she has a good heart beneath her glamorous image.</p>
        </section>
        <section className="characterarc">
            <h2>Character Arc</h2>
            <DelfiSeasonOne/>
            <DelfiSeasonTwo/>
            <DelfiSeasonThree/>
        </section>
        <section className="relationships">
            <h2>Relationships</h2>
               <h3>Romances</h3>
               <section className="ship-container">
                    <h4>
                        <Link to={"/Pedro"}>Pedro Arias</Link>
                    </h4>
                        <PelfiSum>Boyfriend</PelfiSum>
                    
                    <h4>
                        <Link to={"/Gastón"}>Gastón Battan</Link>
                    </h4>
                        <GastónDelfi>Ex-Boyfriend</GastónDelfi>
                        
               </section>
               <h3>Friendships</h3>
               <section className="ship-container">
                  <h4>
                    <Link to={"/Àmbar"}>Ámbar Smith</Link> and <Link to={"/Jazmín"}>Jazmín Carvajal</Link>
                  </h4>
                  <ÁmbarDelfiJazminSum/>
               </section>
        </section>
    </div>
}