import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import MotionLink from './components/MotionLink';

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
        <header className="flex justify-between items-center px-5">
          <div className="flex gap-10">
            <Link href="/" className="text-xl font-bold my-4">🎹 Next Board</Link>
            <ul className="flex items-center gap-5">
              <li>
                <MotionLink href="/board/tracks" content="Tracks" />
              </li>
              <li>
                <MotionLink href="/board/artists" content="Artists" />
              </li>
            </ul>
          </div>
          <button
            onClick={async () => {
              'use server';
              await signOut({ redirectTo: '/' });
            }}
          >
            Sign out
          </button>
        </header>

        {children}

        <footer className="flex items-center justify-center text-gray-500 mt-16 mb-4">
          <p>
            Made by{' '}
            <a
              href="https://github.com/asuender"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
            >
              asuender
            </a>
            . Created with{' '}
            <a
              href="https://nextjs.org"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400"
            >
              Next.js
            </a>
            .
          </p>
        </footer>
      </body>
    </html>
  );
}
