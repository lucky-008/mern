import "./Services.css";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Build responsive and dynamic web applications with modern tech.",
    },
    {
      title: "UI/UX Design",
      description: "Design user-friendly and modern interfaces for apps and websites.",
    },
    {
      title: "Backend Development",
      description: "Robust, secure, and scalable backend solutions for your apps.",
    },
    {
      title: "SEO Optimization",
      description: "Improve your website visibility and rank higher on search engines.",
    },
    {
      title: "Consulting",
      description: "Expert advice to help you plan and implement your projects.",
    },
    {
      title: "Maintenance & Support",
      description: "Reliable maintenance and support for your web applications.",
    },
  ];

  return (
    <div className="services-container">
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>We provide a wide range of services to help your business grow.</p>
      </section>

      <section className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};
