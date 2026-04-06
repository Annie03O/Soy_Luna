import { characters1, characters2 } from "../../models/objects/CharacterItem"
import { Link } from "react-router-dom"
import { CharacterCard } from "./CharacterCard"


export const Characters = () => {
    return <>   
    <main className="flex flex-col ">  
     <h1 className="text-[#e63894] font-serif text-3xl">Meet the Characters</h1>
        
     <section className="gap-2">
        <section className="flex max-sm:flex-col">
            {characters1.map((c) => (
                <Link to={c.path}>
                    <CharacterCard character={c}/>
                </Link>
            ))}
        </section>
       <section className="grid grid-flow-col grid-rows-8 max-md:grid-rows-8 gap-2">
            {characters2.map((c) => (
                <Link to={c.path}>
                    <CharacterCard character={c}/>
                </Link>
            ))}
            </section>
     </section>
    </main>
    </>
} 