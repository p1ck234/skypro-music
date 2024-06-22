"use client";
import { getPlaylistTracks } from "@/api/api";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useEffect, useState } from "react";
import { TrackType } from "@/types/types";
import { setInitialTracks } from "@/store/features/playlistSlice";
type CategoryType = {
  params: { id: string };
};

export default function CategoryPage({ params }: CategoryType) {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );

  useEffect(() => {
    getPlaylistTracks(params.id)
      .then((tracksData) => {
        setTracks(tracksData);
        dispatch(setInitialTracks({ initialTracks: tracksData }));
      })
      .catch((error: any) => {
        throw new Error(error.message);
      });
  }, [dispatch]);

  let title = "";
  switch (params.id) {
    case "1": // if (x === 'value1')
      title = "Плейлист дня";
      break;

    case "2": // if (x === 'value2')
      title = "100 танцевальных хитов";
      break;
    case "3": // if (x === 'value2')
      title = "Инди-заряд";
      break;
    default:
      break;
  }
  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>{title}</h2>
      <CenterBlock tracks={filteredTracks} playlist={tracks} />
    </div>
  );
}
