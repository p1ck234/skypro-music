import styles from "./Filter.module.css";
import clsx from "clsx";

export const Filter = () => {
  return (
    <div className={clsx(styles.centerblockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      <div
        className={clsx(
          styles.filterButton,
          styles.buttonAuthor,
          styles._btnText
        )}
      >
        исполнителю
      </div>
      <div
        className={clsx(
          styles.filterButton,
          styles.buttonYear,
          styles._btnText
        )}
      >
        году выпуска
      </div>
      <div
        className={clsx(
          styles.filterButton,
          styles.buttonGenre,
          styles._btnText
        )}
      >
        жанру
      </div>
    </div>
  );
};
