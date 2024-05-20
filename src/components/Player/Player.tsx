import styles from "./Player.module.css";
import clsx from "clsx";

export const Player = () => {
  return (
    <div>
      <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.barPlayerProgress}></div>
          <div className={styles.barPlayerBlock}>
            <div className={clsx(styles.barPlayer, styles.player)}>
              <div className={styles.playerControls}>
                <div className={styles.playerBtnPrev}>
                  <svg className={styles.playerBtnPrevSvg}>
                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div className={clsx(styles.playerBtnPlay, styles._btn)}>
                  <svg className={styles.playerBtnPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-play"></use>
                  </svg>
                </div>
                <div className={styles.playerBtnNext}>
                  <svg className={styles.playerBtnNextSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div className={clsx(styles.playerBtnRepeat, styles._btnIcon)}>
                  <svg className={styles.playerBtnRepeatSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-repeat"></use>
                  </svg>
                </div>
                <div className={clsx(styles.playerBtnShuffle, styles._btnIcon)}>
                  <svg className={styles.playerBtnShuffleSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={clsx(styles.playerTrackPlay, styles.trackPlay)}>
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackPlayAuthor}>
                    <a className={styles.trackPlayAuthorLink} href="http://">
                      Ты та...
                    </a>
                  </div>
                  <div className={styles.trackPlayAlbum}>
                    <a className={styles.trackPlayAlbumLink} href="http://">
                      Баста
                    </a>
                  </div>
                </div>

                <div className={styles.trackPlayLikeDis}>
                  <div className={clsx(styles.trackPlayLike, styles._btnIcon)}>
                    <svg className={styles.trackPlayLikeSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div
                    className={clsx(styles.trackPlayDislike, styles._btnIcon)}
                  >
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx(styles.barVolumeBlock, styles.volume)}>
              <div className={styles.volumeContent}>
                <div className={styles.volumeImage}>
                  <svg className={styles.volumeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
                  </svg>
                </div>
                <div className={clsx(styles.volumeProgress, styles._btn)}>
                  <input
                    className={clsx(styles.volumeProgressLine, styles._btn)}
                    type="range"
                    name="range"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
