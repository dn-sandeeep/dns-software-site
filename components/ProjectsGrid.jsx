'use client';

import { useState } from 'react';
import Phone from '@/components/Phone';

const TYPE_LABELS = { live: 'Play Store Live', business: 'Business App' };

export default function ProjectsGrid({ projects }) {
  const [filter, setFilter] = useState('all');
  const count = (t) => projects.filter((p) => p.type === t).length;
  const tabs = [
    { key: 'all', label: 'All', n: projects.length },
    { key: 'live', label: 'Play Store Live', n: count('live') },
    { key: 'business', label: 'Business Apps', n: count('business') },
  ];
  const shown = filter === 'all' ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <div className="filter-tabs" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            role="tab"
            aria-selected={filter === t.key}
            className={filter === t.key ? 'active' : ''}
            onClick={() => setFilter(t.key)}
          >
            {t.label} <span>{t.n}</span>
          </button>
        ))}
      </div>
      <div className="projects">
        {shown.map((p) => (
          <article className="project" key={p.slug} style={{ '--accent': p.accent }}>
            <div>
              <div className="p-top">
                {p.type && <span className={`badge ${p.type}`}>{TYPE_LABELS[p.type]}</span>}
                <span className="project-cat">{p.category}</span>
              </div>
              <h3>{p.name}</h3>
              <div className="p-role">{p.client}</div>
              <p className="summary">{p.summary}</p>
              <ul className="features">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="tags">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="p-actions">
                <a className="link-arrow" href={`/projects/${p.slug}`}>Case study →</a>
                {p.links.playStore && (
                  <a className="link-arrow" href={p.links.playStore} target="_blank" rel="noopener noreferrer">Play Store ↗</a>
                )}
                {p.links.github && (
                  <a className="link-arrow" href={p.links.github} target="_blank" rel="noopener noreferrer">Code ↗</a>
                )}
              </div>
            </div>
            <Phone project={p} />
          </article>
        ))}
      </div>
    </>
  );
}
