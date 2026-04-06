import { Link } from "react-router-dom";
import { PelfiImg } from "../../../../models/objects/Images";

export const PelfiSum = ({children}: {children: React.ReactNode}) => {
  return <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Pelfi"}>Pelfi</Link></h6>
            <article className="couple">
                <section className="summary">
                    Delfi and Pedro begin dating in Season 1, though their relationship is not very deep and eventually ends off-screen before Season 2.
                    In Season 2, Delfi starts distancing herself from Ámbar and begins to grow as a person.
                    As she becomes more sincere, she reconnects with Pedro, and they get back together.
                    Their renewed relationship is based on trust, support, and emotional growth.
                    They remain a couple throughout Season 3, facing and overcoming small challenges.
                    Delfi occasionally feels jealous, but Pedro always reassures her of his love.
                    They share sweet moments, collaborate on music, and grow both individually and together.
                    By the end of the series, they’re a stable and mature couple, reflecting their full transformation.
                </section>
                <section className="img">
                    <img src={PelfiImg} alt="" />
                </section>
            </article>
  </>  
}