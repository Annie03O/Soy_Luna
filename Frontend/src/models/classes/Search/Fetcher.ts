import { searchResults } from "../../objects/searchResults";

export type Fetcher<T> = (query: string, signal: AbortSignal) => Promise<T[]>;

export const localFetcher = async (q: string) => {
    const query = q.trim().toLowerCase();
    return searchResults.filter(r => r.label.toLowerCase().includes(query))
}