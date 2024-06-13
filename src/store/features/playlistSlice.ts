import { TrackType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlaylistStateType = {
  currentTrack: null | TrackType;
  tracks: TrackType[];
  shuffledTracks: TrackType[];
  isPlaying: boolean;
  isShuffle: boolean;
};

const initialState: PlaylistStateType = {
  currentTrack: null,
  tracks: [],
  shuffledTracks: [],
  isShuffle: false,
  isPlaying: true,
};

const PlaylistSlice = createSlice({
  name: "Playlist",
  initialState,
  reducers: {
    SetCurrentTrack: (
      state,
      action: PayloadAction<{ currentTrack: TrackType; tracks: TrackType[] }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.tracks = action.payload.tracks;
      state.shuffledTracks = [...action.payload.tracks].sort(
        () => 0.5 - Math.random()
      );
    },
    setNextTrack: (state) => {
      // вызывать через dispatch на кнопке следующего трека
      const playlist = state.isShuffle ? state.shuffledTracks : state.tracks;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex + 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setPrevTrack: (state) => {
      // вызывать через dispatch на кнопке предыдущего трека
      const playlist = state.isShuffle ? state.shuffledTracks : state.tracks;
      const currentTrackIndex = playlist.findIndex(
        (track) => track.id === state.currentTrack?.id
      );
      const newTrack = playlist[currentTrackIndex - 1];
      if (newTrack) {
        state.currentTrack = newTrack;
      }
    },
    setIsShuffle: (state) => {
      // вызывать на кнопке перемешивания
      state.isShuffle = !state.isShuffle;
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const {
  SetCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsShuffle,
  setIsPlaying,
} = PlaylistSlice.actions;
export const playlistReducer = PlaylistSlice.reducer;
