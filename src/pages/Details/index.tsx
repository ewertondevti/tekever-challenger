import BaseStats from "@Components/BaseStats";
import Moves from "@Components/Moves";
import PokemonAbilities from "@Components/PokemonAbilities";
import PokemonSprites from "@Components/PokemonSprites";
import PokemonType from "@Components/PokemonType";
import { FETCH_URLS } from "@Components/utils";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faAngleLeft, faStar as faStarFavorited } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppData from "@Store/hooks/useAppData";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.scss";

const Details = () => {
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const { pokemonDetails, getPokemonDetails } = useAppData();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (getPokemonDetails) {
      getPokemonDetails(pokemonId!);
    }
  }, [pokemonId]);

  useEffect(() => {
    const storedPokemonId = localStorage.getItem(pokemonDetails?.name!);
    if (!!storedPokemonId) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [pokemonDetails]);

  const pokemonNum = `Nº${pokemonId?.padStart(3, "0")}`;

  const handleFavorite = () => {
    const storedPokemonId = localStorage.getItem(pokemonDetails?.name!);

    if (storedPokemonId === String(pokemonDetails?.id)) {
      localStorage.removeItem(pokemonDetails?.name!);
      setIsFavorite(false);
    } else {
      localStorage.setItem(pokemonDetails?.name!, String(pokemonDetails?.id!));
      setIsFavorite(true);
    }
  };

  const isFavoritePokemon = () => {
    if (isFavorite) {
      return { icon: faStarFavorited, color: "gold" };
    }

    return { icon: faStar, color: "#212121" };
  };

  const handleGoBack = () => navigate(-1);

  return (
    <div className={styles.pokemonDetails}>
      <div className={styles.title}>
        <div className={styles.backIcon} onClick={handleGoBack}>
          <FontAwesomeIcon icon={faAngleLeft} size="1x" />
          <span>Back</span>
        </div>
        <h1>{pokemonDetails?.name}</h1>
        <h1 style={{ color: "#616161" }}>{pokemonNum}</h1>
        <div className={styles.favoriteIcon__container} onClick={handleFavorite}>
          <FontAwesomeIcon size="2x" {...isFavoritePokemon()} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={FETCH_URLS.sprite.replace("pokemonId", pokemonId!)} alt={pokemonId} />

        <div className={styles.sideInfo}>
          <PokemonAbilities abilities={pokemonDetails?.abilities!} />

          <PokemonType typesList={pokemonDetails!} />

          <PokemonSprites pokemonSprites={pokemonDetails?.sprites!} />
        </div>

        <BaseStats baseStats={pokemonDetails?.stats!} />

        <Moves moves={pokemonDetails?.moves!} />
      </div>
    </div>
  );
};
export default Details;
