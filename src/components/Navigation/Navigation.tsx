"use client";
import { useState } from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { clearLikedTracks } from "@/store/features/playlistSlice"; // Импортируем экшен

export default function Navigation() {
  const logged = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const logout = () => {
    dispatch(setAuthState(false));
    dispatch(setUserData(null));
    dispatch(clearLikedTracks()); // Очищаем лайкнутые треки
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Link href="/">
          <Image
            className={styles.logoImage}
            src="/img/logo.png"
            alt="Логотип скайпро музыка"
            width={133}
            height={17}
          />
        </Link>
      </div>
      <div
        onClick={() => setIsOpened((prev) => !prev)}
        className={styles.navBurger}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      {isOpened && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/tracks/favorite" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menuItem}>
              {logged ? (
                <Link onClick={logout} href="/" className={styles.menuLink}>
                Выйти
              </Link>
              ) : (
                <Link href="/signin" className={styles.menuLink}>
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
