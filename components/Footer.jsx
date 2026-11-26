import data from '@/data/portfolio.json';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <span>© {new Date().getFullYear()} {data.brand}. All rights reserved.</span>
        <span>Kotlin · Jetpack Compose · Material 3 · Offline-first business apps</span>
      </div>
    </footer>
  );
}
