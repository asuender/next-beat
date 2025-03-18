import Link from 'next/link';
import MotionLink from '@/app/components/MotionLink';
import { signOut } from '@/auth';
import SignOutButton from '@/app/components/SignOutButton';

export default function BoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header className="flex justify-between items-center px-5">
          <div className="flex gap-10">
            <Link href="/" className="text-xl font-bold my-4">
              🎹 Next Board
            </Link>
            <ul className="flex items-center gap-5">
              <li>
                <MotionLink href="/board/tracks" content="Tracks" />
              </li>
              <li>
                <MotionLink href="/board/artists" content="Artists" />
              </li>
            </ul>
          </div>

          <SignOutButton onClick={async () => {
            'use server';
            await signOut({ redirectTo: '/' }); 
          }} />
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
    </div>
  )
}