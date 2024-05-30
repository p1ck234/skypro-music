"use client";
import styles from "./Main.module.css";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import { SongList } from "../SongList/SongList";
import Player from "../Player/Player";
import { TrackType } from "@/types/types";
import { FC, useState } from "react";

type Props = {
  tracks: TrackType[];
};

export const Main: FC<Props> = ({ tracks }) => {
  const [track, setTrack] = useState<TrackType | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Menu />
          <SongList tracks={tracks} setTrack={setTrack} />
          <Sidebar />
        </main>
        {track && <Player track={track} />}

        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
