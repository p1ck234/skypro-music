import styles from "./Sidebar.module.css";
import Image from "next/image";
import clsx from "clsx";

export const Sidebar = () => {
  return (
    <div>
      <div className={clsx(styles.mainSidebar, styles.sidebar)}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
          <div className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="/img/playlist01.png"
                  alt="day's playlist"
                  width={250}
                  height={150}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImg}
                  src="/img/playlist02.png"
                  alt="day's playlist"
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  width={250}
                  height={150}
                  className={styles.sidebarImg}
                  src="/img/playlist03.png"
                  alt="day's playlist"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
