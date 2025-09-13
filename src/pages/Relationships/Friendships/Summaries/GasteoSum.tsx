import { Link } from "react-router-dom"
import { GasteoImg } from "../../../../models/Images"

export const GasteoSum = () => {
    return (
        <>
           <h5>Best Friend</h5>
           <h6>See: <Link to={"/Gastón_and_Matteo"}>Gastón and Matteo</Link></h6>
           <article className="couple">
               <section className="summary">Matteo Balsano and Gastón Perida share one of the strongest and most consistent friendships in Soy Luna. From the very beginning of the series, they are introduced as close friends who attend Blake South College and spend time together at Jam & Roller. Their bond is rooted in loyalty, trust, and mutual respect. Whether skating, performing music, or navigating high school drama, Matteo and Gastón are often seen side by side, encouraging each other and sharing advice.
<br />
<br />
In Season 1, their friendship is playful and solid, with Gastón often acting as the more level-headed of the two. As Matteo begins developing feelings for Luna, Gastón supports him, even when Matteo struggles to be honest about his emotions. While they occasionally tease or compete with each other, especially in sports or skating, their bond is never seriously threatened.

<br />
<br />
During Season 2, their friendship deepens as both characters face personal growth and emotional challenges. When Matteo withdraws from the team and associates with the Adrenaline group, Gastón doesn’t abandon him. Instead, he expresses concern and helps guide Matteo back to himself. In turn, Matteo is supportive of Gastón’s evolving relationship with Nina—especially as Gastón discovers that she is secretly Felicity For Now. They offer each other emotional support and are never afraid to speak the truth, even when it’s hard to hear.
<br />
<br />In Season 3 Gastón moves to England to study at Oxford which forces Matteo to make new friends.
</section>
<section className="img"><img src={GasteoImg} alt="" /></section>
           </article>
        </>
    )
}