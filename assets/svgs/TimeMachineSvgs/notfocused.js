import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function TimeMachineNotFocused(props) {
  return (
    <Svg
      width={26}
      height={24}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        opacity={0.75}
        stroke="#D24C2E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M19 4.86A9.968 9.968 0 0012 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.231-.223-2.41-.63-3.5m0 0l-1.87 3m1.87-3l3.13 2" />
        <Path d="M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1" />
      </G>
    </Svg>
  )
}

export default TimeMachineNotFocused
