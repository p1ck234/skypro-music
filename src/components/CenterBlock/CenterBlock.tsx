"use client";
import Playlist from "../Playlist/Playlist";
import { TrackType } from "@/types/types";
import styles from './CentarBlock.module.css'

export default function CenterBlock({
  tracks,
  playlist,
  isFavorite,
}: {
  tracks: TrackType[];
  playlist: TrackType[];
  isFavorite?: boolean;
}) {
  return (
    <div className={styles.contentPlaylist}>
      {tracks?.length === 0
          ? "Нет треков, удовлетворяющих условиям фильтра"
          : ""}
      {<Playlist tracks={tracks} playlist={playlist} isFavorite={isFavorite} />}
    </div>
  );
}
