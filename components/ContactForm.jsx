'use client';

import { useEffect, useState } from 'react';

export default function ContactForm({ email, options }) {
  const all = [...options, 'Something else'];
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [type, setType] = useState(all[0]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const onPick = (e) => {
      if (all.includes(e.detail)) setType(e.detail);
    };
    window.addEventListener('pick-service', onPick);
    return () => window.removeEventListener('pick-service', onPick);
  });

  function onSubmit(e) {
    e.preventDefault();
    const subject = `New project enquiry from ${name || 'website visitor'}`;
    const body = `Name: ${name}\nPhone / WhatsApp / Email: ${contact}\nProject type: ${type}\n\n${message}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
      <button type="submit" className="btn primary full">Send project enquiry</button>
    </form>
  );
}
