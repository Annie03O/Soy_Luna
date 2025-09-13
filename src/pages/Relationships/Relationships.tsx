import "../../styles/Relationships.css"
import { romances } from "../../models/Romances"
import { Link } from "react-router"
import { friendships } from "../../models/Friendships"

export const Relationships = () => {
    return <>
        <h1>Relationships</h1>
            <h2>Romances</h2>
        <section className="romances">
            {romances.map((r) => (
                <div className="ship-container" key={r.id}>
              <Link to={r.link}>
                <img src={r.imgUrl} alt={r.characters} />
              </Link>
                 <p>{r.characters}</p>
            </div>
            ))}
        </section>
        <h2>Friendships</h2>
        <section className="friendships">
            {friendships.map((f) => (
                <div className="ship-container" key={f.id}>
                    <img src={f.imgUrl} alt={f.characters} />
                    <p>{f.characters}</p>
            </div>  ))}
            </section> 
    </> }