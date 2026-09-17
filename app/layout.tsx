import { Geist, Geist_Mono } from 'next/font/google';
import { NavBar } from '@/src/common/components/navigation';
import { env } from '@/src/common/utilities/env';
import { navRoutes } from '@/src/common/utilities/routes';
import { configureMetadata } from '@/src/common/utilities/site';
import './globals.css';

export const metadata = configureMetadata({
  url: `/${env.publicBasePath}`,
  description:
    'Discover Japan beyond the standard tourist trail. Join us as we navigate the bustling streets of Osaka, chase thrills at Universal Studios, and dive into the crystal-clear waters and vibrant culture of Okinawa. Your ultimate guide to urban adventures, island escapes, and unforgettable travel experiences.',
  socialMediaDescription:
    "Follow our journey through Japan: from Osaka's high-energy neon streets to ocean adventures in Okinawa. Get real travel guides, local food spots, and itinerary inspiration.",
});

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-svh flex-col">
        <NavBar routes={navRoutes} />
        {children}
      </body>
    </html>
  );
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
