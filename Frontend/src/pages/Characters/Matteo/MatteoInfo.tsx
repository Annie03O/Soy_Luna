import { Link } from "react-router";
import "/src/styles/Infobox.css"

export const MatteoInfo = () => {
    return (
        <aside>
            <section className="head">Matteo</section>
            <section className="poster"><img src="https://assets.mycast.io/actor_images/actor-matteo-balsano-1272424_large.jpg?1735289274" alt="" /></section>
            <section className="label1">Full Names</section>
            <section className="label2">Nicknames</section>
            <section className="label3">Gender</section>
            <section className="label4">Date of Birth</section>
            <section className="label5">Resides in</section>
            <section className="label6">Hair Color</section>
            <section className="label7">Eye Color</section>
            <section className="label8">Occupation</section>
            <section className="label9">Family</section>
            <section className="label10">Romances</section>
            <section className="label11">Friends</section>
            <section className="label12">School</section>
            <section className="label13">First Episode</section>
            <section className="label14">Last Episode</section>
            <section className="label15">Portrayed by</section>
            <section className="info1">Matteo Balsano</section>
            <section className="info2">Chico Fresa (by <Link to={"/Luna"}>Luna</Link>)
            <br/>King of the Rink (by everyone)
            <br/>Teo (by <Link to={"/Jazmín"}>Jazmín</Link>)
            <br/>Marco (by Sebas)
            <br/>Matteito/Mattelito (by <Link to={"/Luna"}>Luna</Link>)
            <br/>Balsano/Mr. Balsano (by <Link to={"/Ramiro"}>Ramiro</Link>)
            <br/>Agentul Parmezan (by Leonardo Balsano)
            </section>
            <section className="info3">Male</section>
            <section className="info4">1999 (approximately)</section>
            <section className="info5">Italy (Currently)
                <br />Buenos Aires, Argentina (Former)
            </section>
            <section className="info6">Brown</section>
            <section className="info7">Brown</section>
            <section className="info8">Singer 
                <br />Student (Former)
                <br />Cafeteria Worker at Jam & Roller (Former)
            </section>
            <section className="info9">Unnamed Mother
               <br />Leonardo Balsano (Father)
               <br />Sofia Balsano (Older Sister)
               <br />Flor (Cousin)
               <br />Giuseppina (Aunt)
               <br />Denisse Balsano (Grandmother)
            </section>
            <section className="info10"><Link to={"/Luna"}>Luna Valente</Link> (Girlfriend)
               <br/><Link to={"/Àmbar"}>Ámbar Smith</Link> (Ex-Girlfriend)
               <br/>Fernanda (Former Crush-On-By)
               <br/><Link to={"/Emilia"}>Emilia</Link> (Former Crush-On-By)
            </section>
            <section className="info11"><Link to={"/Gastón"}>Gastón Battan</Link> (Best Friend)
               <br/><Link to={"/Ramiro"}>Ramiro Ponce</Link>
               <br/>Fernanda
               <br/>Rocco
               <br/>Pablo
               <br/><Link to={"/Nico"}>Nicolás Navarro</Link>
               <br/><Link to={"/Pedro"}>Pedro Arias</Link>
               <br/><Link to={"/Simón"}>Simón Àlvarez</Link>
            </section>
            <section className="info12">Unnamed university</section>
            <section className="info13">Season 1 Episode 1</section>
            <section className="info14">Season 3 Episode 60 </section>
            <section className="info15">Ruggero Pasquarelli</section>
        </aside>
    );
}