'use client';

import { TrackObject } from '@/app/lib/definitions';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import prettyMilliseconds from 'pretty-ms';

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
            <div className="absolute top-4 right-5 text-2xl text-gray-500">🔥</div>
          )}
        </div>

        <div className="w-full flex items-center gap-2 px-1">
          <span className="text-gray-400 text-sm">
            {prettyMilliseconds(0.4 * duration_ms, {
              colonNotation: true,
              secondsDecimalDigits: 0,
            })}
          </span>
          <div className="bg-neutral-700 flex-grow rounded-3xl">
            <div className="w-[40%] h-[8px] bg-neutral-500 rounded-l-3xl"></div>
          </div>
          <span className="text-gray-400 text-sm">
            {prettyMilliseconds(duration_ms, {
              colonNotation: true,
              secondsDecimalDigits: 0,
            })}
          </span>
        </div>

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
