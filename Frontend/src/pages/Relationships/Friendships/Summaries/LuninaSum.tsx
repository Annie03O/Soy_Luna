import { Link } from "react-router-dom"
import { LuninaImg } from "../../../../models/objects/Images"

export const LuninaSum = () => {
    return (
        <>
                    <h5>Best Friend</h5>
                    <h6>See: <Link to={"/Luna_and_Nina"}>Luna and Nina</Link></h6>
                    <article className="couple">
                        <section className="summary">
                            Luna and Nina share one of the strongest and most heartfelt friendships in Soy Luna. From the moment they meet, Luna sees beyond Nina's shy and introverted nature, encouraging her to be confident, express herself, and believe in her own voice. Luna’s warmth and kindness help Nina open up, while Nina offers Luna quiet strength, loyalty, and deep emotional support.

                        <br/>
                        <br/>Their friendship is built on trust, mutual respect, and honesty. They celebrate each other’s victories, support each other through tough times, and stand up for one another without hesitation. While their personalities are different—Luna being outgoing and energetic, and Nina being thoughtful and reserved—they balance each other perfectly.
                        <br/>
                        <br/>Throughout the series, their bond remains unshakable. Whether it’s skating, school, or personal struggles, Luna and Nina prove that true friendship is about accepting and empowering each other just as they are.

                            
                        </section>
                        <section className="img"><img src={LuninaImg} alt="" /></section>
                    </article>
        </>
    )
}
