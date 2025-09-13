import { Link } from "react-router-dom"
import { ÁmbarDelfiJazmínImg } from "../../../../models/Images"

export const ÁmbarDelfiJazminSum = () => {
    return (
        <>
            <h5>Best Friends</h5>
            <h6>See: <Link to={"/Àmbar_Delfi_and_Jazmín"}>Ámbar, Delfi and Jazmín</Link></h6>
            <article className="couple">
                <section className="summary">Ámbar, Delfi, and Jazmín start out as a close trio in Soy Luna, bonded by popularity and shared interests. Ámbar is the leader, often controlling and manipulative, while Delfi and Jazmín follow her lead. Their friendship is superficial at times, driven more by status than true loyalty. As the series progresses, Delfi and Jazmín begin to grow more independent, and the trio drifts apart. By the end, their friendship is less about appearances and more about mutual growth and respect.</section>
                <section className="img"><img src={ÁmbarDelfiJazmínImg} alt="" /></section>
            </article>
        </>
    )
}