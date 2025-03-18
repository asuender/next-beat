import { auth } from '@/auth';
import MainHeader from '../components/MainHeader';
import MotionLink from '../components/MotionLink';

export default async function Home() {
  const session = await auth();
  if (!session) {
    return null;
  }

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto px-2">
        <MainHeader
          title={`Welcome, ${session.user?.name}!`}
          session={session}
        />

        <MotionLink
          href="/board/tracks"
          className="block text-xl font-bold mb-2"
          content="Show your top tracks"
        />
        <MotionLink
          href="/board/artists"
          className="block text-xl font-bold mb-2"
          content="Show your top artists"
        />
        <MotionLink
          href="/board/podcasts"
          className="block text-xl font-bold"
          content="Show your saved podcasts"
        />
      </div>
    </main>
  );
}
