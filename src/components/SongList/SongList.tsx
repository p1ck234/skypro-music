"use client";
import { FC } from "react";
import { TrackType } from "@/types/types";
import clsx from "clsx";
import styles from "./SongList.module.css";
import { Search } from "../Search/Search";
import { Sorting } from "../Sorting/Sorting";

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
              <div
                className={styles.playlistItem}
                key={track.id}
                onClick={() => setTrack(track)}
              >
                <div className={clsx(styles.playlistTrack, styles.track)}>
                  <div className={styles.trackTitle}>
                    <div className={styles.trackTitleImage}>
                      <svg className={styles.trackTitleSvg}>
                        <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={styles.trackListText}>
                      <a className={styles.trackListLink} href="#">
                        {track.name}
                        <span className={styles.trackTitleSpan}></span>
                      </a>
                    </div>
                  </div>
                  <div className={styles.trackAuthor}>
                    <a className={styles.trackAuthorLink} href="#">
                      {track.author}
                    </a>
                  </div>
                  <div className={styles.trackAlbum}>
                    <a className={styles.trackAlbumLink} href="#">
                      {track.album}
                    </a>
                  </div>
                  <div className={styles.trackTime}>
                    <svg className={styles.trackTimeSvg}>
                      <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                    <span className={styles.trackTimeText}>
                      {formatDuration(track.duration_in_seconds)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
