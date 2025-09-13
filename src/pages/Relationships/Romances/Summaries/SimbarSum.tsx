import { Link } from "react-router";
import { SimbarImg } from "../../../../models/Images";

export const SimbarSum = ({ children } : {children: React.ReactNode}) => {
    return (
        <>
            <h5>{children}</h5>
            <h6>See: <Link to={"/Simbar"}>Simbar</Link></h6>
            <article className="couple">
                <section className="summary">
                    Their relationship, known by fans as "Simbar," begins in Season 2. Initially, Ámbar approaches Simón with ulterior motives, aiming to use him to disrupt Luna's life. However, as they spend more time together, genuine feelings develop between them. They share their first kiss in Episode 70 of Season 2, marking the start of their romantic involvement. Unfortunately, their relationship faces a significant hurdle when Simón discovers that Ámbar was responsible for the fire at Jam & Roller. Feeling betrayed, he ends the relationship. 

<br />
<br />In Season 3, Ámbar undergoes a profound transformation. She begins to recognize and regret her past mistakes, striving to become a better person. Simón, still harboring feelings for her, supports her journey towards redemption. Their bond strengthens as they navigate various challenges, including Ámbar's brief relationship with Benicio, which she eventually ends. By the end of the series, after Ámbar has fully embraced her better self and made amends with those she wronged, she and Simón rekindle their relationship, culminating in a happy reunion. 
                </section>
                <section className="img">
                    <img src={SimbarImg} alt="" />
                </section>
            </article>
        </>
    )
}