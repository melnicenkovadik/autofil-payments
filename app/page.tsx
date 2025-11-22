'use client';

import { Hero } from '@/components/Hero';
import { LiveDemo } from '@/components/LiveDemo';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { UseCases } from '@/components/UseCases';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';
import { TargetCursor } from '@/components/ui/TargetCursor';
import Script from 'next/script';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Autofill Pro',
  applicationCategory: 'BrowserExtension',
  operatingSystem: 'Chrome',
  offers: {
    '@type': 'Offer',
    price: '2.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '10000',
  },
  description: 'AI-powered form autofill for Chrome. Fill forms instantly with encrypted local storage. Unlimited profiles for work, personal, and more.',
  featureList: [
    'AI-powered smart field matching',
    'AES-256 encryption',
    'Unlimited profiles',
    'Works on any website',
    'No subscription',
    'Lifetime updates',
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TargetCursor color="rgb(168, 85, 247)" size={20} />
      <main className="min-h-screen">
        <Hero />
        <LiveDemo />
        <Features />
        <Comparison />
        <UseCases />
        <Testimonials />
        <FAQ />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
