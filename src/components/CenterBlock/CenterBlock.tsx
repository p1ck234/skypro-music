"use client";
import Playlist from "../Playlist/Playlist";
import { TrackType } from "@/types/types";

export default function CenterBlock({
  tracks,
  playlist,
  isFavorite,
}: {
  tracks: TrackType[];
  playlist: TrackType[];
  isFavorite?: boolean;
}) {
  return (
    <>
      <Playlist tracks={tracks} playlist={playlist} isFavorite={isFavorite} />
    </>
  );
}
