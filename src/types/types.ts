import { ChangeEvent } from "react";

export type userType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  refresh: string;
};

export type TrackType = {
  isFavorite?: boolean;
  id: number;
  name: string;
  author: string;
  release_date: string;
  genre: string;
  duration_in_seconds: number;
  album: string;
  logo: string | null;
  track_file: string;
  stared_user: userType[];
  onClick: () => void;
};
export type ErrorType = {
  error: Error;
  reset: () => void;
};

export type VolumeType = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type PlayerControlsType = {
  togglePlay: () => void;
  isPlaying: boolean;
  isLooping: boolean;
  toggleLoop: () => void;
};
