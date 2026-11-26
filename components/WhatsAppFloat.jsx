import data from '@/data/portfolio.json';

export default function WhatsAppFloat() {
  const digits = (data.links.whatsapp || '').replace(/\D/g, '');
  if (!digits) return null;
  const text = encodeURIComponent(`Hello ${data.brand}, I would like to discuss an app for my business.`);
  return (
    <a
      className="wa-float"
      href={`https://wa.me/${digits}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.04 2 11c0 2.6 1.24 4.94 3.22 6.58L4.5 22l4.43-2.32c.97.27 2 .42 3.07.42 5.52 0 10-4.04 10-9S17.52 2 12 2zm-4 10.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm4 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
        />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
