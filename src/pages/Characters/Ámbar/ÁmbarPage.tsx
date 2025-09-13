import { Link } from "react-router-dom"
import { SimbarSum } from "../../Relationships/Romances/Summaries/SimbarSum"
import "/src/styles/Characters/CharacterPage.css"
import { MambarSum } from "../../Relationships/Romances/Summaries/MambarSum"
import { ÁmbarInfo } from "./ÁmbarInfo"
import { ÁmbarSeasonOne } from "./Character Arc/ÁmbarSeasonOne"
import { ÁmbarSeasonTwo } from "./Character Arc/ÁmbarSeasonTwo"
import { ÁmbarSeasonThree } from "./Character Arc/ÁmbarSeasonThree"
import { BembarSum } from "../../Relationships/Romances/Summaries/BembarSum"
import { ÁmbarDelfiJazminSum } from "../../Relationships/Friendships/Summaries/ÁmbarDelfiJazmin"
import { ÁmbarEmiliaSum } from "../../Relationships/Friendships/Summaries/ÁmbarEmiliaSum"
import { LumbarSum } from "../../Relationships/Friendships/Summaries/LumbarSum"

export const ÁmbarPage = () => {
    return <div className="container">
        <section className="headline">
            <h1>Ámbar Smith</h1>
        </section>
        <aside className="sidebar">
            <ÁmbarInfo/>
        </aside>
        <section className="personality"> <h2>Personality</h2>
            <p>Ámbar Smith is one of the main characters and primary antagonists in the early seasons of Soy Luna. She is portrayed as a confident, stylish, and ambitious girl who is used to getting what she wants. Coming from a wealthy background, Ámbar often appears spoiled and manipulative, especially when things don’t go her way. She's fiercely competitive, particularly when it comes to Luna and matters of love or popularity.</p>

<p>Despite her outward arrogance and tendency to scheme, Ámbar is a deeply complex character. Beneath her tough and often mean-spirited exterior lies someone struggling with insecurity, abandonment issues, and a desire to be genuinely loved and accepted. Over time, her character experiences growth and begins to show signs of vulnerability, hinting at a more empathetic and misunderstood side.

Ámbar is also known for her elegance, sharp wit, and commanding presence. Whether she’s skating, performing, or plotting, she always makes sure she’s at the center of attention. Love, rivalry, and personal discovery shape much of her journey throughout the series.</p>


        </section>
        <section className="characterarc">
            <h2>Character Arc</h2>
            <ÁmbarSeasonOne/>
            <ÁmbarSeasonTwo />
            <ÁmbarSeasonThree />
        </section>
        <section className="relationships">
            <h2>Relationships</h2>
            <h3>Romances</h3>
            <section className="ship-container">
                <h4>
                    <Link to={"/Simón"}>Simón Álvarez</Link>                    
                </h4>
                    <SimbarSum>Boyfriend</SimbarSum>
                <h4>
                    <Link to={"/Matteo"}>Matteo Balsano</Link>
                </h4>
                   <MambarSum>Ex-Boyfriend</MambarSum>
                <h4>
                    <Link to={"/Benicio"}>Benicio</Link>
                </h4>
                    <BembarSum>Ex-Boyfriend</BembarSum>
            </section>
            <h3>Friendships</h3>
            <section className="ship-container">
                <h4>
                    <Link to={"/Delfi"}>Delfi Alzamendi</Link> and <Link to={"/Jazmín"}>Jazmín Carvajal</Link>
                </h4>
                <ÁmbarDelfiJazminSum />
                <h4>
                    <Link to={"/Luna"}>Luna Valente</Link>
                </h4>
                <LumbarSum />
            </section>
            <h3>Enemies</h3>
            <section className="ship-container">
                
                <h4>
                    <Link to={"/Emilia"}>Emilia</Link>
                </h4>
                <ÁmbarEmiliaSum/>
            </section>
        </section>
    </div>
}