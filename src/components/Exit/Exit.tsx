import styles from "./Exit.module.css"

const Exit = () => {
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
      <div className={styles.sidebarIcon}>
        <svg>
          <use href="/img/icon/sprite.svg#logout" />
        </svg>
      </div>
    </div>
  );
};

export default Exit;
