import { useEffect, useReducer, useState } from "react"
import { ActionTypes, RankingReducer } from "../reducers/RankingReducer"
import "../../../styles/Ranking.css"

export const CharacterRanking = () => {
    const [items, dispatch] = useReducer(RankingReducer, [], () => {
        const storedItems = localStorage.getItem('characteritems');
        return storedItems ? JSON.parse(storedItems) : [];
    }); 

    useEffect(() => {
        localStorage.setItem('characteritems', JSON.stringify(items));
    }, [items])

    const [characterInput, setCharacterInput] = useState("");

     const addItem = () => {
         if (characterInput.trim() === "") return;

         dispatch({
             type: ActionTypes.ADDED,
             payload: characterInput,
         });

        setCharacterInput("");
    }

    const removeItem = (id: number) => {
        dispatch({
            type: ActionTypes.REMOVED,
            payload: id.toString(),
        })
    }

    const moveUpItem = (id: number) => {
        dispatch({
            type: ActionTypes.MOVED_UP,
            payload: id.toString(),
        })
    }
    const moveDownItem = (id: number) => {
        dispatch({
            type: ActionTypes.MOVED_DOWN,
            payload: id.toString(),
        })
    }

    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items))
    })

    return <section className="character-ranking">
        <h1>Characters</h1>
        <form action="">
          <input value={characterInput} onChange={(e) => setCharacterInput(e.target.value)} />
          <button onClick={addItem}>Spara</button>
       </form>
       <ul className="rankinglist">
           {items.map((i) => (
            <li key={i.id}>
                <span>{i.label}</span>
                <button onClick={() => removeItem(i.id)}>Ta Bort</button>
                <button onClick={() => moveUpItem(i.id)}>Up</button>
                <button onClick={() => moveDownItem(i.id)}>Down</button>
            </li>
           ))}
       </ul>
    </section>
}