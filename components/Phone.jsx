export default function Phone({ project }) {
  const shot = project.screens && project.screens.length > 0 ? project.screens[0] : null;
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="notch" />
        <div className="phone-screen">
          {shot ? (
            <img src={shot} alt={`${project.name} screenshot`} />
          ) : (
            <div className="mock">
              <div className="mock-title">{project.name}</div>
              <div className="mock-sub">{project.category}</div>
              <div className="mock-card big" />
              <div className="mock-row">
                <div className="mock-card" />
                <div className="mock-card" />
              </div>
              <div className="mock-line" />
              <div className="mock-line short" />
              <div className="mock-card" />
              <div className="mock-line" />
              <div className="mock-line short" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
