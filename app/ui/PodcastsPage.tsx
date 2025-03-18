'use client';

import { useState } from 'react';
import { SavedEpisodeItem } from '../lib/definitions';
import Podcast from '../components/Podcast';
import { motion, Reorder } from 'motion/react';
import { log } from 'console';

export default function PodcastsPage({
  savedPodcasts,
}: {
  savedPodcasts: SavedEpisodeItem[];
}) {
  const [podcastList, setPodcastList] =
    useState<SavedEpisodeItem[]>(savedPodcasts);

  return (
    <Reorder.Group
      axis="y"
      values={podcastList}
      onReorder={setPodcastList}
      className="flex flex-col gap-3"
    >
      {podcastList?.map((item: SavedEpisodeItem) => (
        <Reorder.Item key={item.episode.id} value={item}>
          <Podcast key={item.episode.id} {...item.episode} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}
