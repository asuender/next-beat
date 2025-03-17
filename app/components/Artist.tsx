'use client';

import { Artist as ArtistObject } from '@/app/lib/definitions';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Artist({
  name,
  images,
  popularity,
  uri,
}: ArtistObject) {
  const image = images[1];

  const textVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, y: -15, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hover: { opacity: 0.3, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative break-inside-avoid mb-6 mx-auto"
      style={{ maxWidth: image.width }}
      whileHover="hover"
      initial="initial"
    >
      <motion.div variants={imageVariants}>
        <Link href={uri}>
          <Image
            src={image.url}
            alt={name}
            width={image.width}
            height={image.height}
            className="rounded-2xl"
          />
        </Link>
      </motion.div>
      <motion.div
        className="absolute bottom-0 left-5 text-3xl font-medium mt-1"
        variants={textVariants}
      >
        {name}
      </motion.div>
      {popularity > 70 && (
        <div className="absolute top-4 right-6 text-2xl text-gray-500">🔥</div>
      )}
    </motion.div>
  );
}
