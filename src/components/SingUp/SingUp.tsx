import styles from "./SingUp.module.css";
import clsx from "clsx";
import Image from "next/image";

export const SingUp = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <a href="../">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </a>
            <input
              className={clsx(styles.modalInput, styles.login)}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              className={clsx(styles.modalInput, styles.passwordFirst)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className={clsx(styles.modalInput, styles.passwordDouble)}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className={styles.modalBtnSingUp}>
              <a href="../index.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
