'use client';

import { motion } from 'motion/react';

export default function MotionButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      onClick={() => onClick()}
      className="cursor-pointer"
    >
      Sign out
    </motion.button>
  )
}