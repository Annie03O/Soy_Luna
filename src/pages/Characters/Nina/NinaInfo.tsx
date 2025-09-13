import { Link } from "react-router";
import NinaPosterImg from "../../../assets/NinaPoster.jpg";

export const NinaInfo = () => {
    return (
                <aside>
            <section className="head">Nina</section>
            <section className="poster"><img src={NinaPosterImg} alt="" /></section>
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
            <section className="info1">Nina Simonetti</section>
            <section className="info2">Lila (by <Link to={"/Delfi"}>Delfi</Link> and <Link to={"/Jazmín"}>Jazmín</Link>)
                <br />FelicityForNow (Online Handle)
                <br />Nerdy (by <Link to={"/Ámbar"}>Ámbar</Link>)
                <br />Watson (by <Link to={"/Luna"}>Luna</Link>)
            </section>
            <section className="info3">Female</section>
            <section className="info4">May 2000</section>
            <section className="info5">Buenos Aires, Argentina</section>
            <section className="info6">Brown</section>
            <section className="info7">Brown</section>
            <section className="info8">Student</section>
            <section className="info9"><Link to={"/Ana"}>Ana Valparaíso</Link> (Mother)
                <br /><Link to={"/Ricardo"}>Ricardo Simonetti</Link> (Father) 
            </section>
            <section className="info10"><Link to={"/Eric"}>Eric Andrade</Link> (Boyfriend)
                <br /><Link to={"/Gastón"}>Gastón Battan</Link> (Ex-Boyfriend)
                <br />Xavi (Former Crush)
            </section>
            <section className="info11"><Link to={"/Luna"}>Luna Valente</Link> (Best Friend)
                <br /><Link to={"/Simón"}>Simón Álvarez</Link>
                <br /><Link to={"/Jim"}>Jim Medina</Link>
                <br /><Link to={"/Yam"}>Yam F. Sanchez</Link>
                <br /><Link to={"/Pedro"}>Pedro Arias</Link>
                <br /><Link to={"/Delfi"}>Delfi Alzamendi</Link>
                <br /><Link to={"/Jazmín"}>Jazmín Carvajal</Link>
                <br /><Link to={"/Nico"}>Nico Navarro</Link>
            </section>
            <section className="info12">Blake South Collage (Graduated)</section>
            <section className="info13">Season 1 Episode 1</section>
            <section className="info14">Season 3 Episode 60</section>
            <section className="info15">Carolina Kopelioff</section>
        </aside>
    )
}