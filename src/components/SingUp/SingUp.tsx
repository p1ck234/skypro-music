"use client";
import { postRegUser } from "@/api/auth_reg_token";
import styles from "./SingUp.module.css";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
type SignupType = {
  email: string;
  username: string;
  passwordfirst: string;
  passwordrepeat: string;
};
export const SingUp = () => {
  const router = useRouter();
  const [emailActive, setEmailActive] = useState<boolean>(false);
  const [passwordActive, setPasswordActive] = useState<boolean>(false);
  const [passwordCorrect, setPasswordCorrect] = useState<boolean>(false);
  const [isNotFilled, setIsNotFilled] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<SignupType>({
    email: "",
    username: "",
    passwordfirst: "",
    passwordrepeat: "",
  });

  const hanleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIsSubmitted(false);
    setIsNotFilled(false);

    if (name === "email") {
      setEmailActive(true);
      if (value === "") {
        setEmailActive(false);
      }
    }

    if (name === "passwordfirst") {
      if (value.length > 7 && /[a-zA-z]/.test(value) && /[0-9]/.test(value)) {
        setPasswordCorrect(true);
      } else {
        setPasswordCorrect(false);
      }
      setPasswordActive(true);

      if (value === "") {
        setPasswordActive(false);
      }
    }

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignup = async (event: any) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (
      loginData.email === "" ||
      (loginData.passwordfirst === "" && loginData.passwordfirst.length < 8) ||
      loginData.passwordrepeat === ""
    ) {
      setIsNotFilled(true);
      return;
    }
    if (
      loginData.email !== "" &&
      loginData.passwordfirst === loginData.passwordrepeat
    ) {
      setIsNotFilled(false);
    }
    if (!isNotFilled) {
      await postRegUser(loginData)
        .then(() => {
          router.push("/signin");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

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
              onChange={hanleInputChange}
              className={clsx(styles.modalInput, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
            />
            {emailActive ? (
              <div className={styles.emailExample}>
                Пример: ivan_ivanov@mail.ru
              </div>
            ) : (
              ""
            )}
            <input
              onChange={hanleInputChange}
              className={clsx(styles.modalInput, styles.passwordFirst)}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            {passwordActive ? (
              <div
                className={clsx(
                  { [styles.passwordClueRed]: !passwordCorrect },
                  { [styles.passwordClueGreen]: passwordCorrect }
                )}
              >
                Минимум 8 символов из букв латиницей и цифр
              </div>
            ) : (
              ""
            )}
            <input
              onChange={hanleInputChange}
              className={clsx(styles.modalInput, styles.passwordDouble)}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button onClick={handleSignup} className={styles.modalBtnSingUp}>
              <Link href="/">Зарегистрироваться</Link>
            </button>
            {isNotFilled && isSubmitted ? (
              <div className={styles.notFilled}>
                Нужно заполнить все поля корректно
              </div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
