import "./Home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Build Your Future with Us</h1>
        <p>
          Learn, build, and grow with modern web technologies.
          Simple. Fast. Reliable.
        </p>

        <div className="hero-buttons">
          <Link to="/register" className="btn primary-btn">
            Get Started
          </Link>
          <Link to="/services" className="btn secondary-btn">
            Our Services
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-card">
          <h3>🚀 Fast Development</h3>
          <p>Build modern applications with best practices.</p>
        </div>

        <div className="feature-card">
          <h3>🔐 Secure</h3>
          <p>Security-first approach for all applications.</p>
        </div>

        <div className="feature-card">
          <h3>🎨 Modern UI</h3>
          <p>Clean, responsive, and user-friendly designs.</p>
        </div>
      </section>
    </div>
  );
};
