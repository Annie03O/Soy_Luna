import { Link } from "react-router-dom";
import { JamonImg } from "../../../../models/objects/Images"; 

export const JazmínSimónSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Simón_and_Jazmín"}>Simón and Jazmín</Link></h6>
            <article className="couple">
                <section className="summary">Jazmín develops a crush on Simón early in the show—especially in Seasons 1 and 2—and tries various ways to get closer to him. She flirts with him, supports his performances, and even gets jealous when he spends time with Luna or Ámbar. However, Simón never reciprocates her romantic feelings. He consistently sees Jazmín as a friend and is either unaware of her crush or chooses not to acknowledge it. Over time, Jazmín begins to accept that Simón doesn’t feel the same way and shifts her focus to her own goals and personal growth.

                                            </section>
                <section className="img"><img src={JamonImg} alt="" /></section>
            </article>
        </>
)
}