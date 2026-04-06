
import {  useSearchParams } from "react-router-dom"
import { useMemo } from "react";
import "../../styles/Search/SearchResults.css" 
import { CharacterCard } from "../CharacterCard";
import { searchResults } from "../../models/objects/searchResults";

export const SearchResults = () => {
    const [params] = useSearchParams();
    const q = (params.get("q") ?? "").trim();
    
    const results = useMemo(() => { 
        if (!q) return [];
        
        const ql = q.toLowerCase();

        searchResults.filter(r => 
            r.label.toLowerCase().includes(q.toLowerCase()));      
    }, [q])

    if (!q) {
        return <h2>Type something to search</h2>
    }

    if (results?.length === 0) {
        return <h2>No results found for {q}</h2>
    }
    return (
        <section>
            <h1 className="text-2xl">Results for "{q}"</h1>
            <section className="searchResults">
                {results?.map((r) => (
                    <CharacterCard key={r} />
                ))}                
            </section>
        </section>
    )
}