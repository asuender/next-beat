'use client';

import { motion } from "motion/react";

export default function MotionLink({ href, content }: { href: string, content: string }) {
  return (
    <motion.a
      href={href}
      whileHover={{ opacity: 0.3, transition: { duration: 0.3 } }}
    >
      {content}
    </motion.a>
  )
}