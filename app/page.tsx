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

const softwareLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Autofill Pro',
  applicationCategory: 'BrowserExtension',
  url: 'https://autofil-payments.vercel.app',
  operatingSystem: 'Chrome, Edge, Brave, Opera',
  publisher: {
    '@id': 'https://autofil-payments.vercel.app/#organization',
  },
  offers: {
    '@type': 'Offer',
    price: '2.00',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    priceValidUntil: '2025-12-31',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1250',
    bestRating: '5',
    worstRating: '1',
  },
  description: 'AI-powered form autofill for Chrome. Fill forms instantly with encrypted local storage. Unlimited profiles for work, personal, and more.',
  featureList: [
    'AI-powered smart field matching',
    'AES-256 encryption',
    'Unlimited profiles',
    'Works on any website',
    'No subscription',
    'Lifetime updates',
    'Local storage only',
    'Export/Import functionality'
  ],
  screenshot: 'https://autofil-payments.vercel.app/android-icon-192x192.png',
  softwareRequirements: 'Google Chrome, Microsoft Edge, or compatible Chromium browser',
};

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the AI-powered field matching work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our advanced AI analyzes form field labels, names, and types to intelligently match them with your profile data. It understands context and can handle variations in field naming across different websites.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my data really secure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! All your data is encrypted with AES-256 encryption and stored only in your browser\'s local storage. Nothing is ever uploaded to our servers or any cloud service. Your data never leaves your device.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use this on multiple computers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Each license allows activation on up to 2 browsers. You can use it on your work computer and home computer, or any combination of devices.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens if I need to reset my browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can export your profiles before resetting and import them after. The export is encrypted, so your data stays secure even in backup files.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does this work with all websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Autofill Pro works on any website with forms - job applications, checkout pages, sign-up forms, contact forms, and more. No configuration needed.'
      }
    },
    {
      '@type': 'Question',
      name: 'What payment methods do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept credit/debit cards via Stripe and cryptocurrency via Telegram CryptoBot. Both methods provide instant license delivery.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I get a refund?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied for any reason, contact us for a full refund.'
      }
    },
    {
      '@type': 'Question',
      name: 'How many profiles can I create?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlimited! Create as many profiles as you need - personal, work, freelance, different personas for different purposes. No restrictions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will this extension slow down my browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No! Autofill Pro is highly optimized and only activates when you press the keyboard shortcut. It has minimal impact on browser performance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do you track my data or browsing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never! We have zero tracking, zero analytics, and zero data collection. Your privacy is our top priority.'
      }
    }
  ]
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://autofil-payments.vercel.app'
    }
  ]
};

const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://autofil-payments.vercel.app/#organization',
  name: 'Autofill Pro',
  url: 'https://autofil-payments.vercel.app',
  logo: 'https://autofil-payments.vercel.app/android-icon-192x192.png',
  sameAs: [
    'https://twitter.com/autofillpro',
    'https://github.com/autofillpro'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@autofillpro.com',
    contactType: 'customer support'
  }
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Script
        id="json-ld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
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
