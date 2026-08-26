'use client';

import { useEffect, useState } from 'react';
import { PROJECT_FILTERS, PROJECTS, ProjectCategory, waLink } from '@/lib/data';

export default function Projects() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-head" data-aos="fade-up">
          <span className="eyebrow eyebrow-dark">
            <i className="fa-solid fa-diagram-project"></i> Our Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="section-text">A selection of recent residential, commercial and renovation work.</p>
        </div>

        <div className="project-filters" data-aos="fade-up">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid" id="projectsGrid">
          {PROJECTS.map((project, i) => {
            const hidden = filter !== 'all' && project.cat !== filter;
            return (
              <div
                className={`project-card${hidden ? ' hide' : ''}`}
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <img src={project.img} alt={project.alt} />
                <div className="project-overlay">
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <button
                    className="project-zoom"
                    onClick={() =>
                      setLightbox({ src: project.img.replace('w=800', 'w=1600'), alt: project.alt })
                    }
                  >
                    <i className="fa-solid fa-magnifying-glass-plus"></i>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="projects-cta" data-aos="fade-up">
          <a
            href={waLink("Hi ApexBuild! I'd like to see more of your projects.")}
            target="_blank"
            rel="noopener"
            className="btn btn-outline-dark"
          >
            View All Projects <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <div className={`lightbox${lightbox ? ' open' : ''}`} id="lightbox" onClick={(e) => {
        if (e.target === e.currentTarget) setLightbox(null);
      }}>
        <button className="lightbox-close" id="lightboxClose" onClick={() => setLightbox(null)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {lightbox && <img src={lightbox.src} alt={lightbox.alt} id="lightboxImg" />}
      </div>
    </section>
  );
}
