# Michigan TEA Website (Next.js + Tailwind)

This is a small scaffold for the Michigan Technology Exploration Award (TEA) site built with Next.js (app router) and Tailwind CSS. It includes a homepage, timeline, FAQ, and a submission form with a simple server API that appends submissions to `data/submissions.json`.

Quick start

1. Install dependencies

```bash
cd /path/to/Michigan-TEA
npm install
```

2. Run dev server

```bash
npm run dev
```

Notes & next steps

- The submission endpoint writes to `data/submissions.json` on the local filesystem. For production, replace this with a Google Form, Airtable, or a secure database / Google Sheets integration.
- Customize wording, dates, contacts, and styles to match Michigan ACM-W branding.
- To add accessibility and tests, add unit tests and improve semantic markup.

Images and photos

- The site currently uses Unsplash placeholder images for student/event photos. For production, replace these with photos you have permission to use (ACM‑W chapter photos).
- Add photos to `frontend/public/images/` and reference them from components (recommended). Example: `public/images/chapter-1.jpg` then in code use `/images/chapter-1.jpg` as the image src.


Files added

- `app/` - Next.js app router pages and API route
- `components/` - Header, Footer, Hero, Timeline, FAQ, SubmissionForm
- `data/submissions.json` - local storage for submissions (dev only)
# Michigan-TEA