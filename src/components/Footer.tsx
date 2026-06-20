"use client";

import { FaOm, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube, FaHeart } from "react-icons/fa";

export default function Footer() {
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 80;
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
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#" className="logo" onClick={(e) => handleScrollClick(e, "navbar")}>
              <FaOm />
              Akshda
            </a>
            <p>
              Pune&apos;s trusted partner for weddings, birthdays, and corporate events. Creating
              memories that last a lifetime.
            </p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com/akshdaevents" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/918888399102" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#about" onClick={(e) => handleScrollClick(e, "about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollClick(e, "services")}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => handleScrollClick(e, "portfolio")}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#packages" onClick={(e) => handleScrollClick(e, "packages")}>
                  Packages
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#services" onClick={(e) => handleScrollClick(e, "services")}>
                  Wedding Planning
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollClick(e, "services")}>
                  Birthday Decor
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollClick(e, "services")}>
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollClick(e, "services")}>
                  Venue Booking
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Service Areas</h4>
            <div className="service-tags">
              <span className="service-tag">Yerawada</span>
              <span className="service-tag">Wagholi</span>
              <span className="service-tag">Kharadi</span>
              <span className="service-tag">Viman Nagar</span>
              <span className="service-tag">Koregaon Park</span>
              <span className="service-tag">Pune City</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 Akshda Event Services. All rights reserved. | Designed with{" "}
            <FaHeart style={{ color: "var(--saffron)" }} /> in Pune
          </p>
        </div>
      </div>
    </footer>
  );
}
