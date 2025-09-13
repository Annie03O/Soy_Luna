import { useEffect, useReducer, useState } from "react";
import { ActionTypes, RankingReducer } from "../reducers/RankingReducer";
import "../../../styles/Ranking.css"

export const CouplesRanking = () => {
    const [items, dispatch] = useReducer(RankingReducer, [], () => {
        const storedItems = localStorage.getItem('coupleitems');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('coupleitems', JSON.stringify(items));
    }, [items]);

    const [couplesInput, setCouplesInput] = useState("");

    const addItem = () => {
        if (couplesInput.trim() === "") return;

        dispatch({
            type: ActionTypes.ADDED,
            payload: couplesInput,
        });

        setCouplesInput("");
    }

    const removeItem = (id: number ) => {
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
        localStorage.setItem("items", JSON.stringify(items));
    })

    return <section className="couples-ranking">
        <h1>Couples</h1>
        <form>
            <input value={couplesInput} onChange={(e) => setCouplesInput(e.target.value)} />
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