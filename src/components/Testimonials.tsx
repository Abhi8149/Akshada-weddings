import { FaQuoteRight, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  avatar: string;
  name: string;
  event: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    avatar: "P",
    name: "Priya Sharma",
    event: "Wedding — March 2026",
    text: "Akshda made our wedding day absolutely magical. The mandap decoration was breathtaking and the team handled everything so professionally. Highly recommend them for anyone in Pune!",
  },
  {
    id: 2,
    avatar: "R",
    name: "Rahul Mehta",
    event: "Corporate Event — January 2026",
    text: "We hired Akshda for our annual company gala and they exceeded expectations. The stage setup was world-class and the event flowed seamlessly. Great value for money.",
  },
  {
    id: 3,
    avatar: "S",
    name: "Sneha Patil",
    event: "Birthday Party — December 2025",
    text: "My daughter's 5th birthday was a dream come true thanks to Akshda. The balloon theme and cake table were gorgeous. They truly listen to what you want and deliver perfectly.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>What Clients Say</h2>
          <div className="gold-divider"></div>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <FaQuoteRight className="quote-icon" />
              <div className="testimonial-header">
                <div className="client-avatar">{t.avatar}</div>
                <div className="client-info">
                  <h4>{t.name}</h4>
                  <span>{t.event}</span>
                </div>
              </div>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p>&quot;{t.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
