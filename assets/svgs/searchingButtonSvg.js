import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchingButton(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21 21l-2-2m-8.5 1a9.5 9.5 0 100-19 9.5 9.5 0 000 19z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SearchingButton
