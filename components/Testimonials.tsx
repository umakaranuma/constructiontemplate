'use client';

import { useEffect, useState } from 'react';
import { TESTIMONIALS } from '@/lib/data';

function Stars({ count, half }: { count: number; half?: boolean }) {
  const items = [];
  for (let i = 0; i < count; i++) items.push(<i className="fa-solid fa-star" key={`f${i}`}></i>);
  if (half) items.push(<i className="fa-solid fa-star-half-stroke" key="half"></i>);
  return <div className="stars">{items}</div>;
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % TESTIMONIALS.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const go = (i: number) => setCurrent((i + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-head light-on-dark" data-aos="fade-up">
          <span className="eyebrow">
            <i className="fa-solid fa-quote-left"></i> Reviews
          </span>
          <h2 className="section-title">
            What Our Clients <span className="text-accent">Say</span>
          </h2>
        </div>

        <div className="testimonial-slider" data-aos="fade-up">
          <div className="testimonial-track" id="testimonialTrack">
            {TESTIMONIALS.map((t, i) => (
              <div className={`testimonial-card${i === current ? ' active' : ''}`} key={t.name}>
                <Stars count={t.stars} half={t.halfStar} />
                <p>&quot;{t.text}&quot;</p>
                <div className="testimonial-author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-nav">
            <button id="testimonialPrev" aria-label="Previous review" onClick={() => go(current - 1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="testimonial-dots" id="testimonialDots">
              {TESTIMONIALS.map((t, i) => (
                <span
                  key={t.name}
                  className={i === current ? 'active' : ''}
                  onClick={() => go(i)}
                ></span>
              ))}
            </div>
            <button id="testimonialNext" aria-label="Next review" onClick={() => go(current + 1)}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
