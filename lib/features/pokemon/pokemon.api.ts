// Need to use the React-specific entry point to import `createApi`
import type { TagDescription } from '@reduxjs/toolkit/query/react';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PokemonDetail } from './pokemon.state';

const baseApiUrl = 'https://pokeapi.co/api/v2/pokemon';

const POKEMON_DETAILS_TAG = 'PokemonDetails';

export const pokemonApiSlice = createApi({
  reducerPath: 'pokemonDetailApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseApiUrl,
  }),
  tagTypes: [POKEMON_DETAILS_TAG],
  keepUnusedDataFor: 1000,
  endpoints: (build) => ({
    fetchPokemon: build.query<PokemonDetail, string>({
      query: (urlToFetch: string) => {
        return {
          url: `/${urlToFetch}`,
          method: 'GET',
        };
      },
      transformErrorResponse: (response) => {
        return response.data;
      },
      transformResponse: (response: PokemonDetail, meta, args: string) => {
        return response;
      },
      providesTags: (result: PokemonDetail | undefined, error, args: string, meta) => {
        const tags: TagDescription<'PokemonDetails'>[] = [];
        if (result) {
          tags.push({ type: POKEMON_DETAILS_TAG, id: result.id });
        }
        return tags;
      },
    }),
  }),
});

export const { useFetchPokemonQuery } = pokemonApiSlice;
