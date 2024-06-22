import Bar from "@/components/Bar/Bar";
import styles from "./layout.module.css";
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
          <Header />
          {children}
        </main>
        <Bar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
