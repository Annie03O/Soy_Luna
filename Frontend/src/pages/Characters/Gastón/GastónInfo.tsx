import { Link } from "react-router-dom";

export const GastónInfo = () => {
    return <aside>
           <aside>
            <section className="head">Gastón</section>
            <section className="poster"><img src="https://www.kindpng.com/picc/m/83-834962_soy-luna-wiki-gastn-de-soy-luna-hd.png" alt="" /></section>
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
            <section className="info1">Gastón Aguero Battán</section>
            <section className="info2">RollerTrack (Online Handle)
                <br />Gastoncito (by <Link to={"/Luna"}>Luna</Link>)</section>
            <section className="info3">Male</section>
            <section className="info4">Between September 23 
                and October 22 (1999)
            </section>
            <section className="info5">Oxford, England
                <br />Buenos Aires, Argentina (Formerly)
            </section>
            <section className="info6">Brown</section>
            <section className="info7">Brown</section>
            <section className="info8">Student</section>
            <section className="info9">Unnamed Mother
                <br />Unnamed Grandmother
            </section>
            <section className="info10"><Link to={"/Nina"}>Nina Simonetti</Link> (Ex-Girlfriend)
                <br /><Link to={"/Delfi"}>Delfi Alzamendi</Link> (Ex-Girlfriend)
                <br />Flor (Former Crush)
            </section>
            <section className="info11"><Link to={"/Matteo"}>Matteo Balsano</Link> (Best Friend)
                <br /><Link to={"/Ramiro"}>Ramiro Ponce</Link>
                <br />Flor
                <br /><Link to={"/Delfi"}>Delfi Alzamendi</Link>
                <br /><Link to={"/Luna"}>Luna Valente</Link>
                <br /><Link to={"/Pedro"}>Pedro Arias</Link>
                <br /><Link to={"/Simón"}>Simón Álvarez</Link>
                <br /><Link to={"/Nina"}>Nina Simonetti</Link>
            </section>
            <section className="info12">Oxford University
                <br />Blake South College (Graduated)
            </section>
            <section className="info13">Season 1 Episode 2</section>
            <section className="info14">Season 3 Episode 11</section>
            <section className="info15">Agustin Bernasconi</section>
        </aside>
    
    </aside>
}