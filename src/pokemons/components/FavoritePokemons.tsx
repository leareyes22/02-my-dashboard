"use client";

import { IoHeartOutline } from "react-icons/io5";
import { getFavoritePokemons, useAppSelector } from "@/store";
import { PokemonsGrid } from "./PokemonsGrid";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector(getFavoritePokemons);

  return (
    <>
      {Object.values(favoritePokemons).length ? (
        <PokemonsGrid pokemons={Object.values(favoritePokemons)} />
      ) : (
        <NoFavorites />
      )}
    </>
  );
};

const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
