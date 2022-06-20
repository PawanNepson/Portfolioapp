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
            <h3>UI/UX Design</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Web Development</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am Good at this but will later fill this thing</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
          </ul>
        </article>
        <article className={styles.service}>
          <div className={styles.service__head}>
            <h3>Content Creation</h3>
          </div>
          <ul className={styles.service__list}>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>One day this will be my new hobby.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
            <li>
              <MdCheck className={styles.service__list__icon} />
              <p>I am learning figma and will be expert one day.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
