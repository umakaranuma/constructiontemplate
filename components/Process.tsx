import { PROCESS_STEPS } from '@/lib/data';

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head light-on-dark" data-aos="fade-up">
          <span className="eyebrow">
            <i className="fa-solid fa-diagram-project"></i> How We Work
          </span>
          <h2 className="section-title">
            Our Simple 4-Step <span className="text-accent">Process</span>
          </h2>
        </div>
        <div className="process-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div className="process-step" key={step.num} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="process-num">{step.num}</span>
              <i className={step.icon}></i>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
