// Need to use the React-specific entry point to import `createApi`
import type { TagDescription } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon, PokemonFetchParams, PokemonListApiResponse } from './pokemon.state';

const baseApiUrl = 'https://pokeapi.co/api/v2/pokemon';

const POKEMON_LIST_TAG = 'PokemonList';

export const pokemonsApiSlice = createApi({
  reducerPath: 'pokemonListApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  tagTypes: [POKEMON_LIST_TAG],
  endpoints: (build) => ({
    fetchPokemonList: build.query<Pokemon[], PokemonFetchParams>({
      query: (params: PokemonFetchParams) => {
        return {
          url: `?limit=${params.limit}&offset=${params.offset}`,
          method: 'GET',
        };
      },
      transformErrorResponse: (response) => {
        return response.data;
      },
      transformResponse: (response: PokemonListApiResponse, meta, args: PokemonFetchParams) => {
        return response.results;
      },
      providesTags: (result: Pokemon[] | undefined, error, args: PokemonFetchParams, meta) => {
        const tags: TagDescription<'PokemonList'>[] = [];
        tags.push({ type: POKEMON_LIST_TAG, id: 'LIST' });
        return tags;
      },
    }),
  }),
});

// Hooks are auto-generated by RTK-Query
// Same as `quotesApiSlice.endpoints.getQuotes.useQuery`
export const { useFetchPokemonListQuery } = pokemonsApiSlice;
