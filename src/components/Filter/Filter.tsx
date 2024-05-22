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
    <div>
      <button
        className={clsx(
          styles.filterButton,
          styles.buttonYear,
          styles._btnText
        )}
        onClick={() => onClick(value)}
      >
        {title}
      </button>
      {isOpen && (
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
