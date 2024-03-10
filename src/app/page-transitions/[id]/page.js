/* eslint-disable @next/next/no-img-element */

"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function Page({ params }) {
  return (
    <div className="grid grid-cols-3">
      <motion.img
        layoutId={`thumbnail-${params.id}`}
        className="col-span-2 w-full"
        src="/image.webp"
        alt=""
      />
      <div className="col-start-3 px-12">
        <header className="flex items-center justify-between py-8">
          <Link className="underline" href="/page-transitions" scroll={false}>
            Back
          </Link>
          <Link className="underline" href="mailto:frontend@dallonses.com">
            Mail
          </Link>
        </header>
        <main className="">
          <motion.h2
            layout="position"
            layoutId={`title-${params.id}`}
            className="block"
          >
            Page transitions
          </motion.h2>
        </main>
      </div>
    </div>
  )
}
