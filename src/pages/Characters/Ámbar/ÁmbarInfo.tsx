import { Link } from "react-router"

export const ÁmbarInfo = () => {
    return (
     <aside>
            <section className="head">Ámbar</section>
            <section className="poster"><img src="https://i.pinimg.com/474x/f0/13/c6/f013c66d9ef77149c1c8928d7a2fcd76.jpg" alt="" /></section>
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
            <section className="info1">Ámbar Smith</section>
            <section className="info2">Queen of the Rink (by Everyone)
            <br />Carifan2000 (Online Handle)
            <br />Sol Benson (Fake identity created by <Link to={"/Sharon"}>Sharon</Link>)</section>
            <section className="info3">Female</section>
            <section className="info4">December 1999</section>
            <section className="info5">Buenos Aires, Argentina</section>
            <section className="info6">Blonde with pink stripes</section>
            <section className="info7">Blue</section>
            <section className="info8">University Student
                <br />Manager of Jam & Roller (Former)
            </section>
            <section className="info9"><Link to={"/Sharon"}>Sharon Benson</Link> (Adoptive Mother)
               <br /><Link to={"/Alfredo"}>Alfredo Bilder</Link> (Adoptive Grandfather)
               <br /><Link to={"/Luna"}>Luna Valente</Link> (Adoptive Cousin)
               <br />Sylvana Ariel (Mother)</section>
            <section className="info10"><Link to={"/Simón"}>Simón Álvarez</Link> (Boyfriend)
            <br /><Link to={"/Benicio"}>Benicio</Link> (Ex-Boyfriend)
            <br /><Link to={"/Matteo"}>Matteo Balsano</Link> (Ex-Boyfriend)
            <br />Sebastián Villalobos (Former Crush-On-By)</section>
            <section className="info11"><Link to={"/Delfi"}>Delfi Alzamendi</Link>
               <br /><Link to={"/Jazmín"}>Jazmín Carbajal</Link> (Best Friend)
               <br /><Link to={"/Benicio"}>Benicio</Link> (Former)
               <br /><Link to={"/Emilia"}>Emilia</Link> (Former)
               <br /><Link to={"/Luna"}>Luna Valente</Link>
               <br /><Link to={"/Ramiro"}>Ramiro Ponce</Link></section>
            <section className="info12">Unnamed University
                <br />Blake South College (Graduated)
            </section>
            <section className="info13">Season 1 Episode 1</section>
            <section className="info14">Season 3 Episode 60</section>
            <section className="info15">Valentina Zenere</section>
        </aside>
    
    )   
}