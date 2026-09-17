# Viet Entry Travel — Backend

A minimal API that receives "Request a Quote" submissions from the website
and emails them to the team. No database — it only sends mail.

## Setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env`:

- `OWNER_EMAIL` — the inbox that should receive quote requests (e.g.
  `info@vietentrytravel.com`).
- `SMTP_USER` / `SMTP_PASS` — the mailbox used to *send* the email.
  For Gmail:
  1. Turn on 2-Step Verification: https://myaccount.google.com/security
  2. Create an App Password: https://myaccount.google.com/apppasswords
  3. Use that 16-character password as `SMTP_PASS` (not your normal Gmail password).
- `FRONTEND_ORIGIN` — the URL(s) of the website allowed to call this API,
  comma-separated (e.g. `https://vietentrytravel.com,https://www.vietentrytravel.com`).

## Run

```bash
npm run dev     # auto-restarts on file changes
# or
npm start
```

The API listens on `http://localhost:4000` by default.

## Endpoints

- `POST /api/quote-requests` — body is the quote form fields (name, email,
  phone, destination, tourName, travelTime, duration, accommodation, people,
  wantsFlightQuote, message). Validates `name` and `email`, then emails
  `OWNER_EMAIL` with `replyTo` set to the customer's address so you can just
  hit "Reply" in your inbox. Rate-limited to 20 requests / 15 minutes per IP.
- `GET /health` — returns `{ ok: true }`, useful for uptime checks.

## Frontend wiring

The React app calls this API via `VITE_API_URL` (see the root `.env.example`).
Set it to wherever this backend is deployed, e.g.:

```
VITE_API_URL=https://api.vietentrytravel.com
```

## Deploying

This is a plain Node/Express app — it runs on any Node host (Render, Railway,
Fly.io, a VPS with pm2, etc.). Set the same environment variables from `.env`
in your hosting provider's dashboard; do not commit `.env` itself.
