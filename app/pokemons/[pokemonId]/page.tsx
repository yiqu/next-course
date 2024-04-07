'use client';

import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useParams } from 'next/navigation';
import { useFetchPokemonQuery } from '@/lib/features/pokemon/pokemon.api';
import Image from 'next/image';
import Button from '@mui/material/Button';
import LinearProgress from "@mui/material/LinearProgress";
import Box from '@mui/material/Box';
import Skeleton from "@mui/material/Skeleton";

function PokemonDetails() {
  const params = useParams<{ pokemonId: string }>();
  const id: string = params.pokemonId;

  const { data, isLoading, isFetching, refetch } = useFetchPokemonQuery(id);

  const handleOnRefresh = () => {
    refetch();
  };

  if (isLoading) {
    return <Skeleton variant="rectangular" width="8rem" height="10rem" sx={ { p: 3, m: 2 } } />;
  }

  if (!data) {
    return null;
  }

  return (
    <Stack>
      <Typography>Pokemon Details</Typography>
      <Stack
        direction="column"
        padding={ 3 }
        justifyContent="start"
        alignItems="center"
        border="1px solid blue"
        m={ 2 }
        spacing={ 3 }
      >
        <Box height="8px" width="100%">{ isFetching && <LinearProgress sx={ { width: '100%', height: '5px' } } /> }</Box>
        <Typography>Name: { data.name }</Typography>
        <Image src={ data.sprites.front_default } width={ 100 } height={ 100 } priority alt="Picture of the poke" />
        <Typography>ID: { data.id }</Typography>
        <Typography>Height: { data.height }</Typography>
        <Button onClick={ handleOnRefresh } variant="outlined">
          Refresh
        </Button>
      </Stack>
    </Stack>
  );
}

export default PokemonDetails;
