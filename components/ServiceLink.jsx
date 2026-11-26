'use client';

export default function ServiceLink({ option, children }) {
  return (
    <a
      href="#contact"
      className="service-cta"
      onClick={() => window.dispatchEvent(new CustomEvent('pick-service', { detail: option }))}
    >
      {children} →
    </a>
  );
}
