'use client';

import { useEffect, useState } from 'react';
import { HERO_SLIDES, waLink } from '@/lib/data';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-slider">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={src}
            className={`hero-slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          ></div>
        ))}
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content" data-aos="fade-up">
        <span className="eyebrow">
          <i className="fa-solid fa-helmet-safety"></i> Trusted Construction Partner Since 2009
        </span>
        <h1 className="hero-title">
          Building Excellence,
          <br />
          Delivering <span className="text-accent">Trust.</span>
        </h1>
        <p className="hero-sub">
          From foundation to finish — ApexBuild delivers residential, commercial &amp; renovation
          projects with precision engineering, premium materials and on-time handover.
        </p>
        <div className="hero-actions">
          <a
            href={waLink("Hi ApexBuild! I'd like to get a free quote for my construction project.")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary btn-lg"
          >
            <i className="fa-brands fa-whatsapp"></i> Get a Free Quote
          </a>
          <a href="#projects" className="btn btn-outline btn-lg">
            <i className="fa-solid fa-diagram-project"></i> View Projects
          </a>
        </div>
      </div>

      <div className="hero-slider-dots">
        {HERO_SLIDES.map((src, i) => (
          <button
            key={src}
            className={`dot${i === current ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrent(i)}
          ></button>
        ))}
      </div>

      <a href="#about" className="scroll-cue" aria-label="Scroll down">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </section>
  );
}
