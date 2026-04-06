import { Link } from "react-router";
import "../../styles/Seasons/Seasons.css"
import { S1Poster, s2Poster, S3Poster, S4Poster } from "../../models/objects/Images";
import { Page } from "../../models/classes/AllType";
import { seasons } from "../../models/objects/SeasonItem";


export const Seasons = () => {
    return <main className="season-container"> {
        seasons.map((s) => (
            <article className="Season">
            <Link to={s.path}><img src={s.imgUrl} alt="" /></Link>
                <h3>Season {s.label}</h3>
            </article>
        ))}
    </main>
}