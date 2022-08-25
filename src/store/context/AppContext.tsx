import { AllPokemonResponse, Pokemon } from "@Components/types";
import { FETCH_URLS } from "@Components/utils";
import { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
  allPokemon?: AllPokemonResponse;
  pokemonDetails?: Pokemon;
  isLoading: boolean;
  getAllPokemon?: (offset?: number, limit?: number) => void;
  getPokemonDetails?: (pokemonId: string) => void;
};

const initialState: Props = {
  isLoading: false,
};

export const AppContext = createContext<Props>(initialState);

const AppProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [allPokemon, setAllPokemon] = useState<AllPokemonResponse | undefined>(undefined);
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | undefined>(undefined);

  const getAllPokemon = async (offset?: number, limit?: number) => {
    setIsLoading(true);
    let urlAllPokemon = FETCH_URLS.allPokemon;

    if (!!limit) {
      urlAllPokemon += `?offset=${offset}&limit=${limit}`;
    }

    fetch(urlAllPokemon)
      .then((response) => response.json())
      .then((data: AllPokemonResponse) => {
        setAllPokemon(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  const getPokemonDetails = (pokemonId: string) => {
    setIsLoading(true);

    fetch(FETCH_URLS.allPokemon + pokemonId)
      .then((response) => response.json())
      .then((data: Pokemon) => {
        setIsLoading(false);
        setPokemonDetails(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        allPokemon,
        pokemonDetails,
        getAllPokemon,
        getPokemonDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
