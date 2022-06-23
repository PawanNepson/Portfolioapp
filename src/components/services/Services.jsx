import { MdCheck } from "react-icons/md";
import styles from "./Services.module.css";
export const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer To You</h5>
      <h2>Services</h2>
      <div className={`${styles.services__container} container`}>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Design</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>Attractive,and eye catching UI/UX using figma.</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development and Responsive Design</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>Knowledge of HTML,CSS,Javascript and React.</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>SPA</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I can create single-page applications using react js .</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
