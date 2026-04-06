import { Link } from "react-router-dom"

export const SimónInfo = () => {
    return (
        <aside className="infobox">
            <section className="head">Simón Álvarez</section>
            <section className="poster"><img src="https://assets.puzzlefactory.com/puzzle/321/909/original.jpg" alt="" /></section>
            <section className="label1">Full Name</section>
            <section className="label2">Nicknames</section>
            <section className="label3">Gender</section>
            <section className="label4">Date of Birth</section>
            <section className="label5">Resides in</section>
            <section className="label6">Hair Color</section>
            <section className="label7">Eye color</section>
            <section className="label8">Occopation</section>
            <section className="label9">Family</section>
            <section className="label10">Romances</section>
            <section className="label11">Friends</section>
            <section className="label12">School</section>
            <section className="label13">First Episode</section>
            <section className="label14">Last Episode</section>
            <section className="label15">Portrayed by</section>
            <section className="info1">Simón Álvarez</section>
            <section className="info2">Guitarist (by Matteo)
                <br/>Gardener (by <Link to={"/Tino"}>Tino</Link> and <Link to={"/Cato"}>Cato</Link>)
                <br/>Champ (by <Link to={"/Matteo"}>Matteo</Link>)</section>
            <section className="info3">Male</section>
            <section className="info4">2000s</section>
            <section className="info5">Buenos Aires, Argentina
                <br />Cancún, Mexico (Former)
            </section>
            <section className="info6">Brown</section>
            <section className="info7">Brown</section>
            <section className="info8">Event maneger
                <br />Waiter (Former)
            </section>
            <section className="info9">Unknown</section>
            <section className="info10"><Link to={"/Àmbar"}>Ámbar Smith</Link> (Girlfriend)
               <br /><Link to={"/Luna"}>Luna Valente</Link> (Ex-Girlfriend)
               <br />Daniela (Ex-Girlfriend)
               <br />Mar (Former Crush-On-By)
               <br /><Link to={"/Jazmín"}>Jazmín Carvajal</Link> (Former Crush-On-By)
               <br />Emma (Crush-On-By)</section>
               <section className="info11"><Link to={"/Luna"}>Luna Valente</Link> (Best Friend)
               <br/><Link to={"/Nico"}>Nicolás Navarro</Link> (best friend)
               <br/><Link to={"/Pedro"}>Pedro Arias</Link> (Best Friend)
               <br/><Link to={"Nina"}>Nina Simonetti</Link>
               <br/><Link to={"/Jazmín"}>Jazmín Carvajal</Link>
               <br/><Link to={"/Delfi"}>Delfi Alzamendi</Link>
               <br/><Link to={"/Matteo"}>Matteo Balsano</Link>
               <br/>Ada
               <br/>Emma</section>
            <section className="info12">Unknown</section>
            <section className="info13">Season 1 Episode 1</section>
            <section className="info14">Season 3 Episode 60</section>
            <section className="info15">Micheal Ronda</section>
        </aside>
    )
}