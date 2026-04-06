import { Link } from "react-router-dom";
import { MambarImg } from "../../../../models/objects/Images";

export const MambarSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
           <h5>{children}</h5>
           <h6>See: <Link to={"/Mambar"}>Mambar</Link></h6>
           <article className="couple">
            <section className="summary">
                Matteo and Ámbar are a couple when Soy Luna begins. Their relationship is mostly superficial — based on popularity, image, and appearances, not emotional connection.As Matteo begins to fall for Luna, Ámbar becomes increasingly jealous and controlling. She tries to manipulate situations to keep Matteo and push Luna away.
             <br />
          <br /> Their relationship deteriorates due to Matteo’s growing interest in Luna and Ámbar’s toxic behavior. They officially break up in Season 1, after Matteo performs with Luna, and Ámbar realizes she no longer controls him.
          <br /> 
          <br />In Season 2 Ámbar tries to sabotage Luna and Matteo’s relationship while continuing her schemes. Matteo becomes more mature and emotionally detached from Ámbar.
          <br />
          <br />In Season 3 their dynamic becomes more distant and neutral. Ámbar begins a redemption arc, and Matteo is focused on Luna and his personal growth.
            End of Series: Matteo and Ámbar have no romantic connection left. They part ways as civil exes, each moving on with their own paths.
            </section>
            <section className="img"><img src={MambarImg} alt="" /></section>
           </article>
        </>
    )
}