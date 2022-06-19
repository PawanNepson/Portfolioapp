import { FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdFacebook } from "react-icons/md";
import "./contact.css";
export const Contact = () => {
  return (
    <section id="contact">
      <h5>Let's Have a talk</h5>
      <h2>Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nepsonh@gmail.com</h5>
            <a href="mailto:nepsonh@gmail.com" target="_blank">
              Drop Your Message here
            </a>
          </article>
          <article className="contact__option">
            <MdFacebook className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Pawan Upadhayay</h5>
            <a href="https://m.me/Nepson007" target="_blank">
              One Facebook away{" "}
            </a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
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

        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="nessage"
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
