import { waLink } from '@/lib/data';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <div className="about-media" data-aos="fade-right">
          <div className="about-img-main">
            <img
              src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80"
              alt="ApexBuild construction crane on site"
            />
          </div>
          <div className="about-img-float">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
              alt="Modern architecture building"
            />
          </div>
          <div className="about-badge">
            <i className="fa-solid fa-award"></i>
            <div>
              <strong>15+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className="about-content" data-aos="fade-left">
          <span className="eyebrow eyebrow-dark">
            <i className="fa-solid fa-building"></i> About ApexBuild
          </span>
          <h2 className="section-title">
            We Construct More Than Buildings — <span className="text-accent">We Build Trust.</span>
          </h2>
          <p className="section-text">
            ApexBuild Construction is a full-service general contractor delivering residential,
            commercial and industrial projects across the region. Our licensed engineers, certified
            project managers and skilled tradespeople work as one team — from the first blueprint to
            the final handover — to make sure every project is safe, on-budget and built to last.
          </p>

          <ul className="check-list">
            <li>
              <i className="fa-solid fa-circle-check"></i> Licensed &amp; fully insured contractors
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i> Transparent pricing, zero hidden costs
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i> Premium materials &amp; modern equipment
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i> Dedicated project manager for every job
            </li>
          </ul>

          <div className="about-footer">
            <a
              href={waLink("Hi ApexBuild! I'd like to know more about your company.")}
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              <i className="fa-brands fa-whatsapp"></i> Talk to Our Team
            </a>
            <div className="about-signature">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80"
                alt="Founder"
              />
              <div>
                <strong>Ruwan Perera</strong>
                <span>Founder &amp; Principal Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
