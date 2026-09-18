function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">CONTACT US</span>
          <h2>We're Here To Help</h2>
          <p>
            Have a question about our products? Send us a message.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div>
              <span>📍</span>
              <div>
                <h3>Location</h3>
                <p>Port Harcourt, Nigeria</p>
              </div>
            </div>

            <div>
              <span>📞</span>
              <div>
                <h3>Phone</h3>
                <p>+234 800 000 0000</p>
              </div>
            </div>

            <div>
              <span>✉️</span>
              <div>
                <h3>Email</h3>
                <p>hello@pethaven.example</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
            />

            <textarea
              placeholder="How can we help?"
              rows="5"
              aria-label="Your Message"
            />

            <button type="button" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;