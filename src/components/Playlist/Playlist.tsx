"use client";

import Track from "../Track/Track";
import styles from "./Playlist.module.css";
import clsx from "clsx";
import { TrackType } from "@/types/types";

export default function Playlist({
  tracks,
  playlist,
}: {
  tracks: TrackType[];
  playlist: TrackType[];
}) {
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={clsx(styles.playlistTitleCol, styles.col01)}>Трек</div>
        <div className={clsx(styles.playlistTitleCol, styles.col02)}>
          Исполнитель
        </div>
        <div className={clsx(styles.playlistTitleCol, styles.col03)}>
          Альбом
        </div>
        <div className={clsx(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use href="/img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks?.map((track) => (
          <Track key={track.id} track={track} tracksData={playlist} />
        ))}
      </div>
    </div>
  );
}
