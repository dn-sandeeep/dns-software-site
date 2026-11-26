import { Inter, Space_Grotesk } from 'next/font/google';
import data from '@/data/portfolio.json';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const head = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-head' });

export const metadata = {
  title: `${data.brand} — ${data.headline}`,
  description: data.tagline,
  openGraph: {
    title: `${data.brand} — ${data.headline}`,
    description: data.tagline,
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <div className="bg-glow" />
        <div className="bg-grid" />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
