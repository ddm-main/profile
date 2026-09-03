import { profile } from "@/data/profile";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div className={styles.links}>
          <a className={styles.link} href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className={styles.link} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className={styles.link} href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
