import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBody}>
        <div className={styles.title}>Title</div>
        <nav className={styles.navbar}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                link 1
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                link 2
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>
                link 3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
