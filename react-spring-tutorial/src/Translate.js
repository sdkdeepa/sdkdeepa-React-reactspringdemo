import React from "react"
import { useSpring, animated } from "react-spring"

const Translate = () => {
  const spring = useSpring({
    from: {
      myXTranslateValue: 0,
    },
    to: {
      myXTranslateValue: 120,
    },
    config: {
      mass: 6,
    },
  })

  return (
    <animated.div
      style={{
        transform: spring.myXTranslateValue.interpolate(
          (myXTranslateValue) => `translate(${myXTranslateValue}px)`
        ),
        display: "inline-block",
      }}
    >
      Translated Div
    </animated.div>
  )
}

export default Translate