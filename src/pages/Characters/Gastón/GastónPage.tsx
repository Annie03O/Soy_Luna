import { Link } from "react-router-dom";
import { GastinaSum } from "../../Relationships/Romances/Summaries/GastinaSum";
import { GastónDelfi } from "../../Relationships/Romances/Summaries/GastónDelfi";
import { GastónInfo } from "./GastónInfo";
import { GasteoSum } from "../../Relationships/Friendships/Summaries/GasteoSum";
import { GastónSeasonOne } from "./Character Arc/GastónSeasonOne";
import { GastónSeasonTwo } from "./Character Arc/GastónSeasonTwo";
import { GastónSeasonThree } from "./Character Arc/GastónSeasonThree";
import { GastónFlor } from "../../Relationships/Romances/Summaries/GastónFlor";

export const GastónPage = () => {
    return <div className="container">
        <section className="headline">
            <h1>Gastón Battán</h1>
        </section>
        <aside className="sidebar">
            <GastónInfo/>
        </aside>
        <section className="personality">
            <h2>Personality</h2>
            <p>Gastón is intelligent, mature, and responsible. He’s known for his calm demeanor, loyalty to his friends, and thoughtful nature.
Unlike some of the more impulsive characters, Gastón tends to think things through and often acts as a voice of reason in the group.
He values honesty and sincerity, which is why he’s drawn to Nina and her intellect.
Though he can be reserved, Gastón is also romantic and deeply caring once he opens up.
His strong sense of integrity and emotional depth make him one of the most grounded and respectful characters in the series.</p>
        </section>
        <section className="characterarc">
            <h2>Character Arc</h2>
            <GastónSeasonOne />
            <GastónSeasonTwo/>
            <GastónSeasonThree/>
        </section>
        <section className="relationships">
            <h2>Relationships</h2>
                <h3>Romances</h3>
                <section className="ship-container">
                    <h4>
                        <Link to={"/Nina"}>Nina Simonetti</Link>
                    </h4>
                        <GastinaSum>Ex-Girlfriend</GastinaSum>
                    <h4>
                        Flor
                    </h4>
                        <GastónFlor/>
                    <h4>
                        <Link to={"/Delf"}>Delfi Alzamendi</Link>
                    </h4>
                        <GastónDelfi>Ex-Girlfriend</GastónDelfi>
                </section>
                <h3>Friendships</h3>
                <section className="ship-container">
                    <h4><Link to={"/Matteo"}>Matteo Balsano</Link></h4>
                    <GasteoSum/>
                </section>
        </section>
    </div>
}