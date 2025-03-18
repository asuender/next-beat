import Link from 'next/link';
import MotionLink from '@/app/components/MotionLink';

export default function Home() {
  return (
    <main className="p-4">
      <div className="flex flex-col justify-center gap-4 max-w-2xl mx-auto px-2 h-screen">
        <h1 className="text-5xl font-bold">🎹 Next Beat</h1>
        <p className="text-gray-500">
          A small web app showing the most listened tracks on Spotify, combining
          the Next.js framework with the heartbeat of your music!
        </p>
        <MotionLink
          href="/board"
          content="Try it out!"
          className="self-end text-lg font-bold"
        />
      </div>
    </main>
  );
}
