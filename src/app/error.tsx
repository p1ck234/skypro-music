"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorContainer}>
      <h2 className={styles.errorTitle}>Что-то пошло не так!</h2>
      <button className={styles.errorButton} onClick={reset}>
        Попробовать снова
      </button>
    </div>
  );
}
