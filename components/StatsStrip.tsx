'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/data';

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const duration = 1800;
            const start = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(eased * target));
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span className="stat-number" data-count={target} ref={ref}>
      {value}
    </span>
  );
}

export default function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="container stats-grid">
        {STATS.map((stat, i) => (
          <div className="stat-card" key={stat.label} data-aos="fade-up" data-aos-delay={i * 100}>
            <i className={stat.icon}></i>
            <Counter target={stat.count} />
            <span className="stat-plus">+</span>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
