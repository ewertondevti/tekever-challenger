import { FETCH_URLS } from "@Components/utils";
import { type } from "os";
export type AllPokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<GenericProp>;
};

export type Pokemon = {
  abilities: Array<Ability>;
  base_experience: number;
  forms: Array<Pokemon>;
  game_indices: Array<GameIndex>;
  height: number;
  held_items: Array<GenericProp>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<Move>;
  name: string;
  order: number;
  past_types: Array<GenericProp>;
  species: GenericProp;
  sprites: Sprite;
  versions: any;
  stats: Array<Stat>;
  weight: number;
  types: Array<PokemonType>;
  isFavorite: boolean;
};

export type GenericProp = {
  name: string;
  url: string;
};

export type Ability = {
  ability: GenericProp;
  is_hidden: boolean;
  slot: number;
};

export type GameIndex = {
  game_index: number;
  version: GenericProp;
};

export type Move = {
  move: GenericProp;
  version_group_details: Array<VersionGroupDetail>;
};

export type VersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: GenericProp;
  version_group: GenericProp;
};

export type Sprite = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: any;
  versions: any;
};

export type Stat = {
  base_stat: number;
  effort: number;
  stat: GenericProp;
};

export type PokemonType = {
  slot: number;
  type: GenericProp;
};

export type PokemonTypes = {
  normal: string;
  fighting: string;
  flying: string;
  poison: string;
  ground: string;
  rock: string;
  bug: string;
  ghost: string;
  steel: string;
  fire: string;
  water: string;
  grass: string;
  electric: string;
  psychic: string;
  ice: string;
  dragon: string;
  dark: string;
  fairy: string;
};

export enum PokemonTypesColors {
  normal = "#a4acaf",
  fighting = "#d56723",
  flying = "#3dc7ef",
  poison = "#b97fc9",
  ground = "#f7de3f",
  rock = "#a38c21",
  bug = "#729f3f",
  ghost = "#7b62a3",
  steel = "#9eb7b8",
  fire = "#fd7d24",
  water = "#4592c4",
  grass = "#9bcc50",
  electric = "#eed535",
  psychic = "#f366b9",
  ice = "#51c4e7",
  dragon = "#53a4cf",
  dark = "#707070",
  fairy = "#fdb9e9",
}
