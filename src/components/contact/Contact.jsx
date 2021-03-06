import emailjs from "emailjs-com";
import { useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";
import styles from "./Contact.module.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    // e.preventDefault();

    emailjs
      .sendForm(
        "service_wdy3fqo",
        "template_zy5qoxg",
        form.current,
        "YHCP4fAcR2YNdX3bW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Let's Have a talk</h5>
      <h2>Contact Us</h2>
      <div className={`${styles.contact__container} container`}>
        <div className={styles.contact__options}>
          <article className={styles.contact__option}>
            <MdEmail className={styles.contact__option__icon} />
            <h4>Email</h4>
            <h5>nepsonh@gmail.com</h5>
            <a href="mailto:nepsonh@gmail.com" target="_blank">
              Drop Your Message here
            </a>
          </article>
          <article className={styles.contact__option}>
            <MdFacebook className={styles.contact__option__icon} />
            <h4>Messenger</h4>
            <h5>Pawan Upadhayay</h5>
            <a href="https://m.me/Nepson007" target="_blank">
              One Facebook away{" "}
            </a>
          </article>
          <article className={styles.contact__option}>
            <FaWhatsapp className={styles.contact__option__icon} />
            <h4>Whatsapp</h4>
            <h5>9806******</h5>
            <a
              href="https://api.whatsapp.com/send?phone=009779806472597"
              target="_blank"
            >
              Whatsapp Me{" "}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Your Message here"
            required
            rows="7"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
