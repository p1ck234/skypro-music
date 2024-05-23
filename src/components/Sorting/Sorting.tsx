"use client";
import styles from "./Sorting.module.css";
import clsx from "clsx";
import { FC, useState } from "react";
import Filter from "../Filter/Filter";
import { TrackType } from "@/types/types";

type Props = {
  tracks: TrackType[];
};

export const Sorting: FC<Props> = ({ tracks }) => {
  const [filterValue, setFilterValue] = useState<string | null>(null);
  const handledFilterValue = (value: string) => {
    setFilterValue((prev) => (prev === value ? null : value));
  };

  const sortingData = [
    {
      title: "исполнителю",
      list: Array.from(new Set(tracks.map((track) => track.author))),
      value: "author",
    },
    {
      title: "году выпуска",
      list: ["По умолчанию", "Сначала новые", "Сначала старые"],
      value: "release",
    },
    {
      title: "жанру",
      list: Array.from(new Set(tracks.map((track) => track.genre))),
      value: "genre",
    },
  ];
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
