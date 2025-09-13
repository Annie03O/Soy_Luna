import { Link } from "react-router-dom"
import lunbarImg from '/src/assets/Lunbar.jpg';

export const LumbarSum = () => {
    return (
        <>
           <h5>Good Friend/Adoptive Cousin/Former Rival</h5>
           <h6>See: <Link to={"/Lumbar"}>Lumbar</Link></h6>
           <article className="couple">
                <section className="summary">
                    Ámbar and Luna's relationship in Soy Luna begins as a fierce rivalry. Ámbar sees Luna as a threat to her popularity and does everything she can to undermine her. However, as the series progresses, the truth about Luna’s past and their family connection comes to light—they are actually cousins. This revelation, along with Luna’s kindness and forgiveness, slowly influences Ámbar. Over time, Ámbar begins to change and let go of her resentment. By the end of the series, their relationship transforms into one of mutual respect and understanding, symbolizing Ámbar’s growth and redemption.


                </section>
                <section className="img">
                    <img src={lunbarImg} alt="" />
                </section>
           </article>
        </>
    )
}