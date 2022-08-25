import { Pokemon, PokemonTypes, PokemonTypesColors } from "@Components/types";
import styles from "@Pages/Details/Details.module.scss";

type Props = {
  typesList: Pokemon;
};

const PokemonType = ({ typesList }: Props) => {
  return (
    <div className={styles.pokemonTypes}>
      {typesList?.types.map((type) => (
        <span
          key={type.slot}
          className={styles.pokemonTypes__individual}
          style={{
            backgroundColor: PokemonTypesColors[type.type.name as keyof PokemonTypes],
          }}
        >
          {type.type.name}
        </span>
      ))}
    </div>
  );
};
export default PokemonType;
