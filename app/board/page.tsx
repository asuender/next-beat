import { auth, signOut } from '@/auth';
import { getUserTop } from '@/app/lib/actions';
import { Artist as ArtistObject } from '../lib/definitions';
import Artist from '@/app/components/Artist';

export default async function Board() {
  const session = await auth();
  if (!session) {
    return null;
  }

  const topTracks = await getUserTop(session, 'artists');

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold my-4">
          {session.user?.name}'s Top Artists
        </h1>

        {topTracks && (
          <div className="lg:columns-3 md:columns-2 columns-1">
            {topTracks.items.map((artist: ArtistObject) => (
              <Artist key={artist.id} {...artist} />
            ))}
          </div>
        )}

        <button
          onClick={async () => {
            'use server';
            await signOut({ redirectTo: '/' });
          }}
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
