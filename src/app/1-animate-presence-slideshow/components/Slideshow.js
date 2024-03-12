/* eslint-disable @next/next/no-img-element */

import { motion, wrap, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const images = [
  "https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
  "https://images.pexels.com/photos/911738/pexels-photo-911738.jpeg",
  "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg",
  "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg",
  "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg",
]

export default function Slideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => wrap(0, images.length, ++current))
    }, 3_000)

    return () => clearInterval(interval)
  }, [])

  const image = images[current]

  return (
    <AnimatePresence mode="popLayout">
      <motion.img
        key={image}
        src={image}
        alt=""
        className="aspect-square object-cover w-96"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      />
    </AnimatePresence>
  )
}
