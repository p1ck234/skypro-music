import styles from "./Search.module.css";
import clsx from "clsx";

export const Search = () => {
  return (
    <div className={clsx(styles.centerblockSearch, styles.search)}>
      <svg className={styles.searchSvg}>
        <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
};
