"use client";
import styles from "./CentarBlock.module.css";
import Filters from "../Filters/Filters";
import Search from "../Search/Search";
import Playlist from "../Playlist/Playlist";
import { TrackType } from "@/types/types";

export default function CenterBlock({
  tracks,
  playlist,
}: {
  tracks: TrackType[];
  playlist: TrackType[];
}) {
  return (
    <>
      {/* <Search /> */}
      {/* <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters /> */}
      <Playlist tracks={tracks} playlist={playlist} />
    </>
  );
}
