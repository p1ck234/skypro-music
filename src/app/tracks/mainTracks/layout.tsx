import Bar from "@/components/Bar/Bar";
import Navigation from "@/components/Navigation/Navigation";
import SideBar from "@/components/SideBar/SideBar";
import styles from "../layout.module.css";

export default function TrackLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <Navigation />
      {children}
      <SideBar />
    </main>
  );
}
