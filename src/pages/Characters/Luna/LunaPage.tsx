import { LunaSeasonOne } from "./Character Arc/LunaSeasonOne"
import { LunaSeasonThree } from "./Character Arc/LunaSeasonThree"
import { LunaSeasonTwo } from "./Character Arc/LunaSeasonTwo"
import { LuninaSum } from "../../Relationships/Friendships/Summaries/LuninaSum"
import "/src/styles/Characters/CharacterPage.css"
import { LutteoSum } from "../../Relationships/Romances/Summaries/LutteoSum"
import { LumonSum } from "../../Relationships/Romances/Summaries/LumonSum"
import { LunaInfo } from "./LunaInfo"
import { Link } from "react-router-dom"
import { LumbarSum } from "../../Relationships/Friendships/Summaries/LumbarSum"

export const LunaPage = () => {
    return <div className="container">
      <section className="headline">
        <h1>Luna Valente</h1>
      </section>
      <aside className="sidebar">
        <LunaInfo/>
      </aside>
      <section className="personality">
        <h2>Personality</h2>
          <p>Luna is a cheerful, kind-hearted, and determined teenage girl with an unshakable sense of optimism. Originally from Mexico, she moves to Argentina with her adoptive parents and embarks on a journey filled with music, friendship, skating, and self-discovery. Luna is passionate about roller skating and feels most alive when she's gliding across the rink, expressing herself freely.
                   She is empathetic and deeply loyal to her friends, always standing up for what she believes is right—even if it means facing difficult challenges. Despite her humble beginnings, Luna remains grounded, curious, and open-minded. She has a strong moral compass and often serves as the emotional glue among her peers, encouraging others to follow their dreams.
                   Luna’s journey is also marked by her resilience. As she uncovers hidden truths about her past and identity, she never loses her sense of self or her ability to love deeply. Her inner strength, creativity, and unwavering belief in herself make her a natural leader and a beloved friend.</p>
        </section>
      <section className="characterarc">
         <h2>Character arc</h2>
         <LunaSeasonOne />
         <LunaSeasonTwo />
         <LunaSeasonThree />
      </section>
      <section className="relationships"><h2>Relationships</h2>
      <h3>Romances</h3>
      <section className="ship-container">
        <h4><Link to={"/Matteo"}>Matteo Balsano</Link></h4>
        <LutteoSum>Boyfriend</LutteoSum>
        <h4><Link to={"/Simón"}>Simón Alvarez</Link></h4>
        <LumonSum>Ex-Boyfriend</LumonSum>
      </section>
      <h3>Friendships</h3>
      <section className="ship-container">
        <h4><Link to={"/Nina"}>Nina Simonetti</Link></h4>
          <LuninaSum />
        <h4><Link to={"/Ámbar"}>Ámbar Smith</Link></h4>
           <LumbarSum/>
      </section>
      </section>
      <footer>footer</footer>
    </div>
}