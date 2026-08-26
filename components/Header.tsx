'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS, waLink } from '@/lib/data';
import { useTheme } from './ThemeProvider';

export default function Header() {
  const { toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const closeNav = () => setNavOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">
            <i className="fa-solid fa-compass-drafting"></i>
          </span>
          <span className="logo-text">
            Apex<em>Build</em>
          </span>
        </a>

        <nav className={`main-nav${navOpen ? ' open' : ''}`} id="mainNav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${active === link.href.slice(1) ? ' active' : ''}`}
              onClick={closeNav}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" id="themeToggle" aria-label="Toggle dark / light mode" onClick={toggleTheme}>
            <i className="fa-solid fa-sun icon-sun"></i>
            <i className="fa-solid fa-moon icon-moon"></i>
          </button>
          <a
            href={waLink("Hi ApexBuild! I'd like to get a free quote for my construction project.")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-sm header-cta"
          >
            <i className="fa-brands fa-whatsapp"></i> Get a Free Quote
          </a>
          <button
            className={`nav-toggle${navOpen ? ' open' : ''}`}
            id="navToggle"
            aria-label="Open menu"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
