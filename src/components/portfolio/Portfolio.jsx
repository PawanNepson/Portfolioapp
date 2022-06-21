import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import styles from "./Portfolio.module.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Morden Art Gallery",
    github: "https://github.com/PawanNepson/ArtGallery.git",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "Audiophile",
    github: "https://github.com/PawanNepson/audiophile.git",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto currency",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto currency",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto currency",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto currency",
    github: "https://github.com",
    demo: "https://github.com",
  },
];
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Current Work</h5>
      <h2>Portfolio</h2>
      <div className={`${styles.portfolio__container} container`}>
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className={styles.portfolio__item} key={id}>
              <div className={styles.portfolio__item__image}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className={styles.portfolio__item__anc}>
                <a href={github} className="btn">
                  Github
                </a>

                <a href={demo} className="btn btn-primary" target="__blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
