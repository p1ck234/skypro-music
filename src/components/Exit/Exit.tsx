"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import styles from "./Exit.module.css";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useEffect, useState } from "react";
import { clearLikedTracks } from "@/store/features/playlistSlice";

const Exit = () => {
  const dispatch = useAppDispatch();
  const [isHydrated, setIsHydrated] = useState(false); // Track hydration state
  const logged = useAppSelector((state) => state.auth.authState);
  const userName = useAppSelector((state) => state.auth.userData);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const logout = () => {
    dispatch(setAuthState(false));
    dispatch(setUserData(null));
    dispatch(clearLikedTracks()); // Очищаем лайкнутые треки
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  if (!isHydrated) {
    return null;
  }

  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{userName?.email}</p>
      {logged && (
        <div onClick={logout} className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Exit;
