"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  const handleScrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("portfolio");
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
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1>Turning Your Celebrations Into Unforgettable Memories</h1>
        <p>Weddings • Birthdays • Corporate Events — Pune&apos;s Trusted Event Partner</p>
        <div className="hero-buttons">
          <a
            href="https://wa.me/918888399102"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FaWhatsapp size={20} />
            Get Free Quote on WhatsApp
          </a>
          <a href="#portfolio" onClick={handleScrollToPortfolio} className="btn btn-outline">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
