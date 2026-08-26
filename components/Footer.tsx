import { waLink } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col footer-brand">
          <a href="#home" className="logo">
            <span className="logo-mark">
              <i className="fa-solid fa-compass-drafting"></i>
            </span>
            <span className="logo-text">
              Apex<em>Build</em>
            </span>
          </a>
          <p>
            Building excellence, delivering trust. ApexBuild Construction has been shaping skylines
            and homes since 2009.
          </p>
          <div className="contact-social">
            <a href="#" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href={waLink('Hi ApexBuild!')} target="_blank" rel="noopener" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Residential Construction</a>
          <a href="#services">Commercial Construction</a>
          <a href="#services">Renovation &amp; Remodeling</a>
          <a href="#services">Architecture &amp; Planning</a>
          <a href="#services">Interior Fit-Out</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <i className="fa-solid fa-location-dot"></i> 142 Galle Road, Colombo 03, Sri Lanka
          </p>
          <p>
            <i className="fa-brands fa-whatsapp"></i>{' '}
            <a href={waLink('Hi ApexBuild!')} target="_blank" rel="noopener">
              +94 76 921 4278
            </a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i>{' '}
            <a href="mailto:info@apexbuild.lk">info@apexbuild.lk</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} ApexBuild Construction. All rights reserved.</p>
          <p>
            Designed with <i className="fa-solid fa-heart"></i> for builders who deliver.
          </p>
        </div>
      </div>
    </footer>
  );
}
