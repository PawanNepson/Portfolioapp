import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { Pagination } from "swiper";
import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    id: 1,
    name: "Pawan Upadhayay",
    avatar: AVTR1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem totam deserunt vero vitae aperiam?",
  },
  {
    id: 2,
    name: "Pawan Upadhayay2",
    avatar: AVTR2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem totam deserunt vero vitae aperiam?",
  },
  {
    id: 3,
    name: "Pawan Upadhayay3",
    avatar: AVTR3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem totam deserunt vero vitae aperiam?",
  },
  {
    id: 4,
    name: "Pawan Upadhayay4",
    avatar: AVTR4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, autem totam deserunt vero vitae aperiam?",
  },
];
export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Recommendations From Seniors</h5>
      <h2>Recommendations</h2>
      <Swiper
        className={`${styles.testimonials__container} container`}
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, name, review, avatar }) => {
          return (
            <SwiperSlide key={id} className={styles.testimonial}>
              <div className={styles.client__avatar}>
                <img src={avatar} alt={name} />
              </div>
              <h5 className={styles.client__name}>{name}</h5>
              <small className={styles.client__review}>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
