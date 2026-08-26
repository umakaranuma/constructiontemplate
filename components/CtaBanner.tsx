import { CTA_BANNER_IMAGE, waLink } from '@/lib/data';

export default function CtaBanner() {
  return (
    <section className="cta-banner" style={{ backgroundImage: `url('${CTA_BANNER_IMAGE}')` }}>
      <div className="cta-overlay"></div>
      <div className="container cta-content" data-aos="zoom-in">
        <h2>Ready to Build Your Dream Project?</h2>
        <p>Tell us about your project on WhatsApp and get a free, no-obligation quote within 24 hours.</p>
        <a
          href={waLink("Hi ApexBuild! I'd like to get a free quote for my construction project.")}
          target="_blank"
          rel="noopener"
          className="btn btn-primary btn-lg"
        >
          <i className="fa-brands fa-whatsapp"></i> Chat With Us on WhatsApp
        </a>
      </div>
    </section>
  );
}
