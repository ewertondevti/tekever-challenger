import { GenericProp } from "@Components/types";
import { FETCH_URLS } from "@Components/utils";
import { Avatar, List } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../PokemonList.module.scss";

const { Item } = List;

type Props = {
  pokemon: GenericProp;
};

const PokemonCard = ({ pokemon }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const urlSplited = pokemon.url.split("/").filter((i) => i);
  const id = urlSplited[urlSplited.length - 1];
  const imgSrc = `${FETCH_URLS.sprite.replace("pokemonId", id)}`;
  const stringId = `Nº ${String(id).padStart(3, "0")}`;

  const pokemonFormatted = {
    ...pokemon,
    imgSrc,
  };

  return (
    <div
      key={pokemon.name}
      className={styles.cardItem}
      onClick={() => navigate(`${location.pathname}/${id}`)}
    >
      <img src={pokemonFormatted.imgSrc} alt={pokemon.name} />
      <div className={styles.pokemonInfo}>
        <small>{stringId}</small>
        <span>{pokemon.name}</span>
        <div className={styles.typesContainer}>
        </div>
      </div>
    </div>
  );
};
export default PokemonCard;
