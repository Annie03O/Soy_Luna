import { Link } from "react-router"
import { LuninaSum } from "../../Relationships/Friendships/Summaries/LuninaSum"

import { NinaInfo } from "./NinaInfo"
import { NinaSeasonOne } from "./Character Arc/NinaSeasonOne"
import { NinaSeasonTwo } from "./Character Arc/NinaSeasonTwo"
import { NinaSeasonThree } from "./Character Arc/NinaSeasonThree"
import { NiricSum } from "../../Relationships/Romances/Summaries/NiricSum"
import { GastinaSum } from "../../Relationships/Romances/Summaries/GastinaSum"
import { NinaXavi } from "../../Relationships/Romances/Summaries/NinaXavi"

export const NinaPage = () => {
    return <div className="container">
        <section className="headline">
            <h1>Nina Simonetti</h1>
        </section>
        <aside className="sidebar">
            <NinaInfo />
        </aside>
        <section className="personality">
            <h2>Personality</h2>
            <p>Nina  is intelligent, kind, and introverted. She’s known for her love of books, writing, and learning, often preferring quiet moments over the spotlight. At the beginning of the series, Nina struggles with self-confidence and finds it difficult to express herself openly, especially around others her age.

Despite her shyness, Nina has a strong moral compass and is deeply loyal to her friends. She often offers thoughtful advice and emotional support, especially to Luna. As the series progresses, Nina becomes more self-assured, learning to embrace her talents and voice—both as herself and as her anonymous online persona, FelicityForNow. Her journey is one of personal growth, showing that strength can come from being true to who you are, even if you're not the loudest in the room.</p>
        </section>
        <section className="characterarc">
            <h2>Character arc</h2>
                <NinaSeasonOne/>
                <NinaSeasonTwo/>
                <NinaSeasonThree/>
        </section>
        <section className="relationships">
            <h2>Relationships</h2>
            <h3>Romances</h3>
            <section className="ship-container">
                <h4><Link to={"/Eric"}>Eric Andrade</Link></h4>
                <NiricSum>Boyfriend</NiricSum>

                <h4><Link to={"/Gastón"}>Gastón Battan</Link></h4>
                <GastinaSum>Ex-Boyfriend</GastinaSum>

                <h4>Xavi</h4>
                <NinaXavi/>
            </section>
            <h3>Friendships</h3>
            <section className="ship-container">
                <h4><Link to={"/Luna"}>Luna Valente</Link></h4>
                    <LuninaSum/>

            </section>
        </section>
    </div>
}