import { Link } from "react-router-dom";
import DelfiPoster from "../../../assets/DelfiPoster.jpg"

export const DelfiInfo = () => {
    return         <aside>
            <section className="head">Delfi</section>
            <section className="poster"><img src={DelfiPoster} alt="" /></section>
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
            <section className="info1">Delfina Alzamendi</section>
            <section className="info2">Delfi (by everyone)
               <br />Mrs. General (by <Link to={"/Gastón"}>Gastón</Link>)
               <br />Delf (by <Link to={"/Pedro"}>Pedro</Link>)
               <br />FelicityForNow (Impersonation)
               <br />intensamente (Online Handle)</section>
            <section className="info3">Female</section>
            <section className="info4">1999</section>
            <section className="info5">Buenos Aires, Argentina</section>
            <section className="info6">Student</section>
            <section className="info7">Brown</section>
            <section className="info8">Brown</section>
            <section className="info9">Unnamed parents
                <br />Unnamed cousin
            </section>
            <section className="info10"><Link to={"/Pedro"}>Pedro Arias</Link> (Boyfriend)
               <br /><Link to={"/Gastón"}>Gastón Battán</Link> (Ex-Boyfriend)
               <br />Oliverio (Former Crush)
               <br />Pietro Benedetto (Crush)
            </section>
            <section className="info11"><Link to={"/Jazmín"}>Jazmín Carvajal</Link> (Best Friend)
               <br /><Link to={"/Ámbar"}>Ámbar Smith</Link>
               <br /><Link to={"/Luna"}>Luna Valente</Link>
               <br /><Link to={"/Jim"}>Jim Medina</Link>
               <br /><Link to={"/"}>Yam F. Sanchez</Link>
               <br />Emma
               <br /><Link to={"/Nina"}>Nina Simonetti</Link> 
               <br /><Link to={"/Simón"}>Simón Álvarez</Link>
               <br /><Link to={"/Gastón"}>Gastón Battán</Link>
            </section>
            <section className="info12">Unnamed University
                <br />Blake South College
            </section>
            <section className="info13">Season 1 Episode 1</section>
            <section className="info14">Season 3 Episode 60</section>
            <section className="info15">Malena Ratner</section>
        </aside>
}