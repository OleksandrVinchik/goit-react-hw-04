import styles from "./ErrorMessage.module.css";

export default function ErrorMessage({ message }) {
  return (
    <div className={styles["error-container"]}>
      <p className={styles.error}>{message}</p>
    </div>
  );
}
