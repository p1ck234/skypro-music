import { getPlaylistTracks } from "@/api/api";
import CenterBlock from "@/components/CenterBlock/CenterBlock";

type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  const tracksData = await getPlaylistTracks(params.id);
  return (
    <>
      <CenterBlock tracks={tracksData} playlist={tracksData} />
    </>
  );
}
