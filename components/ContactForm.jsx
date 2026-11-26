'use client';

import { useEffect, useState } from 'react';

export default function ContactForm({ email, whatsapp, options }) {
  const all = [...options, 'Something else'];
  const waDigits = (whatsapp || '').replace(/\D/g, '');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [type, setType] = useState(all[0]);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState('');

  useEffect(() => {
    const onPick = (e) => {
      if (all.includes(e.detail)) setType(e.detail);
    };
    window.addEventListener('pick-service', onPick);
    return () => window.removeEventListener('pick-service', onPick);
  });

  function enquiryText() {
    return [
      'Hello DNS Software, I have a project enquiry.',
      '',
      `Name: ${name}`,
      `Phone / Email: ${contact}`,
      `Project type: ${type}`,
      '',
      'Requirement:',
      message,
    ].join('\n');
  }

  function sendWhatsApp() {
    const url = `https://wa.me/${waDigits}?text=${encodeURIComponent(enquiryText())}`;
    const win = window.open(url, '_blank');
    if (win) win.opener = null;
    else window.location.href = url;
    setSent('whatsapp');
  }

  function sendEmail() {
    const subject = `New project enquiry from ${name || 'website visitor'}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(enquiryText())}`;
    setSent('email');
  }

  function onSubmit(e) {
    e.preventDefault();
    const via = e.nativeEvent?.submitter?.dataset?.via;
    if (via === 'email' || !waDigits) sendEmail();
    else sendWhatsApp();
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          Your name *
          <input value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. Rahul Verma" />
        </label>
        <label>
          Email or WhatsApp number *
          <input value={contact} onChange={(e) => setContact(e.target.value)} required placeholder="+91 98765 43210 or email" />
        </label>
      </div>
      <label>
        Project category
        <select value={type} onChange={(e) => setType(e.target.value)}>
          {all.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <label>
        Brief project requirement *
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          placeholder="Key features you need, target timeline, or the business workflow you want to digitize…"
        />
      </label>
      <div className="form-actions">
        {waDigits && (
          <button type="submit" data-via="whatsapp" className="btn primary">
            Send on WhatsApp
          </button>
        )}
        {email && (
          <button type="submit" data-via="email" className={waDigits ? 'btn' : 'btn primary'}>
            Send by email
          </button>
        )}
      </div>
      {sent && (
        <p className="form-note" role="status">
          {sent === 'whatsapp'
            ? 'WhatsApp opened with your enquiry. Just press send there.'
            : 'Your email app opened with the enquiry. Just press send there.'}
        </p>
      )}
    </form>
  );
}
