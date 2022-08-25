import { Pokemon } from "./../types/index";
export const BASE_URL = "https://pokeapi.co/api/v2";

export const FETCH_URLS = {
  allPokemon: `${BASE_URL}/pokemon/`,
  sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/pokemonId.png",
  pokemonTypes: `${BASE_URL}/types/`,
};

export const getStoreItem = (itemName: string) => localStorage.getItem(itemName);
export const setStoreItem = (itemName: string, value: string) =>
  localStorage.setItem(itemName, value);
