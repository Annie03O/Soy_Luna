import { Link } from "react-router";
import "../../styles/Seasons/Seasons.css"
import { Season } from "../../models/Season";
import S4Poster from "../../assets/SoyLunas4.png"
import { S1Poster, s2Poster, S3Poster } from "../../models/Images";

const seasons = [
    new Season(1, S1Poster, "1", "/Season_1"),
    new Season(2, s2Poster, "2", "/Season_2"),
    new Season(3, S3Poster, "3", "/Season_3"),
    new Season(4, S4Poster, "4", "/Season_4")
]

export const Seasons = () => {
    return <main className="season-container"> {
        seasons.map((s) => (
            <article className="Season">
            <Link to={s.link}><img src={s.imgUrl} alt="" /></Link>
                <h3>Season {s.title}</h3>
            </article>
        ))}
    </main>
}