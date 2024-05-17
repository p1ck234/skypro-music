import styles from "./Main.module.css";
import { Menu } from "../Menu/Menu";
import { Sidebar } from "../Sidebar/Sidebar";
import { Centerblock } from "../Centerblock/Centerblock";
import { Player } from "../Player/Player";

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Menu />
          <Centerblock />
          <Sidebar /> */}
        </main>
        {/* <Player /> */}
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
};
