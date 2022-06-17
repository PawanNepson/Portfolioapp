import { FaCheckCircle } from "react-icons/fa";

import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>Languages a Technologies</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Slills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                {" "}
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                {" "}
                <h4>Next JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckCircle className="exp__icon" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
