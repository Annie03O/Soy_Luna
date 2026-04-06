import { Link } from "react-router-dom"
import { SimonPedroNicoImg } from "../../../../models/objects/Images"

export const SimonNicoPedroSum = () => {
    return (
        <>
        <h5>Best Friends/Former Bandmates</h5>     
        <h6>See: <Link to={"/Nico_Pedro_and_Simón"}>Nico, Pedro and Simón</Link></h6> 
        <article className="couple">
            <section className="summary">
                Simón, Nico, and Pedro share one of the strongest and most genuine friendships in Soy Luna. The trio originally comes from Mexico and arrive in Buenos Aires together with dreams of pursuing music. Their bond is rooted in deep loyalty, mutual support, and a shared passion for performing. Throughout the series, they form the band La Roller Band and often practice, perform, and face challenges together, both professionally and personally.

Simón acts as the leader and emotional anchor of the group, while Pedro is the level-headed and practical one, and Nico brings humor and a laid-back energy. Despite facing romantic tensions, personal setbacks, and competitive rivalries (especially as each of them forms different connections with others at Jam & Roller), their friendship remains strong. They often serve as each other’s emotional support, celebrating successes and offering advice during difficult times. Ultimately, their bond symbolizes the importance of trust, loyalty, and shared dreams in the face of change and growing up.
            </section>
            <section className="img">
                <img src={SimonPedroNicoImg} alt="" />
            </section>
        </article>  
        </>
    )
}