"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "./Player.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";
import { TrackType } from "@/types/types";
import clsx from "clsx";

type PlayerType = {
  track: TrackType;
};

export default function Player({ track }: PlayerType) {
  const audioRef = useRef<null | HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLoop, setIsLoop] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleLoop = () => {
    setIsLoop((prev) => !prev);
  };

  const duration = audioRef.current?.duration;

  const currentMinutes = Math.floor(currentTime / 60);
  const currentSeconds = Math.floor(currentTime % 60);
  const durationMinutes = Math.floor(Number(duration) / 60);
  const durationSeconds = Math.floor(Number(duration) % 60);
  const currentTimeFormatted = `${currentMinutes}:${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
  const durationFormatted = `${durationMinutes}:${
    durationSeconds < 10 ? "0" + durationSeconds : durationSeconds
  }`;

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const play = () => {
    audioRef.current?.play();
  };

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", () =>
      setCurrentTime(audioRef.current!.currentTime)
    );
    play();
  }, [track]);

  useEffect(() => {
    if (isLoop) {
      audioRef.current?.addEventListener("ended", play);
    } else {
      audioRef.current?.removeEventListener("ended", play);
    }
  }, [isLoop]);

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      setCurrentTime(Number(event.target.value));
      audioRef.current.currentTime = Number(event.target.value);
    }
  };

  const alertMessage = () => {
    alert("Еще не реализовано");
  };

  return (
    <div className={styles.bar}>
      <div className={styles.barContent}>
        <audio ref={audioRef} src={track.track_file}></audio>
        <ProgressBar
          max={duration}
          value={currentTime}
          step={0.01}
          onChange={handleSeek}
        />
        <div className={styles.trackTime}>
          {currentTimeFormatted} / {durationFormatted}
        </div>
        <div className={styles.barPlayerBlock}>
          <div className={clsx(styles.barPlayer, styles.player)}>
            <div className={styles.playerControls}>
              <div className={styles.playerBtnPrev} onClick={alertMessage}>
                <svg className={styles.playerBtnPrevSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-prev" />
                </svg>
              </div>
              <div
                onClick={togglePlay}
                className={clsx(styles.playerBtnPlay, styles._btn)}
              >
                <svg className={styles.playerBtnPlaySvg}>
                  <use
                    xlinkHref={`img/icon/sprite.svg#${
                      isPlaying ? "icon-pause" : "icon-play"
                    }`}
                  />
                </svg>
              </div>

              <div className={styles.playerBtnNext} onClick={alertMessage}>
                <svg className={styles.playerBtnNextSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-next" />
                </svg>
              </div>
              <div
                onClick={handleLoop}
                className={clsx(styles.playerBtnRepeat, styles._btnIcon, {
                  [styles._btnIcon_active]: isLoop,
                })}
              >
                <svg className={styles.playerBtnRepeatSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
                </svg>
              </div>
              <div
                className={clsx(styles.playerBtnShuffle, styles._btnIcon)}
                onClick={alertMessage}
              >
                <svg className={styles.playerBtnShuffleSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
                </svg>
              </div>
            </div>
            <div className={clsx(styles.playerTrackPlay, styles.trackPlay)}>
              <div className={styles.trackPlayContain}>
                <div className={styles.trackPlayImage}>
                  <svg className={styles.trackPlaySvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </svg>
                </div>
                <div className={styles.trackPlayAuthor}>
                  <a className={styles.trackPlayAuthorLink} href="http://">
                    {track.author}
                  </a>
                </div>
                <div className={styles.trackPlayAlbum}>
                  <a className={styles.trackPlayAlbumLink} href="http://">
                    {track.name}
                  </a>
                </div>
              </div>
              <div className={styles.trackPlayLikeDis}>
                <div className={clsx(styles.trackPlayLike, styles._btnIcon)}>
                  <svg className={styles.trackPlayLikeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-like" />
                  </svg>
                </div>
                <div className={clsx(styles.trackPlayDislike, styles._btnIcon)}>
                  <svg className={styles.trackPlayDislikeSvg}>
                    <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={clsx(styles.barVolumeBlock, styles.volume)}>
            <div className={styles.volumeContent}>
              <div className={styles.volumeImage}>
                <svg className={styles.volumeSvg}>
                  <use xlinkHref="img/icon/sprite.svg#icon-volume" />
                </svg>
              </div>
              <div className={clsx(styles.volumeProgress, styles._btn)}>
                <input
                  className={clsx(styles.volumeProgressLine, styles._btn)}
                  type="range"
                  name="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setVolume(Number(e.target.value))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
