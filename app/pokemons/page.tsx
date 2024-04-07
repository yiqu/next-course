'use client';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useFetchPokemonListQuery } from '@/lib/features/pokemons/pokemon-list.api';
import Link from 'next/link';

function PokemonList() {
  const { data, isLoading, isFetching, isError, error, refetch } = useFetchPokemonListQuery({ limit: 100, offset: 0 });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (!data) {
    return null;
  }

  return (
    <Stack>
      <Typography>Pokemon List</Typography>
      <Stack direction="column">
        { data.map((pokemon) => {
          const pokemonId: string | undefined = pokemon.url.split('/').filter(Boolean).pop();
          return (
            <Stack key={ pokemon.name }>
              <Link href={ `/pokemons/${pokemonId}` }>{ pokemon.name }</Link>
            </Stack>
          );
        }) }
      </Stack>
    </Stack>
  );
}

export default PokemonList;
