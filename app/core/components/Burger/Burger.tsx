import React from "react"
import classNames from "classnames"
import classes from "./Burger.module.scss"

interface Props {
  children?: any
  className?: string
  lg?: boolean
  color?: string
  onClick?: () => void
}

function Burger({ children, className, lg = false, color = "black", onClick = () => {} }: Props) {
  return (
    <div onClick={onClick} className={classNames(classes.burger, { "-lg": lg }, className)}>
      <div className={classes.burger__inner}>
        <div style={{ backgroundColor: color }} className={classes.burger__item}></div>
        <div style={{ backgroundColor: color }} className={classes.burger__item}></div>
        <div style={{ backgroundColor: color }} className={classes.burger__item}></div>
      </div>
      {children}
    </div>
  )
}

export default Burger
