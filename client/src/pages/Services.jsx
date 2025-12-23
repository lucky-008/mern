import "./Services.css";

export const Services = () => {
  const services = [
    { title: "Web Development", description: "Build fast, responsive and scalable web apps." },
    { title: "UI/UX Design", description: "Modern, user-friendly and aesthetic interfaces." },
    { title: "Backend Development", description: "Secure and scalable backend architectures." },
    { title: "SEO Optimization", description: "Boost traffic and rank higher on search engines." },
    { title: "Consulting", description: "Expert guidance to turn ideas into products." },
    { title: "Maintenance & Support", description: "Continuous support for smooth operations." },
  ];

  return (
    <section className="services-container">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Powering ideas with modern technology</p>
      </div>

      <div className="services-slider">
        <div className="services-track">
          {[...services, ...services].map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
