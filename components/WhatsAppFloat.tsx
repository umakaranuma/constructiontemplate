import { waLink } from '@/lib/data';

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi ApexBuild! I'd like to get a free quote for my construction project.")}
      target="_blank"
      rel="noopener"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-ping"></span>
    </a>
  );
}
