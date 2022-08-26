import OutData from "@Components/OutData";
import { AllPokemonResponse, GenericProp } from "@Components/types";
import { getStoreItem, setStoreItem } from "@Components/utils";
import useAppData from "@Store/hooks/useAppData";
import { Pagination, Spin } from "antd";
import Search from "antd/lib/input/Search";
import { useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import PokemonCardList from "./PokemonCardList";
import styles from "./PokemonList.module.scss";

// this is for max possible data
const MAX_DATA = 100000;

// this is for page limit
const ITEMS_PER_PAGE = 20;

const PokemonList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, allPokemon, getAllPokemon } = useAppData();
  const location = useLocation();
  const { pokemonId } = useParams();
  const page = getStoreItem("page");
  const keys = useMemo(() => Object.keys(localStorage), [Object.keys(localStorage)]);

  const selectedTab = useMemo(
    () => location?.pathname.split("/").find((i) => ["all", "favorites"].includes(i)),
    [location.pathname]
  );

  useEffect(() => {
    if (getAllPokemon && !pokemonId) {
      getAllPokemon(0, MAX_DATA);
      setSearchInput("");
    }
  }, [selectedTab, pokemonId]);

  useEffect(() => {
    setPageNumber(Number(page));
  }, [page]);

  const dataToShow = useMemo(() => {
    setStoreItem("page", "1");

    if (selectedTab?.includes("favorites")) {
      return allPokemon?.results.filter((pokemon) => keys.includes(pokemon.name));
    }

    return allPokemon?.results;
  }, [allPokemon?.results, selectedTab]);

  const filterData = useMemo(
    () => dataToShow?.filter((pokemon) => pokemon.name.startsWith(searchInput)),
    [dataToShow, searchInput]
  );

  const dataLength = useMemo(() => {
    if (selectedTab?.includes("favorites")) {
      return filterData?.filter((pokemon) => keys.includes(pokemon.name)).length;
    }

    return filterData?.length;
  }, [selectedTab, filterData, keys]);

  const handleChange = (page: number, pageSize: number) => {
    // this is for fast request (less data)
    // const offset = page * pageSize - pageSize;
    // getAllPokemon && getAllPokemon(offset, pageSize);

    setPageNumber(page);
    setStoreItem("page", String(page));
  };

  const onSearch = (value: string) => {
    setSearchInput(value);
    setStoreItem("page", "1");
  };

  if (pokemonId) return <Outlet />;

  if (isLoading)
    return (
      <div className={styles.loader}>
        <Spin />
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.search__container}>
        <Search
          placeholder="Search by pokémon name..."
          allowClear
          onSearch={onSearch}
          style={{ width: 400 }}
          enterButton
        />
        {!!searchInput && <label>Searched word is "{searchInput}"</label>}
      </div>

      <div className={styles.cardsContainer}>
        <PokemonCardList pokemonList={filterData!} itemsPerPage={ITEMS_PER_PAGE} />
      </div>

      {!filterData?.length && <OutData />}

      {!!filterData?.length && (
        <div className={styles.paginationContainer}>
          <Pagination
            className={styles.pagination}
            defaultPageSize={20}
            total={dataLength}
            showSizeChanger={false}
            current={pageNumber}
            hideOnSinglePage
            responsive
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};
export default PokemonList;
