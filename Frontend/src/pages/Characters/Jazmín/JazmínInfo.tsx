import { Link } from "react-router-dom";

export const JazmínInfo = () => {
    return (
                <aside>
            <section className="head">Jazmín</section>
            <section className="poster"><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e525846-8f61-4564-a0c3-baeab7f8f1d5/dc7kpi7-239962f1-567a-41f6-90ff-904b958f55c0.jpg/v1/fill/w_1024,h_1539,q_75,strp/_soyluna3___photoshoot___jazmn_by_gglio_dc7kpi7-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlNTI1ODQ2LThmNjEtNDU2NC1hMGMzLWJhZWFiN2Y4ZjFkNVwvZGM3a3BpNy0yMzk5NjJmMS01NjdhLTQxZjYtOTBmZi05MDRiOTU4ZjU1YzAuanBnIiwiaGVpZ2h0IjoiPD0xNTM5Iiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMWU1MjU4NDYtOGY2MS00NTY0LWEwYzMtYmFlYWI3ZjhmMWQ1XC9nZ2xpby00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.muAKK7Nh3wCzCYdRbDHP0ZaVOIuew43201ivxx8FCR0" alt="" /></section>
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
            <section className="info1">Jazmín Carvajal</section>
            <section className="info2">Yazmín (by Luna, Simón)
                <br />SuperHappyTogether (online handle)</section>
            <section className="info3">Female</section>
            <section className="info4">1999</section>
            <section className="info5">Buenos Aires, Argentina</section>
            <section className="info6">Dark Brown
                <br />Red (Former)
            </section>
            <section className="info7">Brown</section>
            <section className="info8">Video blogger</section>
            <section className="info9">Unknown</section>
            <section className="info10">Unnamed blogger
                <br /><Link to={"/Simón"}>Simón Alvarez</Link> (Crush)
                <br />Arcade (Former Crush)
                <br />Alan (Former Crush)
            </section>
            <section className="info11"><Link to={"/Delfi"}>Delfi</Link> (best friend)
                <br /><Link to={"/Ámbar"}>Ámbar Smith</Link>
                <br />Sebastián Villalobos
                <br /><Link to={"/Simón"}>Simón Álvarez</Link>
                <br /><Link to={"/Jim"}>Jim Medina</Link>
                <br /><Link to={"/Yam"}>Yam F. Sachez</Link>
                <br /><Link to={"/Luna"}>Luna Valente</Link>
                <br /><Link to={"/Nina"}>Nina Simonetti</Link></section>
            <section className="info12">Unnamed university (Technical Design Program, currently)
                <br />Blake South College (Graduated)
            </section>
            <section className="info13">Season 1 Episode 1</section>
            <section className="info14">Season 3 Episode 60</section>
            <section className="info15">Katja Martinez</section>
        </aside>
    
    ) 
}