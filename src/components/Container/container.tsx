import React, {CSSProperties} from "react"

interface Props {
  children?: any
  styles?: CSSProperties
}

export default ({ children, styles }: Props) => (
  <div id="container" className="container" style={styles}>
    {children}
  </div>
)
