import { stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"
import SplitType from "split-type"

export default function Paragraph({ children }) {
  const [scope, animate] = useAnimate()
  const inView = useInView(scope, {
    amount: "some",
    once: true,
    margin: "-25% 0%",
  })

  useEffect(() => {
    if (!inView) return

    const split = new SplitType(scope.current, {
      split: "words",
    })

    if (!split.words) {
      return split.revert()
    }

    const animation = animate(
      split.words,
      {
        scale: [0.5, 1],
        opacity: [0, 1],
      },
      {
        type: "tween",
        ease: "easeOut",
        delay: stagger(0.1),
      }
    )

    animation.then(() => split.revert())

    return () => {
      animation.stop()
      split.revert()
    }
  }, [animate, inView, scope])

  return (
    <p data-inview={inView} ref={scope}>
      {children}
    </p>
  )
}
