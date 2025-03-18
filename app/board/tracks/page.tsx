import { auth } from '@/auth';
import { getUserTop } from '@/app/lib/actions';
import { TrackObject } from '@/app/lib/definitions';
import Track from '@/app/components/Track';
import MainHeader from '@/app/components/MainHeader';
export default async function Tracks() {
  const session = await auth();
  if (!session) {
    return null;
  }

  const topTracks = await getUserTop(session, 'tracks');

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto">
        <MainHeader
          title={`${session.user?.name}'s Top Tracks`}
          session={session}
          className="px-4"
        />

        <div className="max-w-5xl mx-auto">
          {topTracks && (
            <div className="lg:columns-3 md:columns-2 columns-1">
              {topTracks.items.map((track: TrackObject) => (
                <Track key={track.id} {...track} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
