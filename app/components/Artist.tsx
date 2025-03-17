'use client';

import { Artist as ArtistObject } from '@/app/lib/definitions';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Artist({ name, images, uri }: ArtistObject) {
  const image = images[1];

  const textVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, y: -15, transition: { duration: 0.3 } },
  };

  const imageVariants = {
    hover: { opacity: 0.5, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative mb-6 break-inside-avoid"
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
    </motion.div>
  );
}
