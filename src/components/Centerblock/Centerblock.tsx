import { Filter } from "../Filter/Filter";
import { Search } from "../Search/Search";
import styles from "./Centerblock.module.css";
import clsx from "clsx";
import { getTracks } from "@/api/api";

export const Centerblock = async () => {
  const tracks = await getTracks();
  console.log(tracks);

  return (
    <div>
      <div className={clsx(styles.centerblock, styles.centerblock)}>
        <Search />
        <h2 className={styles.centerBlockHeading2}>Треки</h2>
        <Filter />
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
            {tracks.map((track, index) => {
              return (
                <div className={styles.playlistItem} key={index}>
                  <div className={clsx(styles.playlistTrack, styles.track)}>
                    <div className={styles.trackTitle}>
                      <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                          <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
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
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                      <span className={styles.trackTimeText}>4:44</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
