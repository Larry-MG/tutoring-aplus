import type { Metadata } from 'next';
import { Libre_Baskerville, Caveat } from 'next/font/google';
import './globals.css';

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-chalk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tutoring A+ — Math & Physics Tutoring for High School Students',
  description:
    'Personalized math and physics tutoring for high school students. Algebra, Geometry, Mechanics, Electricity & Magnetism. Online and in-person in Oak Park/Agoura Hills, CA.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${libreBaskerville.variable} ${caveat.variable}`}>
      <body className="leading-relaxed">{children}</body>
    </html>
  );
}
