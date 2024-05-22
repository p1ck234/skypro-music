import styles from "./Main.module.css";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import { SongList } from "../SongList/SongList";
import { Player } from "../Player/Player";

export const Main = async () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Menu />
          <SongList />
          <Sidebar />
        </main>
        <Player />
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
