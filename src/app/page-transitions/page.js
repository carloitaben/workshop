/* eslint-disable @next/next/no-img-element */

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <main className="grid grid-cols-3">
      {Array(10)
        .fill(null)
        .map((_, index) => (
          <article key={index} className="relative col-start-3">
            <motion.img
              layoutId={`thumbnail-${index}`}
              src="/image.webp"
              alt=""
            />
            <Link href={`/page-transitions/${index}`}>
              <motion.h2
                layout="position"
                layoutId={`title-${index}`}
                className="block"
              >
                Page transitions
              </motion.h2>
            </Link>
          </article>
        ))}
    </main>
  )
}
