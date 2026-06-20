import { FaCalendarCheck, FaAward, FaStar, FaPaintBrush } from "react-icons/fa";

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item">
            <FaCalendarCheck />
            <div className="number">500+</div>
            <div className="label">Events Done</div>
          </div>
          <div className="trust-item">
            <FaAward />
            <div className="number">8+</div>
            <div className="label">Years Experience</div>
          </div>
          <div className="trust-item">
            <FaStar />
            <div className="number">5.0★</div>
            <div className="label">Google Rating</div>
          </div>
          <div className="trust-item">
            <FaPaintBrush />
            <div className="number">100%</div>
            <div className="label">Personalized Decor</div>
          </div>
        </div>
      </div>
    </section>
  );
}
