import { motion } from "framer-motion"
import { useState } from "react"
import { cx } from "cva"

export default function Video() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cx(
        open
          ? "fixed inset-0 bg-black/20 size-full p-12 grid place-items-center"
          : "max-w-lg mx-auto"
      )}
    >
      <motion.video
        width={1078}
        height={720}
        layout
        className={cx(open ? "" : "")}
        onTap={() => setOpen((current) => !current)}
      >
        <source src="video.mp4" type="video/mp4" />
      </motion.video>
    </div>
  )
}
