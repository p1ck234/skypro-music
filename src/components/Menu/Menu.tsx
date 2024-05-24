"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";
import clsx from "clsx";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Image
          className={styles.logoImage}
          width={227}
          height={34}
          alt="Логотип"
          src="/img/logo.png"
        />
      </div>
      <div
        className={clsx(styles.navBurger, { [styles.open]: isOpen })}
        onClick={toggleMenu}
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <div
        className={clsx(styles.navMenu, styles.closeMenu, {
          [styles.openMenu]: isOpen,
        })}
      >
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Главное
            </a>
          </li>
          <li className={styles.menuItem}>
            <a href="#" className={styles.menuLink}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menuItem}>
            <Link href="/signin" className={styles.menuLink}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
