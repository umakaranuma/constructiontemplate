import { WHY_FEATURES } from '@/lib/data';

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container why-grid">
        <div className="why-content" data-aos="fade-right">
          <span className="eyebrow eyebrow-dark">
            <i className="fa-solid fa-shield-halved"></i> Why Choose Us
          </span>
          <h2 className="section-title">
            Quality You Can See. <span className="text-accent">Trust You Can Feel.</span>
          </h2>
          <p className="section-text">
            We combine skilled craftsmanship, modern equipment and honest project management to
            deliver builds that stand the test of time.
          </p>

          <div className="why-features">
            {WHY_FEATURES.map((feature) => (
              <div className="why-feature" key={feature.title}>
                <i className={feature.icon}></i>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-media" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80"
            alt="Construction crane against sky"
          />
          <div className="why-media-card">
            <i className="fa-solid fa-star"></i>
            <div>
              <strong>4.9 / 5.0</strong>
              <span>Client satisfaction rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
