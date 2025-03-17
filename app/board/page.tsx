import { auth, signOut } from '@/auth';
import { getUserTop } from '@/app/lib/actions';
import { Artist as ArtistObject } from '../lib/definitions';
import Artist from '@/app/components/Artist';
import Image from 'next/image';

export default async function Board() {
  const session = await auth();
  if (!session) {
    return null;
  }

  const topTracks = await getUserTop(session, 'artists');

  return (
    <>
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

      <main className="w-full">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mt-16 mb-8 px-2">
            <h2 className="text-4xl font-bold">
              {session.user?.name}'s Top Artists
            </h2>
            <Image
              src={session.user?.image || ''}
              alt="User logo"
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />
          </div>

          {topTracks && (
            <div className="lg:columns-3 md:columns-2 columns-1">
              {topTracks.items.map((artist: ArtistObject) => (
                <Artist key={artist.id} {...artist} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
