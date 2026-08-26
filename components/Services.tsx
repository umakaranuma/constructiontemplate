import { SERVICES } from '@/lib/data';

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow eyebrow-dark">
            <i className="fa-solid fa-toolbox"></i> What We Do
          </span>
          <h2 className="section-title">
            Our Construction <span className="text-accent">Services</span>
          </h2>
          <p className="section-text">
            Engineered with precision. Built with integrity — end-to-end construction solutions
            under one roof.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((service, i) => (
            <div className="service-card" key={service.title} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="service-link">
                Learn more <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
