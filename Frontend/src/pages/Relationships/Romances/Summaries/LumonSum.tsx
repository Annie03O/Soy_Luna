import { Link } from "react-router-dom"
import { LumonImg } from "../../../../models/objects/Images"

export const LumonSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
                    <h5>{children}/Best Friend</h5>
                    <h6>See: <Link to={"/Lumon"}>Lumon</Link></h6>
                    <article className="couple">
                        <section className="summary">Luna Valente and Simón Álvarez share a deep and heartfelt friendship that begins before the events of Soy Luna. They grew up together in Mexico and have a strong bond built on years of trust, fun, and shared dreams. When Luna moves to Argentina, Simón follows her later on, showing how important she is to him.

                    <br/>At the beginning of the series, Simón has romantic feelings for Luna, and while she deeply cares for him, her feelings are more platonic. Despite this, Simón is always by Luna’s side—supporting her through every challenge and encouraging her in both skating and life.
                    <br />
                    <br/>Their relationship is marked by loyalty, honesty, and emotional support. Though their paths eventually lead them in different directions romantically, their connection remains one of the purest and most genuine in the show. Simón and Luna’s friendship serves as a foundation of love and respect that withstands everything they go through.

                    </section>
                        <section className="img"><img src={LumonImg} alt="" /></section>
                    </article>
        </>
    )
}