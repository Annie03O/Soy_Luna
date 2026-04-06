import { DanielaImg } from "../../../../models/objects/Images";

export const SimónelaSum = ({children} : {children: React.ReactNode}) => {
    return (
        <>
           <h5>{children}</h5>
           <br />
           <br />
           <article className="couple">
               <section className="summary">Simón's relationship with Daniela in Soy Luna begins in the prequel novel El principio del verano, where they meet during a summer vacation in Mexico. Simón teaches her how to skate, and they grow close, with Simón realizing he has feelings for her after she returns to Argentina. Although she promised to come back the next summer, she never did. According to Daniela in Season 1, they actually dated in Cancún and only broke up because she had to leave. When Daniela reappears in the series (Episodes 49–60), she is introduced as Simón's old friend but quickly reveals herself to be manipulative and jealous of Luna. She kisses Simón and becomes his girlfriend, but her actions—including stealing a USB, lying about Luna injuring her, and ultimately trying to sabotage Luna and Simón’s friendship—lead to the relationship falling apart. Simón breaks up with her in Episode 60 after discovering her lies. Though hurt, Daniela confesses she acted out of fear of losing him and apologizes before leaving and returning Luna’s stolen skates.
               </section>
               <section className="img"><img src={DanielaImg} alt="" /></section>
           </article>
        </>
    )
}