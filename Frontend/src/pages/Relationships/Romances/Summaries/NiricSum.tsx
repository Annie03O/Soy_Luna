import { Link } from "react-router-dom"

export const NiricSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Niric"}>Niric</Link></h6>
            <article className="couple">
                <section className="summary">
                    Nina and Eric form a romantic relationship in the third season of Soy Luna. Their bond develops slowly and naturally, beginning as a close friendship. Eric is kind, artistic, and clearly admires Nina's intelligence and authenticity. While Nina is initially unsure about starting a new relationship—especially after her long-distance breakup with Gastón—she gradually becomes more open to Eric's feelings.
                </section>
                <section className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2LYAvU83nZgkSzoz7cZYeZN_lEKAoSljfvg&s"/></section>
            </article>
        </>
    )
}