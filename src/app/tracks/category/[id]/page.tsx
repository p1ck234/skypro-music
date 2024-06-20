"use client";
import { getPlaylistTracks } from "@/api/api";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import styles from "../../layout.module.css";
type CategoryType = {
  params: { id: string };
};

export default async function CategoryPage({ params }: CategoryType) {
  const tracksData = await getPlaylistTracks(params.id);

  let title = "";
  switch (params.id) {
    case "1": // if (x === 'value1')
      title = "Плейлист дня";
      break;

    case "2": // if (x === 'value2')
      title = "100 танцевальных хитов";
      break;
    case "3": // if (x === 'value2')
      title = "Инди-заряд";
      break;
    default:
      break;
  }
  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>{title}</h2>
      <CenterBlock tracks={tracksData} playlist={tracksData} />
    </div>
  );
}
