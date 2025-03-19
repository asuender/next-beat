'use client';

import { TrackObject } from '@/app/lib/definitions';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import ProgressBar from './ProgressBar';

export default function Track({
  name,
  artists,
  album,
  uri,
  duration_ms,
  popularity,
}: TrackObject) {
  const image = album.images[1] || null;

  return (
    <motion.div
      className="break-inside-avoid bg-neutral-800 rounded-2xl p-6 mb-6 mx-auto"
      style={{ maxWidth: image.width }}
      whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
    >
      <Link href={uri} className="flex flex-col items-center gap-4">
        <div className="relative">
          <Image
            src={image.url}
            alt={name}
            width={image.width}
            height={image.height}
            className="rounded-xl"
          />
          {popularity > 60 && (
            <div className="absolute top-3 right-3.5 rounded-full px-2 py-1 text-2xl bg-neutral-800">🔥</div>
          )}
        </div>

        <ProgressBar duration_ms={duration_ms} className="px-1" />

        <div className="flex flex-col items-center text-center">
          <span className="text-white text-2xl font-bold">{name}</span>
          <span className="text-gray-400 text-sm">
            {artists.map((artist) => artist.name).join(', ')}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
