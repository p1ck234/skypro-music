import { TrackType } from "@/types/types";
import { useAppDispatch, useAppSelector } from "./hooks";
import { setDislike, setLike as setApiLike } from "@/api/likes";
import { setLike } from "@/store/features/playlistSlice";

export const useLike = ({ track }: { track: TrackType }) => {
  const token = useAppSelector((state) => state.auth.token?.access);
  const likedTracks = useAppSelector((state) => state.playlist.likedTracks);
  const dispatch = useAppDispatch();
  const isLiked = likedTracks.includes(track.id);
  const handleLike = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (!token) {
      alert("Авторизируйтесь!");
      return;
    }
    const action = isLiked ? setDislike : setApiLike;
    try {
      await action(token, track.id);
      dispatch(setLike({ id: track.id }));
    } catch (err) {
      console.log(err);
    }
  };

  return { isLiked, handleLike };
};
