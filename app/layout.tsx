import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import { signOut } from 'next-auth/react';

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
          <h1 className="text-xl font-bold my-4">🎹 Next Board</h1>
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
      </body>
    </html>
  );
}
