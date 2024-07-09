"use client";
import Image from "next/image";
import styles from "./SingUp.module.css";
import clsx from "clsx";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/hooks";
import { useState } from "react";
import { postAuthUser } from "@/api/auth_reg_token";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

type SignupType = {
  email: string;
  password: string;
  username: string;
};

export const SingUp = () => {
  const dispatch = useAppDispatch();
  const [signupData, setSignupData] = useState<SignupType>({
    email: "",
    password: "",
    username: "",
  });

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = await postAuthUser(signupData);
      dispatch(setAuthState(true));
      dispatch(
        setUserData({
          username: userData.username,
          email: userData.email,
          id: userData.id,
        })
      );

      localStorage.setItem("user", JSON.stringify(userData));
      
      router.push("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        console.error("Unexpected error", error);
        alert("An unexpected error occurred");
      }
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormSignup} onSubmit={handleSignup}>
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  width={140}
                  height={21}
                  src="/img/logo_modal.png"
                  alt="logo"
                />
              </div>
            </Link>
            <input
              onChange={handleInputChange}
              className={clsx(styles.modalInput, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
            />
            <input
              onChange={handleInputChange}
              className={clsx(styles.modalInput, styles.username)}
              type="text"
              name="username"
              placeholder="Имя пользователя"
            />
            <input
              onChange={handleInputChange}
              className={clsx(styles.modalInput, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button type="submit" className={styles.modalBtnEnter}>
              <p className={styles.modalBtnEnterText}>Зарегистрироваться</p>
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signin">Войти</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
