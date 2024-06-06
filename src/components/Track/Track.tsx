import React, { FC } from "react";
import clsx from "clsx";
import styles from "./Track.module.css";
import { formatDuration } from "@/utils/formatDuration";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { SetCurrentTrack } from "@/store/features/playlistSlice";

type Props = {
  tracks: TrackType[];
  track: TrackType;
};

const Track: FC<Props> = ({ track, tracks }) => {
  const { name, author, album, duration_in_seconds, id } = track;
  const dispatch = useAppDispatch();
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  return (
    <div
      className={styles.playlistItem}
      onClick={() =>
        dispatch(SetCurrentTrack({ currentTrack: track, tracks: tracks }))
      }
    >
      <div className={clsx(styles.playlistTrack, styles.track)}>
        <div className={styles.trackTitle}>
          <div
            className={clsx(styles.trackTitleImage, {
              [styles.trackTitleImageActive]:
                isPlaying && currentTrack?.id === id,
              [styles.trackTitleImageNotActive]:
                !isPlaying && currentTrack?.id === id,
            })}
          >
            <svg className={styles.trackTitleSvg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
            </svg>
          </div>
          <div className={styles.trackListText}>
            <a className={styles.trackListLink} href="#">
              {name}
              <span className={styles.trackTitleSpan}></span>
            </a>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <a className={styles.trackAuthorLink} href="#">
            {author}
          </a>
        </div>
        <div className={styles.trackAlbum}>
          <a className={styles.trackAlbumLink} href="#">
            {album}
          </a>
        </div>
        <div className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className={styles.trackTimeText}>
            {formatDuration(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Track;
