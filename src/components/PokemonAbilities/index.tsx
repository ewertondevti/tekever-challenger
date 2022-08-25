import { Ability } from "@Components/types";
import styles from "@Pages/Details/Details.module.scss";

type Props = {
  abilities: Array<Ability>;
};

const PokemonAbilities = ({ abilities }: Props) => {
  const isHiddenAbility = (ability: Ability) => {
    if (ability.is_hidden) {
      return styles.hiddenAbility;
    }

    return "";
  };

  return (
    <div className={styles.abilitiesContainer}>
      <span>Abilities:</span>
      {abilities?.map((ability) => (
        <span key={ability.ability.name} className={isHiddenAbility(ability)}>
          {ability.ability.name}
        </span>
      ))}
    </div>
  );
};
export default PokemonAbilities;
