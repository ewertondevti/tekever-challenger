import { Sprite } from "@Components/types";
import styles from "@Pages/Details/Details.module.scss";

type Props = {
  pokemonSprites: Sprite;
};

const PokemonSprites = ({ pokemonSprites }: Props) => {
  if (!pokemonSprites) return <></>;

  return (
    <div className={styles.sprites__container}>
      <span>Other Sprites</span>
      <div className={styles.sprites__sprites}>
        {Object.keys(pokemonSprites).map((key) => {
          const imgSrc = pokemonSprites[String(key) as keyof Sprite];
          if (!!imgSrc && typeof imgSrc !== "object") return <img key={imgSrc} src={imgSrc} />;
          return <></>;
        })}
      </div>
    </div>
  );
};
export default PokemonSprites;
