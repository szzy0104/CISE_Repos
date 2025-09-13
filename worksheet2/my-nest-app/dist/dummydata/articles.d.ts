export interface Article {
    _id: string;
    title: string;
    authors: string;
    source: string;
    pubyear: string;
    doi: string;
    claim_evidence: [string, string][];
}
export declare const ARTICLES: Article[];
