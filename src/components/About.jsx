function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-content">
        <div className="about-image">
          <span>🐾</span>
        </div>

        <div className="about-text">
          <span className="eyebrow">ABOUT PET HAVEN</span>

          <h2>We Care About The Pets You Love</h2>

          <p>
            Pet Haven makes it easier for pet owners to find quality
            food, treats and everyday essentials for their pets.
          </p>

          <p>
            Whether you have a playful puppy, a curious cat, a colourful
            bird or a beautiful aquarium, we're here to help you provide
            the care they deserve.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;