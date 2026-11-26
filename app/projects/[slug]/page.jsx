import { notFound } from 'next/navigation';
import data from '@/data/portfolio.json';
import Phone from '@/components/Phone';

export function generateStaticParams() {
  return data.projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

function findProject(slug) {
  return data.projects.find((p) => p.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${data.brand}`,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title: `${p.name} — ${data.brand}`, description: p.summary, url: `/projects/${p.slug}` },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const p = findProject(slug);
  if (!p) notFound();

  return (
    <div className="container" style={{ '--accent': p.accent }}>
      <div className="detail-hero">
        <div>
          <a href="/#work" className="back">← All work</a>
          <div className="p-top">
            {p.type && <span className={`badge ${p.type}`}>{p.type === 'live' ? 'Play Store Live' : 'Business App'}</span>}
            <span className="project-cat">{p.category}</span>
          </div>
          <h1>{p.name}</h1>
          <div className="p-role">{p.client}</div>
          <p className="desc">{p.description}</p>
          <div className="tags" style={{ marginTop: 22 }}>
            {p.tech.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <div className="p-actions">
            {p.links.playStore && (
              <a className="btn primary" href={p.links.playStore} target="_blank" rel="noopener noreferrer">Get it on Play Store</a>
            )}
            {p.links.github && (
              <a className="btn" href={p.links.github} target="_blank" rel="noopener noreferrer">View code</a>
            )}
          </div>
        </div>
        <Phone project={p} />
      </div>

      <section style={{ paddingTop: 30 }}>
        <div className="section-head">
          <div className="kicker">Features</div>
          <h2>What it does</h2>
        </div>
        <ul className="features" style={{ fontSize: 17 }}>
          {p.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      {p.screens.length > 0 && (
        <section style={{ paddingTop: 10 }}>
          <div className="section-head">
            <div className="kicker">Screens</div>
            <h2>A look inside</h2>
          </div>
          <div className="gallery">
            {p.screens.map((src) => (
              <img key={src} src={src} alt={`${p.name} screen`} loading="lazy" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
