# Autofill Pro - Landing Page

AI-powered form autofill Chrome extension landing page built with Next.js 16, React 19, and Framer Motion.

## Features

- ⚡ **Next.js 16** with App Router and Turbopack
- 🎨 **Tailwind CSS** for styling
- 🎭 **Framer Motion** for animations
- 🔒 **TypeScript** for type safety
- 💳 **Stripe** integration for payments
- 🤖 **Telegram CryptoBot** for crypto payments
- 📊 **SEO optimized** with meta tags and JSON-LD
- 🚀 **Performance optimized** with lazy loading and code splitting
- 📱 **Fully responsive** design
- ♿ **Accessible** components

## Tech Stack

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Components**: Mantine (Notifications)
- **Payments**: Stripe, Telegram CryptoBot
- **Database**: Vercel KV (Redis)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Stripe account
- Telegram Bot (optional, for crypto payments)
- Vercel KV database (optional, for license management)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd autofil-payments
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file (copy from `.env.example`)
```bash
# Add your API keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_ID=price_...

# Telegram (optional)
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CRYPTO_BOT_TOKEN=your_crypto_bot_token

# Vercel KV (optional)
KV_URL=your_kv_url
KV_REST_API_URL=your_kv_rest_api_url
KV_REST_API_TOKEN=your_kv_rest_api_token

# Site URL
NEXT_PUBLIC_SITE_URL=https://autofillpro.com
```

4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
autofil-payments/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   ├── license/         # License management
│   │   ├── stripe/          # Stripe integration
│   │   └── telegram/        # Telegram bot integration
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   ├── not-found.tsx        # 404 page
│   └── sitemap.ts           # Dynamic sitemap
├── components/              # React components
│   ├── ui/                  # Reusable UI components
│   │   ├── TargetCursor.tsx # Interactive cursor effect
│   │   ├── Lightning.tsx    # Lightning background effect
│   │   └── ScrollStack.tsx  # Scroll-based stacking
│   ├── Hero.tsx             # Hero section
│   ├── LiveDemo.tsx         # Interactive demo
│   ├── Features.tsx         # Features grid
│   ├── UseCases.tsx         # Use cases section
│   ├── Testimonials.tsx     # Customer testimonials
│   ├── FAQ.tsx              # FAQ accordion
│   ├── Pricing.tsx          # Pricing section
│   ├── Footer.tsx           # Footer
│   ├── ErrorBoundary.tsx    # Error boundary component
│   └── LoadingSpinner.tsx   # Loading component
├── public/                  # Static assets
│   ├── robots.txt          # SEO robots file
│   └── manifest.json       # PWA manifest
├── lib/                    # Utility functions
└── next.config.ts         # Next.js configuration
```

## SEO Optimization

The landing page includes comprehensive SEO optimization:

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ JSON-LD structured data
- ✅ Dynamic sitemap
- ✅ robots.txt
- ✅ PWA manifest
- ✅ Semantic HTML
- ✅ Performance optimization

## Performance Features

- Code splitting and lazy loading
- Image optimization with Next.js Image
- Font optimization with next/font
- CSS optimization with Tailwind
- Compression enabled
- Cache headers configured
- Security headers configured

## Before Deploying to Production

### 1. Update Environment Variables
- Set production API keys in `.env.production`
- Update `NEXT_PUBLIC_SITE_URL` to your domain

### 2. Update Domain References
Replace placeholder domain in:
- `app/layout.tsx` (metadataBase)
- `app/sitemap.ts` (baseUrl)
- All Open Graph URLs

### 3. Create Required Images
Create and add to `/public`:
- `og-image.png` (1200x630px) - For social sharing
- `favicon.ico` - Favicon
- `apple-touch-icon.png` (180x180px) - iOS icon
- `icon-192.png` (192x192px) - PWA icon
- `icon-512.png` (512x512px) - PWA icon

### 4. Configure Stripe
- Set up products and prices in Stripe Dashboard
- Configure webhook endpoints
- Test payment flow in test mode
- Switch to production keys

### 5. Test Everything
```bash
# Build for production
npm run build

# Start production server
npm start
```

Test:
- All pages load correctly
- Forms work
- Payments process
- SEO tags are correct
- Performance is good
- Mobile responsiveness
- Error pages work

### 6. Deploy

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Manual Deployment
```bash
npm run build
```
Upload `.next` folder and other required files to your hosting.

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | Yes |
| `STRIPE_SECRET_KEY` | Stripe secret key | Yes |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | Yes |
| `STRIPE_PRICE_ID` | Stripe price ID for $2 product | Yes |
| `TELEGRAM_BOT_TOKEN` | Telegram bot token | Optional |
| `TELEGRAM_CRYPTO_BOT_TOKEN` | Crypto bot token | Optional |
| `KV_URL` | Vercel KV URL | Optional |
| `KV_REST_API_URL` | KV REST API URL | Optional |
| `KV_REST_API_TOKEN` | KV API token | Optional |
| `NEXT_PUBLIC_SITE_URL` | Production site URL | Yes |

## Performance Metrics Target

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## License

Private - All rights reserved

## Support

For support, email support@autofillpro.com
