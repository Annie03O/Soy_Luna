import { Link } from "react-router-dom"
import { GastinaImg } from "../../../../models/objects/Images"

export const GastinaSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Gastina"}>Gastina</Link></h6>
            <article className="couple">
                <section className="summary">
                    Nina and Gastón’s relationship is one of the most emotional storylines in Soy Luna, mainly unfolding in Seasons 1 and 2. Nina, shy and introverted, connects with Gastón under the alias "Felix," allowing her to express herself more freely. Gastón is captivated by Felix’s intelligence, unaware it’s Nina. When he learns the truth, he’s surprised but eventually admires her even more. They become a couple in Season 2, forming a sweet and meaningful bond that helps both of them grow. Gastón supports Nina’s confidence, while she helps him mature emotionally. However, challenges like trust issues and social pressures arise. In Season 3, they break up due to long-distance struggles after Gastón leaves to study abroad. Their relationship ends respectfully, marking Nina’s first love and a key step in her personal growth.
                </section>
                <section className="img"><img src={GastinaImg} alt="" /></section>
            </article>
        </>
    )
}