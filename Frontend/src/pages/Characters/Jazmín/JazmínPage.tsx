import { Link } from "react-router-dom"
import { JazmínInfo } from "./JazmínInfo"
import { ÁmbarDelfiJazminSum } from "../../Relationships/Friendships/Summaries/ÁmbarDelfiJazmin"
import { JazmínSeasonOne } from "./Character Arc/JazmínSeasonOne"
import { JazmínSeasonTwo } from "./Character Arc/JazmínSeasonTwo"
import { JazmínSeasonThree } from "./Character Arc/JazmínSeasonThree"
import { JazmínSimónSum } from "../../Relationships/Romances/Summaries/JazmínSimónSum"
import { JazmínBlogger } from "../../Relationships/Romances/Summaries/JazmínBloggeSum"
import { JazmínArcade } from "../../Relationships/Romances/Summaries/JazmínArcadeSum"

export const JazmínPage = () => {
    return <div className="container">
        <section className="headline">
            <h1>Jazmín Carvajal</h1>
        </section>
        <aside className="sidebar">
            <JazmínInfo/>
        </aside>
        <section className="personality">
            <h2>Personality</h2>
            <p>Jazmín is energetic, flamboyant, and deeply invested in fashion and social media. As one of Ámbar’s closest friends and part of the “popular trio” with Delfi, she often follows Ámbar’s lead and supports her plans—sometimes even the more scheming ones—though she rarely fully understands the bigger picture. Jazmín is cheerful and somewhat naïve, often missing subtle social cues or getting easily distracted, which brings a lot of humor to her character.

            Despite her superficial interests, like maintaining her vlog and staying on top of trends, Jazmín shows occasional glimpses of sincerity and a desire to be accepted and appreciated for who she is. She deeply values friendship and seeks validation, often trying to keep the group together even when tensions rise. Over time, she matures and starts questioning some of the manipulative behavior around her, showing growth and a more empathetic side.
            </p>
        </section>
        <section className="characterarc">
            <h2>Character arc</h2>
            <JazmínSeasonOne/>
            <JazmínSeasonTwo/>
            <JazmínSeasonThree/>
        </section>
        <section className="relationships">
            <h2>Relationships</h2>
            <h3>Romances</h3>
            <section className="ship-container">
                <h4>
                    Unnamed blogger
                </h4>
                <JazmínBlogger/>

                <h4>
                    <Link to={"/Simón"}>Simón Álvarez</Link>
                </h4>
                <JazmínSimónSum>Former Crush</JazmínSimónSum>
                <h4>
                    Arcade
                </h4>
                <JazmínArcade/>
            </section>
            <h3>Friendships</h3>
            <section className="ship-container">
                <h4><Link to={"/Ámbar"}>Ámbar Smith</Link> and <Link to={"/Delfi"}>Delfi Alzamendi</Link></h4>
                <ÁmbarDelfiJazminSum />
            </section>
        </section>
        
    </div>
}