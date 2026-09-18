import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>🐾</span> Pet Haven
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#shop" onClick={closeMenu}>Shop</a>
          <a href="#categories" onClick={closeMenu}>Categories</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <button className="cart-button">
            🛒 <span>0</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;