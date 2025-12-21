import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About Us</h1>
        <p>
          We are dedicated to building modern web solutions and helping businesses grow.
        </p>
      </section>

      {/* MISSION & VISION */}
      <section className="about-info">
        <div className="info-card">
          <h3>Our Mission</h3>
          <p>
            To provide high-quality, scalable, and reliable web applications for all our clients.
          </p>
        </div>

        <div className="info-card">
          <h3>Our Vision</h3>
          <p>
            To be a trusted technology partner recognized for innovation and excellence.
          </p>
        </div>

        <div className="info-card">
          <h3>Our Values</h3>
          <p>
            Integrity, creativity, collaboration, and commitment drive everything we do.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team member" />
            <h4>John Doe</h4>
            <p>Founder & CEO</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team member" />
            <h4>Jane Smith</h4>
            <p>Lead Developer</p>
          </div>

          <div className="team-card">
            <img src="https://via.placeholder.com/150" alt="Team member" />
            <h4>Mike Johnson</h4>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
};
