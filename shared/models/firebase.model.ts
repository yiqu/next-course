export interface IFirebaseData<T> {
  [fireKey: string]: T;
}

export interface FirebaseQuotesComment {
  comment: string;
}

export interface FirebaseQuote {
  id: string;
  author: string;
  comments: IFirebaseData<FirebaseQuotesComment>;
  date: number;
  quote: string;
}

export interface QuotePost {
  author: string;
  date: number;
  quote: string;
}