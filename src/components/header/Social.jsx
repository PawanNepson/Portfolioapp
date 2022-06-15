import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export const Social = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
};
