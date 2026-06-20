"use client";

import { useState } from "react";

interface PortfolioItem {
  id: number;
  category: "wedding" | "birthday" | "corporate";
  src: string;
  alt: string;
  className?: string;
  tag: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: "wedding",
    src: "https://kimi-web-img.moonshot.cn/img/jolevents.com/eabd2df9b6ea60ca67528e88b2df82bab2108831.png",
    alt: "Wedding Mandap Decor",
    className: "wide",
    tag: "Wedding",
  },
  {
    id: 2,
    category: "wedding",
    src: "https://kimi-web-img.moonshot.cn/img/www.marriagecolours.com/443a8bd990ee9dc5149d8880d47b251028e8142c.jpg",
    alt: "Sangeet Stage",
    tag: "Wedding",
  },
  {
    id: 3,
    category: "birthday",
    src: "https://kimi-web-img.moonshot.cn/img/horaservices.com/d57f8fb38fb7cb712607827d227c1e2321d77751.jpg",
    alt: "Birthday Balloon Decor",
    tag: "Birthday",
  },
  {
    id: 4,
    category: "corporate",
    src: "https://kimi-web-img.moonshot.cn/img/5.imimg.com/a3d5b763ac4110239ec01d012b66b56eb048c357.jpg",
    alt: "Corporate Conference",
    tag: "Corporate",
  },
  {
    id: 5,
    category: "wedding",
    src: "https://kimi-web-img.moonshot.cn/img/partyone.com/af2987d4c83ac90abf1f80772d138c0b443a5944.webp",
    alt: "Wedding Decor",
    className: "tall",
    tag: "Wedding",
  },
  {
    id: 6,
    category: "birthday",
    src: "https://kimi-web-img.moonshot.cn/img/5.imimg.com/46246f430a71d45e2e622e7f40dada03ba133d17.jpg",
    alt: "Kids Birthday Theme",
    tag: "Birthday",
  },
  {
    id: 7,
    category: "corporate",
    src: "https://kimi-web-img.moonshot.cn/img/5.imimg.com/e61294fc145ad11777d43b1a2ff42ec734386ea3.jpg",
    alt: "Corporate Stage",
    tag: "Corporate",
  },
  {
    id: 8,
    category: "corporate",
    src: "https://kimi-web-img.moonshot.cn/img/5.imimg.com/b2cfac7858ab9e4d3c538e075eef2d6b6f1629dd.jpg",
    alt: "Corporate Event Setup",
    className: "wide",
    tag: "Corporate",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2>Our Portfolio</h2>
          <div className="gold-divider"></div>
          <p>Real events we&apos;ve crafted across Pune</p>
        </div>
        <div className="filter-pills">
          <button
            className={`filter-pill ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-pill ${filter === "wedding" ? "active" : ""}`}
            onClick={() => setFilter("wedding")}
          >
            Weddings
          </button>
          <button
            className={`filter-pill ${filter === "birthday" ? "active" : ""}`}
            onClick={() => setFilter("birthday")}
          >
            Birthdays
          </button>
          <button
            className={`filter-pill ${filter === "corporate" ? "active" : ""}`}
            onClick={() => setFilter("corporate")}
          >
            Corporate
          </button>
        </div>
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-item ${item.className || ""}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} />
              <span className="gallery-tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
