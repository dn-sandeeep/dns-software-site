# DNS Software — Company Website

A Next.js (App Router) website with a dark, modern design. It can be hosted free on Vercel.
Sections: Hero · Services · Our Work (4 apps, with filter) · Tech Stack · Process · Contact form.

## Where to edit the content

**All content lives in one file: `data/portfolio.json`.** You can open and edit it in Notepad — no code changes needed.
(In Notepad: File → Open → choose "All files" → `data\portfolio.json`.)

1. **Links** (`links` section): email, WhatsApp, LinkedIn, GitHub, Medium.
   - Email, LinkedIn, GitHub and Medium were filled in from Sandeep's resume — change them here if needed.
   - **WhatsApp:** add a number, e.g. `"whatsapp": "+91 98xxxxxxxx"`. If left empty, the WhatsApp link won't appear on the site.
2. **Services** (`services`): each box's title, text, 3 check points (`points`), button text (`cta`) and the form category it selects (`formOption`).
3. **Apps** (`projects`): each app's name, description, features, and Play Store / GitHub links (`links`).
   `type` is `"live"` (Play Store Live badge) or `"business"` (Business App badge) — it decides which filter tab the app appears under.
   Any link left empty won't show a button.
4. **Screenshots:**
   - Put phone screenshots in the `public/screens/` folder, e.g. `groow-1.png`.
   - List the paths in that app's `screens`: `"screens": ["/screens/groow-1.png", "/screens/groow-2.png"]`
   - The first screenshot appears in the phone frame on the home page; all screenshots appear on the app's detail page.
   - With no screenshots, a designed phone mockup is shown instead.
5. **Tech Stack** (`stack`): the four groups of technologies.
6. **Availability** (`availability`): the location line in the contact section.
7. To add a new app, copy one block in `projects` and edit it (keep the `slug` short with no spaces, e.g. `"my-app"`).

JSON tips: separate entries with a comma `,` and keep text inside double quotes `" "`. If something is wrong, `npm run build` will show the error.

## How the contact form works

When a visitor fills in the form and clicks "Send enquiry", their email app opens with their name, number and idea already filled in, addressed to `links.email`. No server or paid service is needed.

## Run it locally (test first)

Requires Node.js 18.18 or newer.

```powershell
cd D:\Projects\dns-software-site
npm install
npm run dev
```

Open http://localhost:3000 in your browser. Before deploying, run once:

```powershell
npm run build
```

## Deploy to Vercel

### Option 1 — Via GitHub (recommended; every update goes live automatically)

1. Create a new GitHub repo, e.g. `dns-software-site`, and push the code:
   ```powershell
   git init
   git add .
   git commit -m "DNS Software website"
   git branch -M main
   git remote add origin https://github.com/<username>/dns-software-site.git
   git push -u origin main
   ```
2. Log in to https://vercel.com with GitHub.
3. **Add New → Project** → select the repo → **Deploy**. Vercel detects Next.js automatically.
4. In 1–2 minutes you'll get a link like `dns-software-site.vercel.app`.
5. From then on, edit `portfolio.json` and `git push` — the site updates on its own.

### Option 2 — Directly from the terminal

```powershell
npx vercel          # asks you to log in the first time
npx vercel --prod   # publishes the live site
```

### Custom domain (optional)

Vercel project → **Settings → Domains** → add your domain (e.g. `dnssoftware.in`), then add the DNS record Vercel shows at your domain provider.

## Files

```
app/layout.jsx                site shell, fonts, title
app/page.jsx                  home page (hero, services, work, tech stack, process, contact)
app/projects/[slug]/page.jsx  case-study page for each app
app/globals.css               all styling
components/                   Nav, Footer, Phone mockup, ProjectsGrid (filter),
                              ContactForm, ServiceLink, CopyEmail
data/portfolio.json           ALL CONTENT IS HERE
public/screens/               screenshots go here
```
