import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getFavoritesTracks } from "@/api/api";
import { setLikedTracks } from "@/store/features/playlistSlice";
import { TrackType } from "@/types/types";

export const useInitLikes = () => {
  const token = useAppSelector((state) => state.auth.token?.access);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      getFavoritesTracks(token)
        .then((data) => {
          dispatch(setLikedTracks(data.map((track: TrackType) => track.id)));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, token]);
};
