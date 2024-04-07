export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonFetchParams {
  limit: number;
  offset: number;
}

export interface PokemonListApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}