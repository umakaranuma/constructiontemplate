import { SOCIAL_LINKS } from '@/lib/data';
import type { CSSProperties } from 'react';

export default function SocialSidebar() {
  return (
    <div className="social-sidebar" aria-label="Social media links">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.key}
          href={social.href}
          target="_blank"
          rel="noopener"
          aria-label={social.label}
          className="social-sidebar-link"
          style={{ '--brand': social.brand } as CSSProperties}
        >
          <span className="social-sidebar-fill"></span>
          <i className={`social-sidebar-icon ${social.icon}`}></i>
          <span className="social-sidebar-tooltip">{social.label}</span>
        </a>
      ))}
    </div>
  );
}
