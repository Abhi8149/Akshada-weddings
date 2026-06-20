"use client";

import { FaRing, FaBirthdayCake, FaBriefcase, FaArrowRight } from "react-icons/fa";

export default function Categories() {
  const handleExploreClick = (e: React.MouseEvent<HTMLDivElement>, targetId: string) => {
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
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-header">
          <h2>What We Create</h2>
          <div className="gold-divider"></div>
        </div>
        <div className="category-grid">
          <div
            className="category-card card-wedding"
            onClick={(e) => handleExploreClick(e, "services")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://kimi-web-img.moonshot.cn/img/www.marriagecolours.com/443a8bd990ee9dc5149d8880d47b251028e8142c.jpg"
              alt="Wedding Decor"
              className="card-bg"
            />
            <FaRing />
            <h3>Weddings</h3>
            <p>From intimate ceremonies to grand receptions, we craft your dream wedding.</p>
            <span className="explore">
              Explore <FaArrowRight />
            </span>
          </div>

          <div
            className="category-card card-birthday"
            onClick={(e) => handleExploreClick(e, "services")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://kimi-web-img.moonshot.cn/img/partyone.com/af2987d4c83ac90abf1f80772d138c0b443a5944.webp"
              alt="Birthday Decor"
              className="card-bg"
            />
            <FaBirthdayCake />
            <h3>Birthdays &amp; Celebrations</h3>
            <p>Memorable themes and joyful setups for every milestone celebration.</p>
            <span className="explore">
              Explore <FaArrowRight />
            </span>
          </div>

          <div
            className="category-card card-corporate"
            onClick={(e) => handleExploreClick(e, "services")}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://kimi-web-img.moonshot.cn/img/www.colorknitevents.com/5c47bb2811ba49b06985a885969d5fbad6033820.png"
              alt="Corporate Event"
              className="card-bg"
            />
            <FaBriefcase />
            <h3>Corporate Events</h3>
            <p>Professional conferences, product launches, and team gatherings executed flawlessly.</p>
            <span className="explore">
              Explore <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
