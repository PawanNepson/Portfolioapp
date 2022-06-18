import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./testimonials.css";
export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations From Seniors</h5>
      <h2>Recommendations</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="loading" />
          </div>
          <h5 className="client__name">Arjun Professor</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            necessitatibus error mollitia porro molestias. Perferendis mollitia
            dignissimos molestias sunt earum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="loading" />
          </div>
          <h5 className="client__name">Arjun Professor</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            necessitatibus error mollitia porro molestias. Perferendis mollitia
            dignissimos molestias sunt earum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="loading" />
          </div>
          <h5 className="client__name">Arjun Professor</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            necessitatibus error mollitia porro molestias. Perferendis mollitia
            dignissimos molestias sunt earum?
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="loading" />
          </div>
          <h5 className="client__name">Arjun Professor</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            necessitatibus error mollitia porro molestias. Perferendis mollitia
            dignissimos molestias sunt earum?
          </small>
        </article>
      </div>
    </section>
  );
};
