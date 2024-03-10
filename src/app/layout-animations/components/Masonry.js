import { useEffect, useState } from "react"
import { motion } from "framer-motion"

import { items, shuffle } from "../lib"

export default function Masonry() {
  const [elements, setElements] = useState(items)

  useEffect(() => {
    const interval = setInterval(() => {
      setElements(shuffle(items))
    }, 3_000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-4 items-center gap-12 p-12">
      {elements.map((element) => (
        <motion.div
          key={element.src}
          layout
          style={{
            height: element.height,
            backgroundImage: `url(${element.src}?auto=compress&dpr=2&h=500&w=500)`,
          }}
        />
      ))}
    </div>
  )
}
