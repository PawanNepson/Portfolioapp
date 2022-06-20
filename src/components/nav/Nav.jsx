import { useState } from "react";
import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { MdDesignServices, MdMessage } from "react-icons/md";
import styles from "./Nav.module.css";
export const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? `${styles.active}` : ""}
      >
        {" "}
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? `${styles.active}` : ""}
      >
        <FaUser />{" "}
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? `${styles.active}` : ""}
      >
        <FaBook />{" "}
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? `${styles.active}` : ""}
      >
        <MdDesignServices />{" "}
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? `${styles.active}` : ""}
      >
        <MdMessage />{" "}
      </a>
    </nav>
  );
};
