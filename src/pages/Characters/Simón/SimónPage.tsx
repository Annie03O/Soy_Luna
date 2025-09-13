import { Link } from "react-router-dom"
import { SimónSeasonOne } from "./Character Arc/SimónSeasonOne"
import { SimónSeasonThree } from "./Character Arc/SimónSeasonThree"
import { SimónSeasonTwo } from "./Character Arc/SimónSeasonTwo"
import { SimónInfo } from "./SimónInfo"
import { SimbarSum } from "../../Relationships/Romances/Summaries/SimbarSum"
import { LumonSum } from "../../Relationships/Romances/Summaries/LumonSum"
import { SitteoSum } from "../../Relationships/Friendships/Summaries/SitteoSum"
import { SimónelaSum } from "../../Relationships/Romances/Summaries/SimónelaSum"
import { SimonNicoPedroSum } from "../../Relationships/Friendships/Summaries/SimonNicoPedroSum"

export const SimónPage = () => {
    return <div className="container">
        <section className="headline">
            <h1>Simón Àlvarez</h1>
        </section>
        <aside className="sidebar">
            <SimónInfo />
        </aside>
        <section className="personality">
            <h2>Personality</h2>
            <p>Simón Álvarez is a warm-hearted and deeply loyal character, known for his unwavering support and friendship, especially toward Luna. From the very beginning of the series, he proves to be someone who values his relationships above all else. He is always ready to help others, putting their happiness and well-being before his own. His loyalty is one of his strongest traits, and it often shines through in how he stands by his friends during both good and challenging times.</p>
        </section>
        <section className="characterarc">
            <h2>Character arc</h2>
            <SimónSeasonOne/>
            <SimónSeasonTwo />
            <SimónSeasonThree />
        </section>
        <section className="relationships">
            <h2>Relationships</h2>
            <h3>Romances</h3>
            <section className="ship-container">
                <h4><Link to={"/Àmbar"}>Ámbar Smith</Link></h4>
                <SimbarSum>Girlfriend</SimbarSum>
                <h4><Link to={"/Luna"}>Luna Valente</Link></h4>
                <LumonSum>Ex-Girlfriend</LumonSum>
                <h4>Daniela</h4>
                <SimónelaSum>Ex-Girlfriend</SimónelaSum>
            </section>
            <h3>Friendships</h3>
            <section className="ship-container">
                <h4>Nico Navarro and Pedro Arias</h4>
                <SimonNicoPedroSum/>
                <h4><Link to={"/Matteo"}>Matteo Balsano</Link></h4>
                <SitteoSum/>
            </section>
        </section>
        <footer>footer</footer>

    </div>
}