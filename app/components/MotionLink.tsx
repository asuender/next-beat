'use client';

import { motion } from 'motion/react';

export default function MotionLink({
  href,
  content,
  className,
}: {
  href: string;
  content: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
      className={className}
    >
      {content}
    </motion.a>
  );
}
