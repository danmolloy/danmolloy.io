import { useSpring, animated } from "react-spring"

export default function Spring() {
  const props = useSpring({ loop: {reverse: true}, config:{duration: 1000},to: { rotateX: 0 }, from: { rotateX: 180 } })

  return (
    <animated.div style={props}>Hello</animated.div>
  )
}