// src/dummydata/articles.ts

export interface Article {
  _id: string;
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim_evidence: [string, string][];
}

export const ARTICLES: Article[] = [
  {
    _id: '1',

    title:'An experimental evaluation of test driven development vs. test-last development',
    authors: 'Munir, H., Wnuk, K., Petersen, K., Moayyed, M.',
    source: 'EASE',
    pubyear: '2014',
    doi: 'https://doi.org/10.1145/2601248.2601267',
    claim_evidence: [['code improvement', 'strong support']],
  },
  {
    _id: '2',
    title: 'Realizing quality improvement through test driven development',
    authors: 'Nagappan, N., Maximilien, E. M., Bhat, T., Williams, L.',
    source: 'Empirical Software Engineering, 13(3), 289–302',
    pubyear: '2008',
    doi: 'https://doi.org/10.1007/s10664-008-9062-z',
    claim_evidence: [['product improvement', 'weak against']],
  },
];
