'use client';

import { motion } from 'motion/react';

export default function MotionButton({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.button
      onClick={() => onClick()}
      whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
      className="cursor-pointer"
    >
      {children}
    </motion.button>
  );
}
