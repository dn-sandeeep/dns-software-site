import { Inter, Space_Grotesk } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import data from '@/data/portfolio.json';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import './globals.css';

const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const head = Space_Grotesk({ subsets: ['latin'], weight: ['500', '700'], variable: '--font-head' });

const title = `${data.brand} — ${data.headline}`;

export const metadata = {
  metadataBase: new URL(data.siteUrl),
  title,
  description: data.tagline,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: data.tagline,
    url: '/',
    siteName: data.brand,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description: data.tagline },
};

export const viewport = { themeColor: '#07090c' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <div className="bg-glow" />
        <div className="bg-grid" />
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
