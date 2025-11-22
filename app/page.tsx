'use client';

import { Hero } from '@/components/Hero';
import { LiveDemo } from '@/components/LiveDemo';
import { Features } from '@/components/Features';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <LiveDemo />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}
