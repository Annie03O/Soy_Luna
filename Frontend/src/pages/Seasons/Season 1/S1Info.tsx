import { Link } from "react-router";
import { S1Poster } from "../../../models/objects/Images";

export const S1Info = () => {
    return         <aside>
            <section className="head">Season 1</section>
            <section className="poster"><img src={S1Poster} alt="" /></section>
            <section className="label1">Number of episodes</section>
            <section className="label2">Premiere Date</section>
            <section className="label3">Finale Date</section>
            <section className="label4">First Episode</section>
            <section className="label5">Last Episode</section>
            <section className="label6">Next</section>
            <section className="info1">80</section>
            <section className="info2">March 14, 2016</section>
            <section className="info3">August 26, 2016</section>
            <section className="info4">Season 1, Episode 1</section>
            <section className="info5">Season 1 Episode 80</section>
            <section className="info6"><Link to={"/Season_2"}>Season 2</Link></section>
        </aside>
    
}