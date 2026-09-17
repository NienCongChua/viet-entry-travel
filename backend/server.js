import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';

const requiredEnv = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'OWNER_EMAIL'];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.warn(
    `[viet-entry-travel-backend] Missing env vars: ${missingEnv.join(', ')}. ` +
    'Copy .env.example to .env and fill in real values before sending mail.'
  );
}

const app = express();
app.disable('x-powered-by');
app.use(express.json({ limit: '100kb' }));

const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (/^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error('Not allowed by CORS'));
    },
  })
);

const quoteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many requests. Please try again later.' },
});
app.use('/api/', quoteLimiter);

const rawHost = process.env.SMTP_HOST || '';
const cleanHost = rawHost.replace(/^https?:\/\//i, '').replace(/\/.*$/, '').trim();

const transporter = nodemailer.createTransport({
  host: cleanHost,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  tls: {
    rejectUnauthorized: false,
  },
});

const escapeHtml = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || ''));

app.post('/api/quote-requests', async (req, res) => {
  const body = req.body || {};
  const {
    title,
    name,
    phone,
    email,
    destination,
    tourName,
    travelTime,
    duration,
    accommodation,
    people,
    wantsFlightQuote,
    message,
    website, // honeypot — real users never fill this hidden field
  } = body;

  // Silently accept and drop likely-bot submissions.
  if (website) {
    return res.json({ ok: true });
  }

  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ ok: false, error: 'Please enter your name.' });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }

  const referenceCode = `VET-${Math.floor(100000 + Math.random() * 900000)}`;
  const greeting = title ? `${title} ${name}` : name;

  const fields = [
    ['Reference Code', `#${referenceCode}`],
    ['Title', title],
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Destination', destination],
    ['Tour of interest', tourName],
    ['Preferred travel time', travelTime],
    ['Trip duration', duration],
    ['Accommodation', accommodation],
    ['Number of people', people],
    ['Wants international flight quote', wantsFlightQuote ? 'Yes' : 'No'],
    ['Message', message],
  ];

  const adminTextBody = fields.map(([label, value]) => `${label}: ${value || '-'}`).join('\n');
  const adminHtmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;">
  <div style="width:100%;background-color:#f3f4f6;padding:28px 12px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:620px;margin:0 auto;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.06);border:1px solid #e5e7eb;">
      <tr>
        <td style="background-color:#08261e;padding:22px 24px;text-align:center;border-bottom:2px solid #d4af37;">
          <img src="https://vietentrytravel.com/icon/icon-1000x1000.png" alt="Viet Entry Travel" width="48" height="48" style="display:block;margin:0 auto 8px;border-radius:50%;border:2px solid #d4af37;" />
          <h2 style="color:#ffffff;margin:0;font-size:18px;letter-spacing:1.5px;text-transform:uppercase;">New Quote Request</h2>
          <div style="color:#d4af37;font-weight:700;margin-top:4px;font-size:13px;letter-spacing:1px;">REFERENCE: #${escapeHtml(referenceCode)}</div>
        </td>
      </tr>
      <tr>
        <td style="padding:24px;">
          <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
            ${fields
              .map(
                ([label, value], idx) =>
                  `<tr style="border-bottom:${idx === fields.length - 1 ? 'none' : '1px solid #f1f5f9'};background-color:${idx % 2 === 0 ? '#ffffff' : '#f8fafc'};">
                    <td style="padding:10px 14px;font-weight:600;color:#475569;width:38%;font-size:13px;vertical-align:top;">${escapeHtml(label)}</td>
                    <td style="padding:10px 14px;color:#0f172a;font-size:13.5px;vertical-align:top;">${escapeHtml(value || '-')}</td>
                  </tr>`
              )
              .join('')}
          </table>
          <div style="margin-top:20px;text-align:center;">
            <a href="mailto:${escapeHtml(email)}?subject=Re:%20Viet%20Entry%20Travel%20Quote%20%5B${referenceCode}%5D" style="display:inline-block;background-color:#059669;color:#ffffff;font-weight:600;text-decoration:none;padding:10px 22px;border-radius:6px;font-size:13px;margin-right:8px;">
              Reply to ${escapeHtml(name)} (${escapeHtml(email)})
            </a>
            ${phone ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(name)}%2C%20regarding%20your%20Viet%20Entry%20Travel%20quote%20%23${referenceCode}" style="display:inline-block;background-color:#25D366;color:#ffffff;font-weight:600;text-decoration:none;padding:10px 20px;border-radius:6px;font-size:13px;">WhatsApp Client</a>` : ''}
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;

  const customerTextBody = `Dear ${greeting},

Thank you for choosing Viet Entry Travel! We have received your inquiry.

Your Quote Reference Number: #${referenceCode}

Summary of your trip preferences:
- Destination / Tour: ${tourName || destination || 'Tailor-Made Custom Tour'}
- Travel Period: ${travelTime || 'Flexible'}
- Trip Duration: ${duration || 'Flexible'}
- Travelers: ${people || '1'} traveler(s)
- Accommodation Style: ${accommodation || 'Selected Comfort'}
- International Flight Quote: ${wantsFlightQuote ? 'Yes — please include international flights' : 'No — land arrangements only'}
- Special Wishes / Notes: ${message || '-'}

What happens next?
1. Expert Review: Our destination specialist analyzes your route, dates, and preferences.
2. Custom Proposal: Within 24 hours, we will email you a tailored itinerary with transparent pricing.
3. Fine-Tune Together: We adjust hotels, activities, and timings until your trip is 100% perfect.

Need immediate assistance or prefer to chat right now?
- WhatsApp: +84 3386 49908 (https://wa.me/84338649908?text=Hello%20Viet%20Entry%20Travel%2C%20my%20quote%20reference%20is%20${referenceCode})
- Email: info@vietentrytravel.com
- Website: https://vietentrytravel.com

Warmest regards,
Viet Entry Travel Team
Hanoi, Vietnam`;

  const customerHtmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request Received — Viet Entry Travel</title>
</head>
<body style="margin:0;padding:0;background-color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;color:#1e293b;">
  <div style="width:100%;background-color:#f3f4f6;padding:32px 12px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.07);border:1px solid #e5e7eb;">
      
      <!-- Top Brand Bar -->
      <tr>
        <td style="background-color:#08261e;padding:28px 24px 22px;text-align:center;border-bottom:1px solid rgba(212,175,55,0.25);">
          <table align="center" border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding-bottom:10px;">
                <img src="https://vietentrytravel.com/icon/icon-1000x1000.png" alt="Viet Entry Travel" width="56" height="56" style="display:block;border-radius:50%;border:2px solid #d4af37;box-shadow:0 4px 12px rgba(0,0,0,0.35);" />
              </td>
            </tr>
            <tr>
              <td align="center">
                <span style="display:block;color:#ffffff;font-family:'Playfair Display',Georgia,'Times New Roman',serif;font-size:21px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">VIET ENTRY TRAVEL</span>
                <span style="display:block;color:#d4af37;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600;margin-top:4px;">Tailor-Made Journeys Across Vietnam</span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Hero Scenic Banner -->
      <tr>
        <td style="padding:0;line-height:0;background-color:#08261e;">
          <img src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80" alt="Halong Bay Vietnam" width="600" style="width:100%;max-height:190px;object-fit:cover;display:block;" />
          <div style="height:3px;background:linear-gradient(90deg,#d4af37 0%,#fef3c7 50%,#d4af37 100%);line-height:3px;font-size:1px;">&nbsp;</div>
        </td>
      </tr>

      <!-- Main Content Area -->
      <tr>
        <td style="padding:32px 28px 24px;">
          
          <!-- Status Pill -->
          <div style="display:inline-block;background-color:#ecfdf5;border:1px solid #a7f3d0;color:#047857;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:20px;">
            ✓ Quote Request Received
          </div>

          <!-- Greeting -->
          <h2 style="font-family:'Playfair Display',Georgia,'Times New Roman',serif;font-size:22px;color:#0f172a;margin:0 0 12px;font-weight:700;">
            Dear ${escapeHtml(greeting)},
          </h2>
          <p style="color:#475569;font-size:14.5px;line-height:1.65;margin:0 0 24px;">
            Thank you for choosing <strong>Viet Entry Travel</strong>! We have received your inquiry. Our travel specialists are currently reviewing your preferences to handcraft an authentic, seamless travel experience tailored just for you.
          </p>

          <!-- VIP Boarding Pass Reference Card -->
          <div style="background-color:#f8fafc;border:1.5px dashed #059669;border-radius:12px;padding:18px 20px;margin-bottom:28px;text-align:center;">
            <span style="display:block;font-size:11px;font-weight:700;color:#065f46;letter-spacing:1.5px;text-transform:uppercase;">Your Quote Reference Number</span>
            <span style="display:block;font-size:26px;font-weight:800;color:#047857;letter-spacing:2px;font-family:monospace,-apple-system;margin:6px 0 6px;">#${escapeHtml(referenceCode)}</span>
            <span style="display:inline-block;font-size:11.5px;color:#065f46;background-color:#d1fae5;padding:3px 12px;border-radius:10px;font-weight:600;">
              Priority: High · Assigned to Travel Expert
            </span>
          </div>

          <!-- Trip Details Table -->
          <div style="border:1px solid #e2e8f0;border-radius:12px;overflow:hidden;margin-bottom:28px;">
            <div style="background-color:#08261e;padding:12px 18px;color:#ffffff;font-size:12px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;">
              Your Trip Request Summary
            </div>
            <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;background-color:#ffffff;">
              <tr style="border-bottom:1px solid #f1f5f9;background-color:#ffffff;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;width:40%;vertical-align:top;">📍 Destination / Tour</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(tourName || destination || 'Custom Itinerary')}</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;background-color:#fafafa;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">🗓️ Travel Period</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(travelTime || 'Flexible')}</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;background-color:#ffffff;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">⏱️ Trip Duration</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(duration || 'Flexible')}</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;background-color:#fafafa;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">👥 Travelers</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(people || '1')} traveler(s)</td>
              </tr>
              <tr style="border-bottom:1px solid #f1f5f9;background-color:#ffffff;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">🏨 Accommodation</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(accommodation || 'Selected Comfort')}</td>
              </tr>
              <tr style="border-bottom:${message ? '1px solid #f1f5f9' : 'none'};background-color:#fafafa;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">✈️ International Flights</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${wantsFlightQuote ? 'Yes — please include international flight quotation' : 'No — land arrangements only'}</td>
              </tr>
              ${
                message
                  ? `<tr style="background-color:#ffffff;">
                <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#475569;vertical-align:top;">💬 Special Wishes</td>
                <td style="padding:12px 16px;font-size:13.5px;color:#0f172a;line-height:1.5;vertical-align:top;">${escapeHtml(message)}</td>
              </tr>`
                  : ''
              }
            </table>
          </div>

          <!-- 3-Step Next Steps -->
          <div style="background-color:#f9fbf9;border:1px solid #e2ece3;border-radius:12px;padding:20px;margin-bottom:28px;">
            <h3 style="color:#065f46;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;margin:0 0 14px;">
              What Happens Next?
            </h3>
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="width:28px;vertical-align:top;padding-bottom:12px;">
                  <div style="width:22px;height:22px;border-radius:50%;background-color:#059669;color:#ffffff;text-align:center;font-size:11px;font-weight:bold;line-height:22px;">1</div>
                </td>
                <td style="padding-left:10px;padding-bottom:12px;font-size:13px;color:#334155;line-height:1.5;">
                  <strong>Expert Review:</strong> We analyze your route, duration, and accommodation style to optimize your travel flow.
                </td>
              </tr>
              <tr>
                <td style="width:28px;vertical-align:top;padding-bottom:12px;">
                  <div style="width:22px;height:22px;border-radius:50%;background-color:#059669;color:#ffffff;text-align:center;font-size:11px;font-weight:bold;line-height:22px;">2</div>
                </td>
                <td style="padding-left:10px;padding-bottom:12px;font-size:13px;color:#334155;line-height:1.5;">
                  <strong>Customized Proposal:</strong> Within <strong>24 hours</strong>, we will email you a day-by-day itinerary with transparent pricing.
                </td>
              </tr>
              <tr>
                <td style="width:28px;vertical-align:top;">
                  <div style="width:22px;height:22px;border-radius:50%;background-color:#059669;color:#ffffff;text-align:center;font-size:11px;font-weight:bold;line-height:22px;">3</div>
                </td>
                <td style="padding-left:10px;font-size:13px;color:#334155;line-height:1.5;">
                  <strong>Fine-Tune to Perfection:</strong> We adjust hotels, activities, and timings together until you are 100% delighted.
                </td>
              </tr>
            </table>
          </div>

          <!-- WhatsApp Concierge Card -->
          <div style="background:linear-gradient(135deg,#08261e 0%,#064e3b 100%);border-radius:12px;padding:22px 20px;text-align:center;color:#ffffff;margin-bottom:24px;">
            <p style="margin:0 0 6px;font-size:15px;font-weight:700;color:#ffffff;">Want to discuss your trip right away?</p>
            <p style="margin:0 0 16px;font-size:13px;color:#a7f3d0;line-height:1.5;">Our local destination experts are available on WhatsApp for instant assistance.</p>
            <a href="https://wa.me/84338649908?text=Hello%20Viet%20Entry%20Travel%2C%20my%20quote%20reference%20is%20${referenceCode}"
               target="_blank"
               style="display:inline-block;background-color:#25D366;color:#ffffff;font-weight:700;text-decoration:none;padding:12px 26px;border-radius:8px;font-size:14px;box-shadow:0 4px 14px rgba(37,211,102,0.4);">
              💬 Chat on WhatsApp (+84 3386 49908)
            </a>
          </div>

        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 28px;text-align:center;font-size:12px;color:#64748b;line-height:1.6;">
          <p style="margin:0 0 4px;font-weight:700;color:#0f172a;font-size:13px;letter-spacing:0.5px;">VIET ENTRY TRAVEL</p>
          <p style="margin:0 0 8px;">Hanoi, Vietnam · Dedicated Concierge: <a href="mailto:info@vietentrytravel.com" style="color:#059669;text-decoration:none;font-weight:600;">info@vietentrytravel.com</a></p>
          <p style="margin:0;color:#94a3b8;font-size:11px;">
            You received this confirmation because you submitted a trip quote request at <a href="https://vietentrytravel.com" style="color:#64748b;text-decoration:underline;">vietentrytravel.com</a>.
          </p>
        </td>
      </tr>

    </table>
  </div>
</body>
</html>
  `;

  try {
    // 1. Send notification to site owner/admin
    await transporter.sendMail({
      from: `"Viet Entry Travel Website" <${process.env.SMTP_USER}>`,
      to: process.env.OWNER_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `[${referenceCode}] New quote request from ${name}`,
      text: adminTextBody,
      html: adminHtmlBody,
    });

    // 2. Send confirmation auto-reply to the customer
    try {
      await transporter.sendMail({
        from: `"Viet Entry Travel" <${process.env.SMTP_USER}>`,
        to: `"${name}" <${email}>`,
        replyTo: process.env.OWNER_EMAIL || process.env.SMTP_USER,
        subject: `Your Vietnam Journey Awaits [${referenceCode}] — Viet Entry Travel`,
        text: customerTextBody,
        html: customerHtmlBody,
      });
    } catch (customerMailErr) {
      console.error('[viet-entry-travel-backend] Failed to send confirmation email to customer:', customerMailErr.message);
    }

    res.json({ ok: true, referenceCode });
  } catch (err) {
    console.error('[viet-entry-travel-backend] Failed to send email:', err.message);
    res.status(500).json({
      ok: false,
      error: 'We could not send your request right now. Please try again shortly or contact us directly.',
    });
  }
});

app.get('/health', (_req, res) => res.json({ ok: true }));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[viet-entry-travel-backend] Listening on http://localhost:${port}`);
});
