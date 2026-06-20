import {
  FaHeart,
  FaBirthdayCake,
  FaBuilding,
  FaArchway,
  FaUtensils,
  FaCamera,
  FaMusic,
  FaUsers,
  FaFemale,
  FaGift,
  FaBaby,
  FaGamepad,
  FaCookieBite,
  FaLightbulb,
  FaCameraRetro,
  FaDesktop,
  FaRocket,
  FaHandshake,
  FaTrophy,
  FaLaptop,
  FaGlassCheers
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <div className="gold-divider"></div>
          <p>Comprehensive event solutions for every occasion</p>
        </div>

        {/* Wedding Services */}
        <div className="service-category">
          <div className="service-header maroon">
            <FaHeart />
            <h3>Wedding Services</h3>
          </div>
          <div className="service-grid">
            <div className="service-item maroon-theme">
              <FaArchway />
              <span>Mandap &amp; Stage Decor</span>
            </div>
            <div className="service-item maroon-theme">
              <FaUtensils />
              <span>Catering Coordination</span>
            </div>
            <div className="service-item maroon-theme">
              <FaCamera />
              <span>Photography &amp; Videography</span>
            </div>
            <div className="service-item maroon-theme">
              <FaMusic />
              <span>Sangeet &amp; DJ Setup</span>
            </div>
            <div className="service-item maroon-theme">
              <FaUsers />
              <span>Guest Management</span>
            </div>
            <div className="service-item maroon-theme">
              <FaFemale />
              <span>Bridal Entry Themes</span>
            </div>
          </div>
        </div>

        {/* Birthday Services */}
        <div className="service-category">
          <div className="service-header saffron">
            <FaBirthdayCake />
            <h3>Birthday &amp; Celebration Services</h3>
          </div>
          <div className="service-grid">
            <div className="service-item saffron-theme">
              <FaGift />
              <span>Balloon &amp; Theme Decor</span>
            </div>
            <div className="service-item saffron-theme">
              <FaBaby />
              <span>Baby Shower Setup</span>
            </div>
            <div className="service-item saffron-theme">
              <FaGamepad />
              <span>Game &amp; Activity Coordination</span>
            </div>
            <div className="service-item saffron-theme">
              <FaCookieBite />
              <span>Cake &amp; Dessert Table Design</span>
            </div>
            <div className="service-item saffron-theme">
              <FaLightbulb />
              <span>LED &amp; Neon Signage</span>
            </div>
            <div className="service-item saffron-theme">
              <FaCameraRetro />
              <span>Instant Photo Booth</span>
            </div>
          </div>
        </div>

        {/* Corporate Services */}
        <div className="service-category">
          <div className="service-header emerald">
            <FaBuilding />
            <h3>Corporate Event Services</h3>
          </div>
          <div className="service-grid">
            <div className="service-item emerald-theme">
              <FaDesktop />
              <span>Conference &amp; Seminar Setup</span>
            </div>
            <div className="service-item emerald-theme">
              <FaRocket />
              <span>Product Launch Events</span>
            </div>
            <div className="service-item emerald-theme">
              <FaHandshake />
              <span>Team Building Activities</span>
            </div>
            <div className="service-item emerald-theme">
              <FaTrophy />
              <span>Award Ceremonies</span>
            </div>
            <div className="service-item emerald-theme">
              <FaLaptop />
              <span>AV &amp; Stage Production</span>
            </div>
            <div className="service-item emerald-theme">
              <FaGlassCheers />
              <span>Gala Dinners &amp; Networking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
