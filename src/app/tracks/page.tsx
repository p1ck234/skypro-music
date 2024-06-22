"use client";
import { getTracks } from "@/api/api";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setInitialTracks } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";
import Filters from "@/components/Filters/Filters";
import Search from "@/components/Search/Search";
import SideBar from "@/components/SideBar/SideBar";

export default function MainTrackPage() {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );

  useEffect(() => {
    getTracks().then((tracksData) => {
      setTracks(tracksData);
      dispatch(setInitialTracks({ initialTracks: tracksData }));
    });
  }, [dispatch]);

  return (
    <>
      <div className={styles.mainCenterblock}>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filters />
        <CenterBlock tracks={filteredTracks} playlist={tracks} />
      </div>
      <SideBar />
    </>
  );
}
