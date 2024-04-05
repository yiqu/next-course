import Link from "next/link";

async function Projects() {

  const pokemons = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
  const pokemonsJson: PokemonData = await pokemons.json();


  return (
    <div className="text-black">
      Pokemons
      <div className="mt-2">
        Total pokemons count: { pokemonsJson.count }
      </div>
      <div className="mt-4">
        {
          pokemonsJson.results.map((pokemon) => (
            <Link
              key={ pokemon.name }
              href={ `/projects/react/${pokemon.name}` }
            >
              <div key={ pokemon.name }>
                { pokemon.name }
              </div>

            </Link>
          ))
        }
      </div>
    </div >
  );
}

export default Projects;


interface PokemonData {
  count: number;
  results: { name: string, url: string }[];
  next: string;
  previous: string | null;
}