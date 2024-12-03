import axios from "axios";
import { PokemonsGrid, PokemonsResponse } from "@/pokemons";

export const metadata = {
  title: "151 Pokemons",
  description: "Esta pagina contiene 151 pokemons.",
};

export const revalidate = 60;

const getPokemons = async (limit = 20, offset = 0) => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const pokemons = (response.data as PokemonsResponse).results.map(
    (pokemon) => {
      return {
        id: pokemon.url.split("/").at(-2)!,
        name: pokemon.name,
      };
    }
  );

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Listado de Pokemons <small>static</small>
        <PokemonsGrid pokemons={pokemons} />
      </span>
    </div>
  );
}
