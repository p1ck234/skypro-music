"use client";

import { getFavoritesTracks } from "@/api/api";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setAuthState } from "@/store/features/authSlice";
import { TrackType } from "@/types/types";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FavoriteTracksPage() {
  const token = useAppSelector((state) => state.auth.token?.access);
  const authState = useAppSelector((state) => state.auth.authState);
  const [tracksData, setTracksData] = useState<TrackType[]>([]);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!authState || !token) {
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getFavoritesTracks(token as string);
        setTracksData(data);
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          alert("Вам необходимо авторизоваться!");
          dispatch(setAuthState(false));
          router.push("/signin");
        } else {
          if (error instanceof Error) {
            alert(error.message);
          } else {
            alert("An unknown error occurred");
          }
        }
      }
    };

    fetchData();
  }, [authState, dispatch, router, token]);

  useEffect(() => {
    if (!authState) {
      alert("Вам необходимо авторизоваться!");
      router.push("/signin");
    }
  }, [authState, router]);

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
