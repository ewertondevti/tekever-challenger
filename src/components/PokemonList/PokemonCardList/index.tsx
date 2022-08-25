import { GenericProp } from "@Components/types";
import { getStoreItem } from "@Components/utils";
import { useEffect, useState } from "react";
import PokemonCard from "../PokemonCard";

type Props = {
  pokemonList: GenericProp[];
  itemsPerPage: number;
};

const PokemonCardList = ({ pokemonList, itemsPerPage }: Props) => {
  const [data, setData] = useState<Array<GenericProp>>([]);
  const page = getStoreItem("page");

  useEffect(() => {
    const offset = Number(page) * itemsPerPage - itemsPerPage;
    const newData = pokemonList?.slice(offset, offset + 20);

    setData(newData);
  }, [page, pokemonList, itemsPerPage]);

  return (
    <>
      {data?.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name} />
      ))}
    </>
  );
};
export default PokemonCardList;
