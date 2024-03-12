import { useEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion"

export default function Cursor() {
  const [show, setShow] = useState(false)
  const [pressing, setPressing] = useState(false)

  const x = useSpring(0, { mass: 0.05, stiffness: 175 })
  const y = useSpring(0, { mass: 0.05, stiffness: 175 })

  const xVelocity = useVelocity(x)
  const yVelocity = useVelocity(y)

  const velocity = useTransform([xVelocity, yVelocity], ([latestX, latestY]) =>
    Math.max(Math.abs(latestX), Math.abs(latestY))
  )

  const backgroundColor = useTransform(
    velocity,
    [0, 3000],
    ["hsl(327, 0%, 50%)", "hsl(327, 100%, 50%)"]
  )

  useEffect(() => {
    function onMove(event) {
      x.set(event.x)
      y.set(event.y)
    }

    function onEnter(event) {
      x.jump(event.x)
      y.jump(event.y)
      setShow(true)
    }

    function onLeave() {
      setShow(false)
    }

    function onMouseDown() {
      setPressing(true)
    }

    function onMouseUp() {
      setPressing(false)
    }

    document.documentElement.addEventListener("mousemove", onMove)
    document.documentElement.addEventListener("mouseenter", onEnter)
    document.documentElement.addEventListener("mouseleave", onLeave)
    document.documentElement.addEventListener("mousedown", onMouseDown)
    document.documentElement.addEventListener("mouseup", onMouseUp)
    return () => {
      document.documentElement.removeEventListener("mousemove", onMove)
      document.documentElement.removeEventListener("mouseenter", onEnter)
      document.documentElement.removeEventListener("mouseleave", onLeave)
      document.documentElement.removeEventListener("mousedown", onMouseDown)
      document.documentElement.removeEventListener("mouseup", onMouseUp)
    }
  }, [show, x, y])

  return (
    <AnimatePresence initial={false}>
      {show ? (
        <motion.div
          className="absolute -top-2 -left-2 size-4 bg-black rounded-full pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: pressing ? 3 : 1 }}
          exit={{ scale: 0 }}
          style={{ x, y, backgroundColor }}
        />
      ) : null}
    </AnimatePresence>
  )
}
