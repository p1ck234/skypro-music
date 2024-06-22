"use client";

import { getFavoritesTracks } from "@/api/api";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getValueFromLocalStorage } from "@/utils/getValueFromLS";
import { setAuthState } from "@/store/features/authSlice";
import { TrackType } from "@/types/types";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

import { useEffect, useState } from "react";

export default function FavoriteTracksPage() {
  const token = useAppSelector((state) => state.auth.userData.access);
  const [tracksData, setTracksData] = useState<TrackType[]>([]);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    getFavoritesTracks(token)
      .then((data) => {
        setTracksData(data);
      })
      .catch((error) => {
        if (error.message === "401") {
          dispatch(setAuthState(false));
          router.push("/signin");
        } else {
          alert(error.message);
        }
      });
  }, [dispatch, router, token]);

  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>Мой плейлист</h2>
      <CenterBlock
        tracks={tracksData}
        playlist={tracksData}
        isFavorite={true}
      />
    </div>
  );
}
