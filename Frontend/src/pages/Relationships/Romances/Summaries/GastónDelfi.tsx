import { Link } from "react-router-dom";
import { GastónDelfiImg } from "../../../../models/objects/Images";

export const GastónDelfi = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Delfi_and_Gastón"}>Delfi and Gastón</Link></h6>
            <article className="couple">
                <section className="summary">
                    In Season 1, Delfi has a crush on Gastón and tries various ways to get his attention, even though he’s clearly interested in Nina.
                    In a scheme to win him over, Delfi pretends to be FelicityForNow, the mysterious online girl Gastón is falling for—unaware that it’s actually Nina.
                    She briefly fools him, enjoying his attention, but the truth eventually comes out, and Gastón is disappointed by the trick.
                    Gastón never returns Delfi’s romantic interest, and she eventually lets go of her crush.
                </section>
                <section className="img">
                    <img src={GastónDelfiImg} alt="" />
                </section>
            </article>
        </>
    )
}