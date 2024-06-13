import { FC } from "react";
import { TrackType } from "@/types/types";
import clsx from "clsx";
import styles from "./SongList.module.css";
import { Search } from "../Search/Search";
import { Sorting } from "../Sorting/Sorting";
import Track from "../Track/Track";

type Props = {
  tracks: TrackType[];
};

export const SongList: FC<Props> = ({ tracks }) => {
  return (
    <div>
      <div className={clsx(styles.mainSongList, styles.songList)}>
        <Search />
        <h2 className={styles.songListHeading2}>Треки</h2>
        <Sorting tracks={tracks} />
        <div className={clsx(styles.songListContent, styles.playlistContent)}>
          <div className={clsx(styles.contentTitle, styles.playlistTitle)}>
            <div className={clsx(styles.playlistTitleCol, styles.col01)}>
              Трек
            </div>
            <div className={clsx(styles.playlistTitleCol, styles.col02)}>
              Исполнитель
            </div>
            <div className={clsx(styles.playlistTitleCol, styles.col03)}>
              Альбом
            </div>
            <div className={clsx(styles.playlistTitleCol, styles.col04)}>
              <svg className={styles.playlistTitleSvg}>
                <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>

          <div className={clsx(styles.contentPlaylist, styles.playlist)}>
            {tracks.map((track) => (
              <Track key={track.id} track={track} tracks={tracks} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
