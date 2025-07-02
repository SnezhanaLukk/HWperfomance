import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [toggled, setToggled] = useState(false);

  const onClick = () => {
    if (!toggled) {
      setToggled(true);
    }
    setExpanded(!expanded);
  };

  // Определяем классы для меню
  const linksClasses = [
    styles.links,
    expanded ? styles.linksOpened : "",
    toggled ? styles.linksToggled : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo} aria-label="Яндекс.Дом"></a>
      <button
        className={styles.menuButton}
        aria-expanded={expanded}
        onClick={onClick}
      >
        <span className={styles.menuText}>
          {expanded ? "Закрыть меню" : "Открыть меню"}
        </span>
      </button>
      <ul className={linksClasses}>
        <li className={styles.item}>
          <a
            className={`${styles.link} ${styles.linkCurrent}`}
            href="/"
            aria-current="page"
          >
            Сводка
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/devices">
            Устройства
          </a>
        </li>
        <li className={styles.item}>
          <a className={styles.link} href="/scripts">
            Сценарии
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
