import { v7 } from "uuid";
import { PokemonCard, SimplePokemon } from "..";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonsGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons && pokemons.length
        ? pokemons.map((pokemon: SimplePokemon) => {
            return <PokemonCard key={v7()} pokemon={pokemon} />;
          })
        : null}
    </div>
  );
};
