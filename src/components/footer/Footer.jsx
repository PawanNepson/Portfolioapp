import { FaInstagram, FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <a href="#" className={styles.footer__logo}>
        Pawan Upadhayay
      </a>
      <ul className={styles.permalinks}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Recommendations</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className={styles.footer__socials}>
        <a href="https://facebook.com">
          <MdFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className={styles.footer__copyright}>
        <small>&copy; Pawan Upadhayay[Nepson] 2022.All r rights reserved</small>
      </div>
    </footer>
  );
};
