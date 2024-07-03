`use client`;

import { durationFormat } from "@/utils/utils";
import styles from "./Track.module.css";
import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setCurrentTrack, setIsPlaying } from "@/store/features/playlistSlice";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { setDislike, setLike } from "@/api/likes";
import { useRouter } from "next/navigation";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useLike } from "@/hooks/useLike";

type PlaylistType = {
  track: TrackType;
  tracksData: TrackType[];
  isFavorite?: boolean;
};

export default function Track({ track, tracksData, isFavorite }: PlaylistType) {
  const currentTrack = useAppSelector((state) => state.playlist.currentTrack);
  const isPlaying = useAppSelector((state) => state.playlist.isPlaying);
  const userData = useAppSelector((state) => state.auth.userData);
  const { name, author, album, duration_in_seconds, id, stared_user } = track;
  const isCurrentTrack = currentTrack ? currentTrack.id === id : false;
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {isLiked, handleLike} = useLike({track});
  // const isLikedByUser =
  //   isFavorite || stared_user.find((u) => u.id === userData?.id);
  // const [isLiked, setIsLiked] = useState(!!isLikedByUser);

  const logout = () => {
    dispatch(setAuthState(false));
    dispatch(setUserData(null));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const HandleTrackClick = () => {
    dispatch(setCurrentTrack({ track: { ...track, isFavorite }, tracksData }));
    dispatch(setIsPlaying(true));
  };



  // const handleLikeClick = () => {
  //   isLiked
  //     ? setDislike(userData?.access, id)
  //         .then(() => {})
  //         .catch((error) => {
  //           if (error) {
  //             const errorData = JSON.parse(error.message);
  //             if (errorData.status === 401) {
  //               logout();
  //               router.push("/signin");
  //             }
  //           }
  //         })
  //     : setLike(userData?.access, id)
  //         .then(() => {})
  //         .catch((error) => {
  //           if (error) {
  //             const errorData = JSON.parse(error.message);
  //             if (errorData.status === 401) {
  //               logout();
  //               router.push("/signin");
  //             }
  //           }
  //         });
  //   setIsLiked(!isLiked);
  // };

  // useEffect(() => {
  //   setIsLiked(!!isLikedByUser);
  // }, [track, isFavorite, userData, isLikedByUser]);

  return (
    <div onClick={HandleTrackClick} className={styles.playlistItem}>
      <div className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            <svg
              className={clsx(styles.trackTitleSvg, {
                [styles.trackIconIsplaying]: isPlaying && isCurrentTrack,
              })}
            >
              <use
                xlinkHref={`/img/icon/sprite.svg#${
                  isCurrentTrack ? "icon-isplaying" : "icon-note"
                }`}
              />
            </svg>
          </div>
          <div className={styles.trackTitleText}>
            <span className={styles.trackTitleLink}>
              {name} <span className={styles.trackTitleSpan} />
            </span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{album}</span>
        </div>
        <div onClick={handleLike} className={styles.trackTime}>
          <svg className={styles.trackTimeSvg}>
            <use
              xlinkHref={`/img/icon/sprite.svg#${
                isLiked ? "icon-like-active" : "icon-like"
              }`}
            />
          </svg>
          <span className={styles.trackTimeText}>
            {durationFormat(duration_in_seconds)}
          </span>
        </div>
      </div>
    </div>
  );
}
