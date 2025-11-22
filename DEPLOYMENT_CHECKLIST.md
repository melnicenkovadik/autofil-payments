# Production Deployment Checklist

## Pre-Deployment

### Content & Assets
- [ ] Replace placeholder domain `autofillpro.com` with actual domain
  - [ ] `app/layout.tsx` - metadataBase URL
  - [ ] `app/sitemap.ts` - baseUrl
  - [ ] `README.md` - all domain references
- [ ] Create and add social sharing image
  - [ ] `/public/og-image.png` (1200x630px)
- [ ] Create and add icons
  - [ ] `/public/favicon.ico`
  - [ ] `/public/apple-touch-icon.png` (180x180px)
  - [ ] `/public/icon-192.png` (192x192px)
  - [ ] `/public/icon-512.png` (512x512px)
- [ ] Update social media handles in `app/layout.tsx` (Twitter @handle)
- [ ] Verify all email addresses are correct

### Configuration
- [ ] Create `.env.production` with production keys
  - [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
  - [ ] `STRIPE_SECRET_KEY`
  - [ ] `STRIPE_WEBHOOK_SECRET`
  - [ ] `STRIPE_PRICE_ID`
  - [ ] `NEXT_PUBLIC_SITE_URL`
  - [ ] Optional: Telegram bot tokens
  - [ ] Optional: Vercel KV credentials
- [ ] Update Chrome Web Store link in Footer component
- [ ] Configure Stripe webhooks
  - [ ] `https://yourdomain.com/api/stripe/webhook`
- [ ] Test Stripe payment flow in test mode
- [ ] Set up Telegram CryptoBot (if using crypto payments)

### SEO & Analytics
- [ ] Verify all meta tags are correct
- [ ] Test structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Set up error monitoring (Sentry, etc.)

### Performance
- [ ] Run Lighthouse audit (target: 90+ score)
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Optimize images if needed
- [ ] Test all animations and interactions
- [ ] Verify TargetCursor works correctly on all interactive elements

### Security
- [ ] Review all API endpoints
- [ ] Ensure environment variables are not exposed
- [ ] Verify CORS settings
- [ ] Check CSP headers
- [ ] Review rate limiting for API routes

### Testing
- [ ] Test all pages load correctly
- [ ] Test 404 and error pages
- [ ] Test loading states
- [ ] Test form validation in LiveDemo
- [ ] Test Cmd+Shift+F keyboard shortcut in demo
- [ ] Test all navigation links
- [ ] Test scroll to section links
- [ ] Test responsive design on all screen sizes
- [ ] Test FAQ accordion functionality
- [ ] Test payment flows (Stripe + Crypto)
- [ ] Verify license activation works
- [ ] Test email notifications

## Deployment

### Build & Deploy
- [ ] Run `npm run build` locally to check for errors
- [ ] Fix any build errors or warnings
- [ ] Deploy to Vercel or hosting platform
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic with Vercel)
- [ ] Configure environment variables in hosting platform

### Post-Deployment
- [ ] Test production site thoroughly
- [ ] Verify all assets load correctly
- [ ] Test payment processing with real payment
- [ ] Check analytics are tracking
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Set up uptime monitoring
- [ ] Create backups of database/KV

## Marketing

### Chrome Web Store
- [ ] Update extension with license activation
- [ ] Link to landing page from extension
- [ ] Add "Get Pro" button in extension

### Social Media
- [ ] Share on Twitter/X
- [ ] Share on Product Hunt
- [ ] Share on Reddit (r/SideProject, r/webdev)
- [ ] Share on Hacker News
- [ ] Share on IndieHackers

### Content
- [ ] Write blog post about features
- [ ] Create demo video
- [ ] Update README with actual links
- [ ] Create changelog

## Monitoring

### Ongoing
- [ ] Monitor error logs
- [ ] Monitor payment success rate
- [ ] Monitor site performance
- [ ] Monitor user feedback
- [ ] Update content based on user questions
- [ ] Respond to support emails

## Notes

### Important URLs
- Production: https://yourdomain.com
- Stripe Dashboard: https://dashboard.stripe.com
- Vercel Dashboard: https://vercel.com/dashboard
- Google Search Console: https://search.google.com/search-console

### Support Contacts
- Email: support@autofillpro.com
- For emergencies: [Add emergency contact]

### Known Issues
- None at deployment

### Next Steps
- [ ] Add more testimonials after launch
- [ ] Add case studies
- [ ] Add video tutorials
- [ ] Expand FAQ based on user questions

