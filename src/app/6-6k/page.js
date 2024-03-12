"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const State = {
  Loading: "loading",
  Sequence: "sequence",
  Finish: "finish",
}

export default function Page() {
  const [state, setState] = useState(State.Loading)
  const [image, setImage] = useState(0)

  useEffect(() => {
    if (state === State.Loading) {
      const timeout = setTimeout(() => {
        return setState(State.Sequence)
      }, 1_000)

      return () => clearTimeout(timeout)
    }

    if (image === 3) {
      const timeout = setTimeout(() => {
        return setState(State.Finish)
      }, 1_000)

      return () => clearTimeout(timeout)
    }

    if (state === State.Sequence) {
      const interval = setInterval(() => {
        setImage((current) => current + 1)
      }, 1_000)

      return () => clearInterval(interval)
    }
  }, [image, state])

  return (
    <html>
      <body>
        {state === State.Loading ? (
          <div className="fixed flex items-center justify-center inset-0">
            <div>
              <motion.div layoutId="dot-0" className="size-2 bg-red-500" />
              <motion.div layoutId="dot-1" className="size-2 bg-red-500" />
            </div>
            <div>
              <motion.div layoutId="dot-2" className="size-2 bg-red-500" />
              <motion.div layoutId="dot-3" className="size-2 bg-red-500" />
            </div>
          </div>
        ) : state === State.Sequence ? (
          <>
            <div className="fixed inset-0 grid place-items-center">
              <motion.img
                src={`/image${image}.jpg`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                layoutId={image.toString()}
                className="w-28"
              />
            </div>
            <div className="fixed inset-0 grid place-items-center grid-rows-2 grid-cols-2">
              <motion.div layoutId="dot-0" className="size-2 bg-red-500" />
              <motion.div layoutId="dot-1" className="size-2 bg-red-500" />
              <motion.div layoutId="dot-2" className="size-2 bg-red-500" />
              <motion.div layoutId="dot-3" className="size-2 bg-red-500" />
            </div>
          </>
        ) : (
          <>
            <div>
              <motion.img src="/image3.jpg" layoutId="3" className="w-full" />
            </div>
            <div>
              <motion.div
                layoutId="dot-0"
                className="size-2 bg-red-500 fixed top-0 left-0"
              />
              <motion.div
                layoutId="dot-1"
                className="size-2 bg-red-500 fixed top-0 right-0"
              />
              <motion.div
                layoutId="dot-2"
                className="size-2 bg-red-500 fixed bottom-0 left-0"
              />
              <motion.div
                layoutId="dot-3"
                className="size-2 bg-red-500 fixed bottom-0 right-0"
              />
            </div>
          </>
        )}
      </body>
    </html>
  )
}
