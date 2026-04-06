import "../../styles/Relationships.css"
import { romances } from "../../models/objects/Romances"
import { Link } from "react-router"
import { friendships } from "../../models/objects/Friendships"

export const Relationships = () => {
    return <>
        <h1>Relationships</h1>
            <h2>Romances</h2>
        <section className="romances">
            {romances.map((r) => (
                <div className="ship-container" key={r.id}>
              <Link to={r.path}>
                <img src={r.imgUrl} alt={r.label} />
              </Link>
                 <p>{r.label}</p>
            </div>
            ))}
        </section>
        <h2>Friendships</h2>
        <section className="friendships">
            {friendships.map((f) => (
                <div className="ship-container" key={f.id}>
                    <img src={f.imgUrl} alt={f.label} />
                    <p>{f.label}</p>
            </div>  ))}
            </section> 
    </> }