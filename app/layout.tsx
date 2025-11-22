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
  title: {
    default: "Autofill Pro - AI-Powered Form Autofill for Chrome | Lifetime Access",
    template: "%s | Autofill Pro"
  },
  applicationName: "Autofill Pro",
  category: "productivity",
  description: "Stop typing manually. Autofill Pro uses AI to fill forms instantly. AES-256 encrypted, unlimited profiles, works on any website. Get lifetime access for just $2.",
  keywords: [
    "autofill",
    "form filler",
    "chrome extension",
    "AI autofill",
    "form automation",
    "encrypted autofill",
    "password manager alternative",
    "auto fill extension",
    "form filler chrome",
    "productivity tool"
  ],
  authors: [{ name: "Autofill Pro", url: "https://autofil-payments.vercel.app" }],
  creator: "Autofill Pro",
  publisher: "Autofill Pro",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://autofil-payments.vercel.app'),
  verification: {
    google: "ClD0bz26CR4SDG3ky_jCLBbaTwmIT0PlnrIR5T_mpJ8",
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Autofill Pro - AI-Powered Form Autofill for Chrome",
    description: "Stop typing manually. Fill forms in seconds with AI-powered autofill. Encrypted locally, unlimited profiles. One-time payment of $2 for lifetime access.",
    url: 'https://autofil-payments.vercel.app',
    siteName: 'Autofill Pro',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://autofil-payments.vercel.app/android-icon-192x192.png',
        width: 192,
        height: 192,
        alt: 'Autofill Pro - AI-powered form autofill Chrome extension',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Autofill Pro - AI-Powered Form Autofill for Chrome",
    description: "Stop typing manually. Fill forms in seconds with AI-powered autofill. Just $2 for lifetime access.",
    creator: '@autofillpro',
    images: ['https://autofil-payments.vercel.app/android-icon-192x192.png'],
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
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Autofill Pro',
    statusBarStyle: 'default',
  },
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
