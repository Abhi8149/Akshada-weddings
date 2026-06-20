import { FaCheck } from "react-icons/fa";

export default function Packages() {
  return (
    <section className="packages" id="packages">
      <div className="container">
        <div className="section-header">
          <h2>Event Packages</h2>
          <div className="gold-divider"></div>
          <p>Transparent pricing for every budget</p>
        </div>
        <div className="pricing-grid">
          {/* Essential */}
          <div className="pricing-card">
            <div>
              <h3>Essential</h3>
              <div className="price">
                ₹25,000 <span>onwards</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <FaCheck /> Basic decor setup
                </li>
                <li>
                  <FaCheck /> 1 event coordinator
                </li>
                <li>
                  <FaCheck /> Standard lighting
                </li>
                <li>
                  <FaCheck /> Vendor coordination
                </li>
                <li>
                  <FaCheck /> Basic sound system
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/918888399102"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ color: "var(--charcoal)", borderColor: "var(--charcoal)" }}
            >
              Enquire Now
            </a>
          </div>

          {/* Premium */}
          <div className="pricing-card gold-border">
            <div className="popular-ribbon">Most Popular</div>
            <div>
              <h3>Premium</h3>
              <div className="price">
                ₹65,000 <span>onwards</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <FaCheck /> Premium themed decor
                </li>
                <li>
                  <FaCheck /> 2 dedicated coordinators
                </li>
                <li>
                  <FaCheck /> Advanced lighting &amp; LED
                </li>
                <li>
                  <FaCheck /> DJ &amp; sound system
                </li>
                <li>
                  <FaCheck /> Photography coverage
                </li>
                <li>
                  <FaCheck /> Custom floral arrangements
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/918888399102"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Enquire Now
            </a>
          </div>

          {/* Signature */}
          <div className="pricing-card">
            <div>
              <h3>Signature</h3>
              <div className="price">
                ₹1,50,000 <span>onwards</span>
              </div>
              <ul className="pricing-features">
                <li>
                  <FaCheck /> Luxury bespoke design
                </li>
                <li>
                  <FaCheck /> Full event management team
                </li>
                <li>
                  <FaCheck /> Premium AV &amp; stage production
                </li>
                <li>
                  <FaCheck /> Celebrity/artist coordination
                </li>
                <li>
                  <FaCheck /> Multi-day event planning
                </li>
                <li>
                  <FaCheck /> VIP guest management
                </li>
              </ul>
            </div>
            <a
              href="https://wa.me/918888399102"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-maroon"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
