import { FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p className="footer-text">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <div className="social-icons">
          <a href="https://linkedin.com/in/lucky-verma14" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
        </div>

        <p className="footer-text">
          Made with ❤️ using React
        </p>

      </div>
    </footer>
  );
};
