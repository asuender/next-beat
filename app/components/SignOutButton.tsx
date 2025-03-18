'use client';

import { motion } from 'motion/react';

export default function MotionButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={() => onClick()}
      whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
      className="cursor-pointer"
    >
      Sign out
    </motion.button>
  )
}