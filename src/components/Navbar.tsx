"use client";

import { useState, useEffect } from "react";
import { FaOm, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    // For logo/home click, scroll to top
    if (targetId === "navbar") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80; // Offset for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="container nav-container">
          <a href="#" className="logo" onClick={(e) => handleLinkClick(e, "navbar")}>
            <FaOm />
            Akshda
          </a>
          <ul className="nav-links">
            <li>
              <a href="#categories" onClick={(e) => handleLinkClick(e, "categories")}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#packages" onClick={(e) => handleLinkClick(e, "packages")}>
                Packages
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
                Contact
              </a>
            </li>
          </ul>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overlay ${menuOpen ? "active" : ""}`}
        id="overlay"
        onClick={toggleMenu}
      ></div>
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`} id="mobileMenu">
        <button className="mobile-menu-close" onClick={toggleMenu} aria-label="Close menu">
          <FaTimes />
        </button>
        <ul>
          <li>
            <a href="#categories" onClick={(e) => handleLinkClick(e, "categories")}>
              Services
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={(e) => handleLinkClick(e, "portfolio")}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#packages" onClick={(e) => handleLinkClick(e, "packages")}>
              Packages
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
