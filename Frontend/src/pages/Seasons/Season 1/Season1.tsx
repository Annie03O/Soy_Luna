import "../../../styles/Seasons/Seasons.css"
import { S1Info } from "./S1Info"
export const Season1 = () => {
    return (
        <div className="season-layout">
            <section className="headline">
                <h1>Season 1</h1>
            </section>
            <section className="premise">
                <h2>Premise</h2>
                 <p>Luna Valente, a cheerful and talented teenage girl living in Cancún, Mexico, who loves skating and listening to music. Her life takes a dramatic turn when her adoptive parents are offered jobs in Buenos Aires, Argentina, forcing Luna to leave behind her friends and her familiar world.

In her new life, Luna enrolls at the prestigious Blake South College, where she faces a very different social environment. She struggles to fit in among wealthy and snobbish students like Ámbar Smith, the school's queen bee, who sees Luna as a threat. Despite the challenges, Luna finds solace and joy at Jam & Roller, a skating rink where she begins to make new friends and pursue her passion for freestyle skating and music.

As the season unfolds, Luna becomes entangled in a mystery about her true origins. Strange dreams, a hidden past, and clues linked to a powerful family suggest that Luna might not be who she thinks she is. Meanwhile, she develops a sweet and complicated romantic connection with Matteo, while navigating friendships, rivalries, and personal growth.</p>
            </section>
                <S1Info/>
            <main className="episodes">
                <h2>Episodes</h2>
            </main>
        </div>
    )
}