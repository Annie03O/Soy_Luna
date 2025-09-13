import { Link } from "react-router-dom"
import { ÁmbiliaImg } from "../../../../models/Images"

export const ÁmbarEmiliaSum = () => {
    return ( 
        <>
            <h5>Rival/Former Friend</h5>
            <h6>See: <Link to={"/Ámbar_and_Emilia"}>Ámbar and Emilia</Link></h6>
            <article className="couple">
                <section className="summary">
                    Ámbar and Emilia’s relationship in Soy Luna is built on convenience and shared goals rather than true friendship. They team up in Season 3 to compete against Luna and her friends, with Emilia seeing Ámbar as a useful ally. However, their bond is shallow and often tense—both are manipulative and competitive, leading to frequent clashes. As Ámbar begins to change and seek redemption, she distances herself from Emilia, who continues her scheming ways. Ultimately, their relationship falls apart, highlighting Ámbar’s growth and Emilia’s refusal to change.
                </section>
                <section className="img"><img src={ÁmbiliaImg} alt="" /></section>
            </article>
        </>
    )
}