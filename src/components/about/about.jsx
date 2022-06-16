import { BsAward } from "react-icons/bs";
import { MdWork, MdBuild } from "react-icons/md";
import "./about.css";

import ME from "../../assets/me-about.jpg";
export const About = () => {
  return (
    <section id="about">
      <h5>You Can Explore</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about  me image is loading" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experince</h5>
              <small>6 months</small>
            </article>
            <article className="about__card">
              <MdWork className="about__icon" />
              <h5>Skills</h5>
              <small>CSS,React,Next Js</small>
            </article>
            <article className="about__card">
              <MdBuild className="about__icon" />
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
