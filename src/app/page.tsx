import { getTracks } from "@/api/api";
import { TrackType } from "@/types/types";
import { Main } from "@components/Main/Main";

export const Home = async () => {
  const tracks: TrackType[] = await getTracks();
  return <Main tracks={tracks} />;
};

export default Home;
