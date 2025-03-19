import { auth } from '@/auth';
import { getUserTop } from '@/app/lib/actions';
import { Artist as ArtistObject } from '../../lib/definitions';
import Artist from '@/app/components/Artist';
import MainHeader from '@/app/components/MainHeader';

export default async function Board() {
  const session = await auth();
  if (!session) {
    return null;
  }

  const topTracks = await getUserTop(session, 'artists');

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto">
        <MainHeader
          title={`${session.user?.name}'s Top Artists`}
          session={session}
          className="px-2"
        />

        {topTracks && (
          <div className="lg:columns-3 md:columns-2 columns-1">
            {topTracks.items.map((artist: ArtistObject) => (
              <Artist key={artist.id} {...artist} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
