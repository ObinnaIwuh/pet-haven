function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <a href="#home" className="logo">
            <span>🐾</span> Pet Haven
          </a>

          <p>
            Everything your pet needs, all in one place.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 Pet Haven. All Rights Reserved.</p>

        <p>Built as a DevOps Project.</p>
      </div>
    </footer>
  );
}

export default Footer;