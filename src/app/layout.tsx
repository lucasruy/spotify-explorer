import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { I18nProvider, ReactQueryProvider, ThemeProvider } from "@/core/providers";
import { getCurrentUser } from '@/features/user';
import { Navbar } from '@/widgets/navbar';
import type { SupportedLanguage } from '@/shared/i18n';

//TODO: Identificar preferências do usuário via SSR/CSR
const METADATA_DESCRIPTION: Record<SupportedLanguage, string> = {
  'pt-BR':
    'Descubra artistas, acompanhe métricas e personalize sua experiência usando a Spotify Web API.',
  'en-US':
    'Discover artists, track metrics, and tailor your experience with the Spotify Web API.',
};

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Spotify Explorer',
  description: METADATA_DESCRIPTION['pt-BR'],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>
            <ReactQueryProvider>
              <div className="flex min-h-screen flex-col">
                <Navbar user={user} />
                <main className="flex-1">{children}</main>
              </div>
            </ReactQueryProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
