"use client";
import Image from "next/image";
import styles from "./SingIn.module.css";
import clsx from "clsx";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/hooks";
import { useState } from "react";
import { postLoginUser, postToken } from "@/api/auth_reg_token";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

type SigninType = {
  email: string;
  password: string;
};

export const SingIn = () => {
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState<SigninType>({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const userData = await postLoginUser(loginData);
      dispatch(setAuthState(true));
      dispatch(
        setUserData({
          username: userData.username,
          email: userData.email,
          id: userData.id,
        })
      );

      localStorage.setItem("user", JSON.stringify(userData));

      const tokenData = await postToken(loginData);
      localStorage.setItem(
        "token",
        JSON.stringify({ access: tokenData.access, refresh: tokenData.refresh })
      );
      dispatch(
        setUserData({ refresh: tokenData.refresh, access: tokenData.access })
      );

      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} onSubmit={handleSignin}>
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
              className={clsx(styles.modalInput, styles.password)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button type="submit" className={styles.modalBtnEnter}>
              <p className={styles.modalBtnEnterText}>Войти</p>
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
