function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">WELCOME TO PET HAVEN</span>

          <h1>
            Everything Your Pet Needs,
            <span> All in One Place.</span>
          </h1>

          <p>
            Quality food, treats and everyday essentials for the pets
            you love.
          </p>

          <div className="hero-buttons">
            <a href="#shop" className="btn btn-primary">
              Shop Now
            </a>

            <a href="#categories" className="btn btn-secondary">
              Explore Categories
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="pet-circle">🐶</div>
          <div className="floating-pet pet-cat">🐱</div>
          <div className="floating-pet pet-bird">🐦</div>
          <div className="floating-pet pet-fish">🐠</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;