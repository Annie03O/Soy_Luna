import { Link } from "react-router-dom"
import { BembarImg } from "../../../../models/Images"

export const BembarSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Bembar"}>Bembar</Link></h6>
            <article className="couple">
                <section className="summary">
                    Ámbar Smith’s relationship with Benicio in Soy Luna is built on manipulation and convenience rather than genuine affection. While Benicio is romantically interested in her, Ámbar uses him to carry out schemes against Luna and her friends. Their alliance is strategic—Benicio wants power and Ámbar wants control—but there's little trust or real emotional connection between them. As Ámbar begins to change and seek redemption, she distances herself from Benicio, ultimately ending their toxic partnership. Their relationship highlights Ámbar’s personal growth as she leaves behind the manipulative behavior that once defined her.
                </section>
                <section className="img"><img src={BembarImg} alt="" /></section>
            </article>
        </>
    )
}