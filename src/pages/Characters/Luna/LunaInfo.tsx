import { Link } from "react-router"
import "/src/styles/Infobox.css"

export const LunaInfo = () => {
    return (
             <aside>
                <section className="head">Luna</section>
                <section className="poster"><img src="https://pm1.aminoapps.com/6475/92870c252f95bcf6b80c6319bfa63986afbde872_00.jpg" alt="" /></section>
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
                <section className="info1">Luna Valente
                    <br />Sol Benson (Birth Name)
                </section>
                <section className="info2">Lunita (by <Link to={"/Àmbar"}>Ámbar</Link>)
                <br />Chica Delivery (by <Link to={"Matteo"}>Matteo</Link>)
                <br />Valente (by Soraya)
                </section>
                <section className="info3">Female</section>
                <section className="info4">February 8, 2000 (Currently 25)</section>
                <section className="info5">Buenos Aires, Argentina
                    <br />Cancún, Mexico (Former)
                </section>
                <section className="info6">Maple Honet Balayage (Currently dyed)
                    <br/>Brown (Natural)
                </section>
                <section className="info7">Green</section>
                 <section className="info8">Student 
                    <br />Rink Assistent (Former)
                    <br />Delivery Girl (Former)
                </section>
                <section className="info9"><Link to={"/Miguel"}>Miguel Valente</Link> (Adoptive Father)
                    <br /><Link to={"/Mónica"}>Mónica Valente</Link> (Adoptive Mother)
                    <br />Bernie Benson (Birth Father)
                    <br/>Lili Benson (mother)†
                    <br/><Link to={"/Sharon"}>Sharon Benson</Link> (aunt)
                    <br/><Link to={"/Alfredo"}>Alfredo</Link> (maternal grandfather)
                    <br/><Link to={"/Àmbar"}>Ámbar Smith</Link>
                    <br/>Unnamed maternal grandmother†
                    <br/>Samuel Bilder (great-great-grandfather)†
                    <br/>Ernestina Bilder (great-great-grandmother)†
                    <br/>Unnamed adoptive grandfather
                    
                </section>
                <section className="info10"><Link to={"/Matteo"}>Matteo</Link> (Boyfriend)
                    <br /><Link to={"/Simón"}>Simón</Link> (Ex-Boyfriend)
                    <br />Sebastián Villalobos (former crush-on-by)
                    <br />Michel (former crush-on-by)
                </section>
                <section className="info11"><Link to={"/Simón"}>Simón Álvarez</Link> (best friend)
                    <br /><Link to={"/Nina"}>Nina Simonetti</Link> (Best Friend)
                    <br /><Link to={"/Jim"}>Jim Medina</Link>
                    <br /><Link to={"/Yam"}>Yam F. Sanchez</Link>
                    <br /><Link to={"/Nico"}>Nico Navarro</Link>
                    <br /><Link to={"/Pedro"}>Pedro Arias</Link>
                    <br /><Link to={"/Sebastían"}>Sebastián Villalobos</Link>
                    <br /><Link to={"/Delfi"}>Delfi Alzamendi</Link>
                    <br /><Link to={"/Jazmín"}>Jazmín Carvajal</Link>
                    <br /><Link to={"/Michel"}>Michel</Link>
                    <br /><Link to={"/Ramiro"}>Ramiro Ponce</Link>
                    <br /><Link to={"/Gastón"}>Gastón Battán</Link>
                    </section>
                <section className="info12">Blake South Collage</section>
                <section className="info13">Season 1 Episode 1</section>
                <section className="info14">Season 3 Episode 60</section>
                <section className="info15">Karol Sevilla</section>
            </aside>
    )
}