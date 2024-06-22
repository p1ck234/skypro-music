import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import SideBar from "@/components/SideBar/SideBar";
import styles from "./layout.module.css";
import Search from "@/components/Search/Search";
import Header from "@/components/Header/Header";

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          {/* <Navigation /> */}
          <Header />
          {children}
        </main>
        <Bar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
