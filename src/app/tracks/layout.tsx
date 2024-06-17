import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import SideBar from "@/components/SideBar/SideBar";
import styles from "./layout.module.css";

export default function TrackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Navigation />
          {children}
          <SideBar />
        </main>
        <Bar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
