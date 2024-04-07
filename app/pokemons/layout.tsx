import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: 'Pokemon List',
  description: 'Angular projects!',
};

export default function PokemonListLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box>
      <Stack>
        <Link href="/pokemons">Pokemons Home</Link>
        { children }
      </Stack>
    </Box>
  );
}
