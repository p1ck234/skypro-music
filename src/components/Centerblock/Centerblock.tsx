import styles from "./Centerblock.module.css";
import clsx from "clsx";

export const Centerblock = () => {
  return (
    <div>
      <div className={clsx(styles.centerblock, styles.centerblock)}>
        {/* <div class="centerblock__search search">
          <svg class="search__svg">
            <use xlink:href="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            class="search__text"
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div> */}
        <h2 className={styles.centerBlockHeading2}>Треки</h2>
        {/* <div class="centerblock__filter filter">
          <div class="filter__title">Искать по:</div>
          <div class="filter__button button-author _btn-text">исполнителю</div>
          <div class="filter__button button-year _btn-text">году выпуска</div>
          <div class="filter__button button-genre _btn-text">жанру</div>
        </div> */}
        <div
          className={clsx(styles.centerBlockContent, styles.playlistContent)}
        >
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
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <div className={clsx(styles.contentPlaylist, styles.playlist)}>
            <div className={styles.playlistItem}>
              <div className={clsx(styles.playlistTrack, styles.track)}>
                <div className={styles.trackTitle}>
                  <div className={styles.trackTitleImage}>
                    <svg className={styles.trackTitleSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.trackListText}>
                    <a className={styles.trackListLink} href="http://">
                      Guilt
                      <span className={styles.trackTitleSpan}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.trackAuthor}>
                  <a className={styles.trackAuthorLink} href="http://">
                    Nero
                  </a>
                </div>
                <div className={styles.trackAlbum}>
                  <a className={styles.trackAlbumLink} href="http://">
                    Welcome Reality
                  </a>
                </div>
                <div className={styles.trackTime}>
                  <svg className={styles.trackTimeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.trackTimeText}>4:44</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
