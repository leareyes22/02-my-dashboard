import { FavoritePokemons } from "@/pokemons";

export const metadata = {
  title: "151 Pokemons",
  description:
    "Aute enim eu amet mollit eiusmod aliqua nisi qui proident anim velit.",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemons Favoritos <small className="text-blue-500">Global State</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
