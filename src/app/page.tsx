import { getTracks } from "@/api/api";
import { TrackType } from "@/types/types";
import { Main } from "@components/Main/Main";

export const Home = async () => {
  let tracks: TrackType[] = [];
  let error: string | null = null;
  try {
    tracks = await getTracks();
  } catch (err: unknown) {
    error =
      err instanceof Error
        ? "Ошибка при загрузке треков. " + err.message
        : "Неизвестная ошибка";
  }
  return <Main tracks={tracks} />;
};

export default Home;
