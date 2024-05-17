import Image from "next/image";
import styles from "./SingIn.module.css";
import clsx from "clsx";

export const SingIn = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <a href="../">
              <div className={styles.modalLogo}>
                <Image
                  width={140}
                  height={21}
                  src="/img/logo_modal.png"
                  alt="logo"
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
              className={clsx(styles.modalInput, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button className={styles.modalBtnEnter}>
              <a href="../index.html">Войти</a>
            </button>
            <button className={styles.modalBtnSignup}>
              <a href="signup.html">Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
