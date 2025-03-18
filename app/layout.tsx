import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Next Beat',
  description:
    'A small web app showing the most listened tracks of a user, combining the Next.js framework with the heartbeat of your music!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
