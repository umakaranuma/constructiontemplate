import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import 'aos/dist/aos.css';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import AosInit from '@/components/AosInit';
import Preloader from '@/components/Preloader';
import CursorGlow from '@/components/CursorGlow';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ApexBuild Construction | Building Excellence, Delivering Trust',
  description:
    'ApexBuild Construction — residential, commercial & renovation contractors delivering quality construction projects on time, every time.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
        <ThemeProvider>
          <Preloader />
          <CursorGlow />
          <AosInit />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
