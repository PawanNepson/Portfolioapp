import "./header.css";
import ME from "../../assets/me.png";
import { Quote } from "./Quote";
import { Social } from "./Social";
export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Helllo I'm</h5>
        <h1>Pawan Upadhayay (NEPSON)</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Quote />
        <Social />
        <div className="me">
          <img src={ME} alt="loading" id="img__id" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down{" "}
        </a>
      </div>
    </header>
  );
};
