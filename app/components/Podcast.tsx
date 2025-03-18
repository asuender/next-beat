'use client';

import { SavedEpisodeObject } from '../lib/definitions';
import Image from 'next/image';
import ProgressBar from './ProgressBar';
import { motion } from 'motion/react';
import CheckIcon from './CheckIcon';

export default function Podcast({
  name,
  show,
  duration_ms,
  resume_point,
}: SavedEpisodeObject) {
  const image = show.images[2] || null;

  return (
    <motion.div
      className={`flex gap-6 items-center bg-neutral-800 rounded-2xl p-4 cursor-grab`}
      whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
    >
      <div className="relative">
        <Image
          src={image.url}
          alt={name}
          width={image.width * 1.2}
          height={image.height * 1.2}
          className="rounded-lg"
        />
        {resume_point.fully_played && (
          <div className="absolute top-[-7.5px] right-[-7.5px] rounded-2xl p-1.5 bg-green-600">
            <CheckIcon />
          </div>
        )}
      </div>
      <div className="w-[calc(90%)] flex flex-col flex-grow-1 gap-0.5">
        <span className="text-lg font-bold truncate">{name}</span>
        <span>{show.name}</span>
        <ProgressBar
          duration_ms={duration_ms}
          resume_position_ms={resume_point.resume_position_ms}
          fully_played={resume_point.fully_played}
        />
      </div>
    </motion.div>
  );
}
