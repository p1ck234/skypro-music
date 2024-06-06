"use client";
import styles from "./Main.module.css";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import { SongList } from "../SongList/SongList";
import Player from "../Player/Player";
import { TrackType } from "@/types/types";
import { FC } from "react";

type Props = {
  tracks: TrackType[];
};

export const Main: FC<Props> = ({ tracks }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Menu />
          <SongList tracks={tracks} />
          <Sidebar />
        </main>
        <Player />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
