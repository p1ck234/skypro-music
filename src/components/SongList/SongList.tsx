import { Search } from "../Search/Search";
import styles from "./SongList.module.css";
import clsx from "clsx";
import { getTracks } from "@/api/api";
import { TrackType } from "@/types/types";
import { Sorting } from "../Sorting/Sorting";

export const SongList = async () => {
  const tracks: TrackType[] = await getTracks();
  const uniqueAuthors = Array.from(
    new Set(tracks.map((track) => track.author))
  );
  console.log(uniqueAuthors);
  return (
    <div>
      <div className={clsx(styles.mainSongList, styles.songList)}>
        <Search />
        <h2 className={styles.songListHeading2}>Треки</h2>
        <Sorting />
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
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>

          <div className={clsx(styles.contentPlaylist, styles.playlist)}>
            {tracks.map((track: TrackType, index: number) => {
              return (
                <div className={styles.playlistItem} key={index}>
                  <div className={clsx(styles.playlistTrack, styles.track)}>
                    <div className={styles.trackTitle}>
                      <div className={styles.trackTitleImage}>
                        <svg className={styles.trackTitleSvg}>
                          <svg className={styles.trackTitleSvg}>
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                          </svg>
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
