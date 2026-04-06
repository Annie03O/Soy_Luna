import type { Page } from "../models/classes/AllType";
import { type Fetcher } from "../models/classes/Search/Fetcher";
import { API_BASE } from "../lib/apiBase";

export const apiFetcher: Fetcher<Page> = async (q, signal) => {
    const url = `${API_BASE}/api/search?query=${encodeURIComponent(q.trim())}`;

    const response = await fetch(url, {
        method: "GET",
        signal,
        credentials: "include",
        headers: {"Accept": "application/json"},
    });

    if (!response.ok) {
        const message = await response.text().catch(() => "");
        throw new Error(`Search failed (${response.status}): ${message || response.statusText}`);
    };

    const data = (await response.json()) as Page[];
    return data;
}