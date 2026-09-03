import styles from "./Backdrop.module.scss";

/** Ambient gradient field that every glass surface on the page sits on. */
export default function Backdrop() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={`${styles.blob} ${styles.a}`} />
      <div className={`${styles.blob} ${styles.b}`} />
      <div className={`${styles.blob} ${styles.c}`} />
      <div className={styles.grid} />
      <div className={styles.grain} />
    </div>
  );
}
