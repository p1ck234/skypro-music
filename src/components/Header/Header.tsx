import Exit from "../Exit/Exit";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.centerBlockFlex}>
      <Navigation />
      <Search />
      <Exit />
    </div>
  );
};

export default Header;
