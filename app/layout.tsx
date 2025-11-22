import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Analytics } from '@/components/Analytics';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Autofill Pro - AI-Powered Form Autofill for Chrome | $2 Lifetime",
  description: "Fill forms instantly with AI-powered autofill. AES-256 encrypted, unlimited profiles, works everywhere. No subscription - just $2 for lifetime access.",
  keywords: ["autofill", "form filler", "chrome extension", "AI autofill", "form automation", "encrypted autofill", "password manager alternative"],
  authors: [{ name: "Autofill Pro" }],
  creator: "Autofill Pro",
  publisher: "Autofill Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://autofillpro.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Autofill Pro - AI-Powered Form Autofill for Chrome",
    description: "Fill forms in seconds with AI-powered autofill. Encrypted locally, unlimited profiles. One-time payment of $2 for lifetime access.",
    url: 'https://autofillpro.com',
    siteName: 'Autofill Pro',
    images: [
      {
        url: '/og-image.png', // You'll need to create this
        width: 1200,
        height: 630,
        alt: 'Autofill Pro - AI-Powered Form Autofill',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Autofill Pro - AI-Powered Form Autofill for Chrome",
    description: "Fill forms in seconds with AI-powered autofill. Just $2 for lifetime access.",
    images: ['/og-image.png'], // You'll need to create this
    creator: '@autofillpro', // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <MantineProvider>
          <Notifications position="top-right" />
          {children}
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
