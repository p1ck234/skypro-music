import clsx from "clsx";
import styles from "./Filter.module.css";
import { FC } from "react";

type Props = {
  title: string;
  list: string[];
  value: string;
  isOpen: boolean;
  onClick: (value: string) => void;
};

const Filter: FC<Props> = ({ title, list, value, isOpen, onClick }) => {
  return (
    <div className={styles.filterContainer}>
      <button
        className={clsx(styles.filterButton, styles._btnText, {
          [styles.filterButtonActive]: isOpen,
        })}
        onClick={() => onClick(value)}
      >
        {title}
      </button>
      {isOpen && (
        <ul className={styles.filterList}>
          {list.map((item, index) => (
            <li key={index} className={styles.filterItem}>
              <a href="#" className={styles.filterLink}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
