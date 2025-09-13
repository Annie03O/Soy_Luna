import { Link } from "react-router-dom"
import { LutteoImg } from "../../../../models/Images"

export const LutteoSum = ({ children } : {children: React.ReactNode}) => {
    return (
        <>
                    <h5> {children}</h5>
                    <h6> See: <Link to={"/Lutteo"}>Lutteo</Link></h6>
                    <article className="couple">
                        <section className="summary">Luna Valente and Matteo Balsano have a complex, emotional, and evolving relationship throughout Soy Luna. What begins as a series of clashes and misunderstandings eventually blossoms into a deep and sincere romance. Matteo, known for his confidence and charm, initially comes off as arrogant, while Luna is more grounded, kind, and focused on her passions like roller skating.

                        <br />
                        <br />Despite their differences, Matteo gradually falls for Luna’s authenticity and spirit, and Luna begins to see the real, vulnerable side of Matteo beneath his ego. Their relationship goes through ups and downs, including jealousy, miscommunications, and personal growth, but they consistently show how much they care for each other.

                        <br />
                        <br />By the end of the series, Luna and Matteo’s bond becomes stronger, built on trust, support, and a genuine connection. Their love story is one of the central emotional arcs of the show and is beloved by fans for its mix of tension, tenderness, and transformation.

                        </section>
                        <section className="img"><img src={LutteoImg} alt="" /></section>
                    </article>
        </>

    )
}