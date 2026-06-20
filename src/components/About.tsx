import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://kimi-web-img.moonshot.cn/img/theoneupgroup.com/39d49546c05a500bbcf37c6263fb27f5ee28ca3d.jpg"
              alt="Akshda Event Team Behind the Scenes"
            />
          </div>
          <div className="about-content">
            <h2>Your Vision, Perfectly Executed</h2>
            <ul className="checklist">
              <li>
                <FaCheckCircle />
                <span>Budget-friendly packages tailored for Pune families and businesses</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>End-to-end planning &amp; execution from concept to cleanup</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>Trusted local vendor network across Yerawada, Wagholi &amp; Pune</span>
              </li>
              <li>
                <FaCheckCircle />
                <span>On-time, stress-free delivery with dedicated event coordinators</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
