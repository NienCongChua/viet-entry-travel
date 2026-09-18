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

## Deploying to Cloudflare Workers

The backend can be deployed directly as a serverless Cloudflare Worker (`worker.js`).

### Option 1: Automatic Deploy on Git Push (GitHub Actions)

This repository includes `.github/workflows/deploy-backend.yml` which automatically deploys whenever you push changes to `main` within `backend/`.

**Steps to activate:**
1. In Cloudflare Dashboard:
   - Go to **My Profile** > **API Tokens** > **Create Token**.
   - Use the **Edit Cloudflare Workers** template (or give `Account > Workers Scripts > Edit` permission).
   - Copy the generated API Token.
   - Note your **Account ID** (visible in Cloudflare Dashboard URL or on the Workers overview sidebar).
2. In GitHub repository (`NienCongChua/viet-entry-travel`):
   - Go to **Settings** > **Secrets and variables** > **Actions**.
   - Add two Repository Secrets:
     - `CLOUDFLARE_API_TOKEN` = `<your-api-token>`
     - `CLOUDFLARE_ACCOUNT_ID` = `<your-account-id>`
3. Set your Secrets in Cloudflare (for sending email):
   - In Cloudflare Dashboard > **Workers & Pages** > `viet-entry-travel-backend` > **Settings** > **Variables and Secrets**:
     - `SMTP_USER`: `info@vietentrytravel.com`
     - `SMTP_PASS`: `Canmoc1ti2026@` (or your mail password)
     - *(Optional)* `RESEND_API_KEY`: If you prefer using Resend HTTP API instead of direct SMTP.
4. Push to `main` — GitHub Actions will automatically deploy your Worker!

### Option 2: Deploy manually from CLI

```bash
cd backend
npx wrangler login
npx wrangler deploy
# Set secret credentials:
npx wrangler secret put SMTP_USER
npx wrangler secret put SMTP_PASS
```

Once deployed, Cloudflare gives you a Worker URL like `https://viet-entry-travel-backend.<subdomain>.workers.dev`. Set `VITE_API_URL` in your frontend to this URL.
