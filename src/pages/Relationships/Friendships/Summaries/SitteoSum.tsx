import { Link } from "react-router-dom"
import { SitteoImg } from "../../../../models/Images"

export const SitteoSum = () => {
    return (
        <>
           <h5>Friend/Former Rival</h5>
           <h6>See: <Link to={"/Simón_and_Matteo"}>Simón and Matteo</Link></h6>
           <article className="couple">
               <section className="summary">Matteo and Simón start off as rivals in Soy Luna, especially in Season 1, largely due to their mutual feelings for Luna. Simón, Luna’s childhood best friend from Mexico, is protective and close to her, while Matteo, the charming and confident skater from Blake South College, is immediately drawn to her. Their early interactions are marked by tension, jealousy, and competitiveness — both in skating and in trying to win Luna’s affection. Simón often sees Matteo as arrogant and insincere, while Matteo views Simón as an obstacle in his path to getting closer to Luna.
                <br />
              <br/>As the series progresses, especially in Season 2, their relationship begins to shift. While they still have differences in personality and approach, Matteo and Simón gradually learn to respect one another. Their shared love for music and skating becomes common ground, and they start working together more often, particularly when they're on the same team or involved in performances. Matteo matures emotionally and begins to show his true self, which helps Simón see him in a new light. Though they're never as close as Matteo is with Gastón, or Simón is with Nico or Pedro, they move from being enemies to something closer to reluctant allies.
              <br />
             <br/>By Season 3, their rivalry has faded, and Matteo and Simón coexist peacefully with a sense of mutual respect. They each focus on their own paths — Matteo with his music and Luna, and Simón pursuing his dreams and finding his own direction. While their friendship is not especially deep, they support each other when it counts, and there’s no longer hostility between them. Their relationship is a good example of how rivalry can evolve into understanding when both sides grow and mature.


               </section>
               <section className="img">
                   <img src={SitteoImg} alt="" />
               </section>
           </article>
        </>
    )
}