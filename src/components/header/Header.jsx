import ME from "../../assets/me.png";
import styles from "./Header.module.css";
import { Quote } from "./Quote";
import { Social } from "./Social";

export const Header = () => {
  return (
    <header>
      <div className={`${styles.header__container} container`}>
        <h5>Helllo I'm</h5>
        <h1>Pawan Upadhayay (NEPSON)</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Quote />
        <Social />
        <div className={styles.me}>
          <img src={ME} alt="loading" id={styles.img__id} />
        </div>
        <a href="#contact" className={styles.scroll__down}>
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};
