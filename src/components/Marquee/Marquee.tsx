import { marquee } from "@/data/profile";
import styles from "./Marquee.module.scss";

export default function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.track}>
        {row.map((m, i) => (
          <span key={i} className={styles.item}>
            {m}
          </span>
        ))}
      </div>
      <span className={`${styles.fade} ${styles.left}`} />
      <span className={`${styles.fade} ${styles.right}`} />
    </div>
  );
}
