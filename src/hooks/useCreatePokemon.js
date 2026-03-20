import { useEffect, useState } from "react";

const STORAGE_KEY = "custom_pokemons";

export default function useCreatePokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setPokemons(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokemons));
  }, [pokemons]);

  const addPokemon = (pokemon) => {
    setPokemons((prev) => [
      ...prev,
      { ...pokemon, id: Date.now() }, 
    ]);
  };

  const deletePokemon = (id) => {
  setPokemons((prev) => prev.filter((p) => p.id !== id));
};

const updatePokemon = (updatedPokemon) => {
  setPokemons((prev) =>
    prev.map((p) =>
      p.id === updatedPokemon.id ? updatedPokemon : p
    )
  );
};

  return { pokemons, addPokemon, deletePokemon, updatePokemon };
}