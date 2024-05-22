"use client";
import styles from "./Sorting.module.css";
import clsx from "clsx";
import { sortingData } from "./data";
import { useState } from "react";
import Filter from "../Filter/Filter";

export const Sorting = () => {
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const handledFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };

  return (
    <div className={clsx(styles.centerBlockFilter, styles.filter)}>
      <div className={styles.filterTitle}>Искать по:</div>
      {sortingData.map((item, index) => (
        <Filter
          key={index}
          title={item.title}
          list={item.list}
          onClick={handledFilterValue}
          value={item.value}
          isOpen={filterValue === item.value}
        />
      ))}
    </div>
  );
};
