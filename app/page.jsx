import data from '@/data/portfolio.json';
import ProjectsGrid from '@/components/ProjectsGrid';
import ServiceLink from '@/components/ServiceLink';
import ContactForm from '@/components/ContactForm';
import CopyEmail from '@/components/CopyEmail';

function whatsappHref(num) {
  const digits = (num || '').replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}` : '';
}

export default function Home() {
  const { links } = data;
  const wa = whatsappHref(links.whatsapp);
  const formOptions = data.services.map((s) => s.formOption);

  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="eyebrow rise">
            <span className="dot" /> Taking new business & startup projects
          </div>
          <h1 className="rise d1">
            <span className="grad">{data.headline}</span>
          </h1>
          <p className="tagline rise d2">{data.tagline}</p>
          <div className="cta-row rise d3">
            <a href="#work" className="btn primary">See our work</a>
            <a href="#contact" className="btn">Book a free consultation</a>
          </div>
          <div className="stats rise d4">
            {data.stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section id="services">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Services</div>
            <h2>What we build for businesses & startups</h2>
            <p className="section-sub">Whether you are launching a new product or taking your offline business digital, we build reliable Android apps around your workflow.</p>
          </div>
          <div className="services">
            {data.services.map((s, i) => (
              <div className="service" key={s.title}>
                <span className="service-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="checks">
                  {s.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
                <ServiceLink option={s.formOption}>{s.cta}</ServiceLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Our work</div>
            <h2>Apps we’ve shipped</h2>
            <p className="section-sub">Consumer apps live on Google Play, and custom business apps that remove day-to-day bottlenecks.</p>
          </div>
          <ProjectsGrid projects={data.projects} />
        </div>
      </section>

      <section id="stack">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Engineering stack</div>
            <h2>Technology & architecture</h2>
            <p className="section-sub">A modern, Google-recommended Android toolset for maintainable code, smooth UI and reliable offline use.</p>
          </div>
          <div className="stack">
            {data.stack.map((g, i) => (
              <div className={`stack-box c${i}`} key={g.group}>
                <h3><span className="stack-dot" />{g.group}</h3>
                <div className="tags">
                  {g.items.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process">
        <div className="container">
          <div className="section-head">
            <div className="kicker">Process</div>
            <h2>How we work</h2>
          </div>
          <div className="process">
            {data.process.map((s) => (
              <div className="step" key={s.step}>
                <span className="step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contact-box contact-grid">
            <div>
              <div className="kicker">Start a project</div>
              <h2>Let’s build your Android app</h2>
              <p>Have an app idea for your startup, or want to automate your inventory, billing and field work? Send a quick message. We reply within a day with a clear roadmap and estimate.</p>
              <div className="info-cards">
                {links.email && (
                  <div className="info-card">
                    <div>
                      <small>Direct email</small>
                      <a href={`mailto:${links.email}`}>{links.email}</a>
                    </div>
                    <CopyEmail email={links.email} />
                  </div>
                )}
                {wa && (
                  <div className="info-card">
                    <div>
                      <small>WhatsApp</small>
                      <a href={wa} target="_blank" rel="noopener noreferrer">{links.whatsapp}</a>
                    </div>
                  </div>
                )}
                {data.availability && (
                  <div className="info-card">
                    <div>
                      <small>Location & availability</small>
                      <span>{data.availability}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <ContactForm email={links.email} whatsapp={links.whatsapp} options={formOptions} />
          </div>
        </div>
      </section>
    </>
  );
}
