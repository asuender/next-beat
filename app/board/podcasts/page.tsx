import MainHeader from '@/app/components/MainHeader';
import { auth } from '@/auth';
import { getUserPodcasts } from '@/app/lib/actions';
import { SavedEpisodeItem, SavedEpisodeObject } from '@/app/lib/definitions';
import PodcastsPage from '@/app/ui/PodcastsPage';
export default async function Podcasts() {
  const session = await auth();
  if (!session) {
    return null;
  }

  const savedPodcasts = await getUserPodcasts(session);

  return (
    <main className="w-full">
      <div className="max-w-5xl mx-auto">
        <MainHeader
          title={`Your saved podcasts`}
          session={session}
        />

        <PodcastsPage savedPodcasts={savedPodcasts.items} />
      </div>
    </main>
  );
}
