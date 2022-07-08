import { BsAward } from "react-icons/bs";
import { MdBuild, MdWork } from "react-icons/md";
import styles from "./About.module.css";

import ME from "../../assets/me-about.jpg";
export const About = () => {
  return (
    <section id="about">
      <h5>You Can Explore</h5>
      <h2>About Me</h2>
      <div className={`${styles.about__container} container`}>
        <div className={styles.about__me}>
          <div className={styles.about__me__image}>
            <img src={ME} alt="about  me image is loading" />
          </div>
        </div>
        <div className={styles.about__content}>
          <div className={styles.about__cards}>
            <article className={styles.about__card}>
              <BsAward className={styles.about__icon} />
              <h5>Experince</h5>
              <small>6 months</small>
            </article>
            <article className={styles.about__card}>
              <MdWork className={styles.about__icon} />
              <h5>Skills</h5>
              <small>CSS,React,Tailwind,Javascript</small>
            </article>
            <article className={styles.about__card}>
              <MdBuild className={styles.about__icon} />
              <h5>Projects</h5>
              <small>5+ projects</small>
            </article>
          </div>
          <p>
            I am a self-taught programmer. After 3 months of self-study i was
            able to graps basic of programming{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            {" "}
            Let's chat
          </a>
        </div>
      </div>
    </section>
  );
};
