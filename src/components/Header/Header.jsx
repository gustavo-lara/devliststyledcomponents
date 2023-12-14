import styles from "./Header.module.css";
import linkedinLogo from "../../assets/logo-linkedin.svg"
import githubLogo from "../../assets/logo-github.svg"
import telegramLogo from "../../assets/logo-telegram.svg"
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a className={styles.link} href="https://linkedin.com" target="blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com" target="blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://t.me" target="blank" rel="noopener noreferrer">
              <img src={telegramLogo} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
