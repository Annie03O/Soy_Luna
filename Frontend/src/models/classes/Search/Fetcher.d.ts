export type Fetcher<T> = (query: string, signal: AbortSignal) => Promise<T[]>;
export declare const localFetcher: (q: string) => Promise<import("../AllType").Page[]>;
