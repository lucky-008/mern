import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you. Send us a message.</p>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
