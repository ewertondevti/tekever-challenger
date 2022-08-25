import pokedexLogo from "@Assets/logo.svg";
import HeaderMenu from "@Components/HeaderMenu";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <div className={styles.content}>
      <img src={pokedexLogo} alt="Pokedéx Logo" onClick={handleClick} />

      <HeaderMenu />
    </div>
  );
};
export default Header;
