import { FaBook, FaHome, FaUser } from "react-icons/fa";
import { MdDesignServices, MdMessage } from "react-icons/md";
import "./nav.css";
export const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        {" "}
        <FaHome />
      </a>
      <a href="#about">
        <FaUser />{" "}
      </a>
      <a href="#experience">
        <FaBook />{" "}
      </a>
      <a href="#services">
        <MdDesignServices />{" "}
      </a>
      <a href="#contact">
        <MdMessage />{" "}
      </a>
    </nav>
  );
};
