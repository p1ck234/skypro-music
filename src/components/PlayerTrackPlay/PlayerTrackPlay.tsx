import { useState, useEffect } from "react";
import { TrackType } from "@/types/types";
import styles from "./PlayerTrackPlay.module.css";
import clsx from "clsx";
import { setDislike, setLike } from "@/api/likes";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useLike } from "@/hooks/useLike";

type TrackPlayType = {
  track: TrackType;
};

export default function PlayerTrackPlay({ track }: TrackPlayType) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userData = useAppSelector((state) => state.auth.userData);
  const {isLiked, handleLike} = useLike({track});
  // const [isLiked, setIsLiked] = useState<boolean>(false);

  // useEffect(() => {
  //   if (userData && track && track.stared_user) {
  //     setIsLiked(track.stared_user.some((u) => u.id === userData.id));
  //   }
  // }, [track, userData]);

  const logout = () => {
    dispatch(setAuthState(false));
    dispatch(setUserData(null));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  // const handleLikeClick = () => {
  //   if (!track || !userData) return;

  //   isLiked
  //     ? setDislike(userData.access, track.id)
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
  //     : setLike(userData.access, track.id)
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

  // const handleDislikeClick = () => {
  //   if (!track || !userData) return;

  //   !isLiked
  //     ? setLike(userData.access, track.id)
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
  //     : setDislike(userData.access, track.id)
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

  return (
    <div className={styles.playerTrackPlay}>
      <div className={styles.trackPlayContain}>
        <div className={styles.trackPlayImage}>
          <svg className={styles.trackPlaySvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-note" />
          </svg>
        </div>
        <div className={styles.trackPlayAuthor}>
          <span className={styles.trackPlayAuthorLink}>{track.name}</span>
        </div>
        <div className={styles.trackPlayAlbum}>
          <span className={styles.trackPlayAlbumLink}>{track.author}</span>
        </div>
      </div>
      <div className={styles.trackPlayLikeDis}>
        <div
          className={clsx(styles.trackPlayLike, styles.btnIcon)}
          onClick={handleLike}
        >
          <svg className={styles.trackPlayLikeSvg}>
            <use
              xlinkHref={`/img/icon/sprite.svg#${
                isLiked ? "icon-like-active" : "icon-like"
              }`}
            />
          </svg>
        </div>
        <div
          className={clsx(styles.trackPlayDislike, styles.btnIcon)}
          onClick={handleLike}
        >
          <svg className={styles.trackPlayDislikeSvg}>
            <use xlinkHref="/img/icon/sprite.svg#icon-dislike" />
          </svg>
        </div>
      </div>
    </div>
  );
}
