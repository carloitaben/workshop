import { motion } from "framer-motion"

export default function MotionComponent() {
  return (
    <motion.div
      className="size-24 bg-blue-500"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    />
  )
}
