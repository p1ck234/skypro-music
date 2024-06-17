import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import SideBar from "@/components/SideBar/SideBar";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          <CenterBlock />
          <SideBar />
        </main>
        <Bar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
