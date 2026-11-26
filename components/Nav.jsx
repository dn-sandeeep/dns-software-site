import data from '@/data/portfolio.json';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="/" className="logo">
          <span className="logo-mark">{data.brandShort}</span>
          <span className="logo-text">{data.brand}</span>
        </a>
        <div className="nav-links">
          <a href="/#services">Services</a>
          <a href="/#work" className="keep">Work</a>
          <a href="/#stack">Tech Stack</a>
          <a href="/#process">Process</a>
          <a href="/#contact" className="btn nav-cta keep">Start a project</a>
        </div>
      </div>
    </nav>
  );
}
