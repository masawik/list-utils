import React, {useContext} from 'react'
import styles from './Burger.module.css'
import {MenuStateContext} from "../MenuContext";

export default function Burger({className}) {
  const {isOpen, toggleMenu} = useContext(MenuStateContext)

  const lineStyles = [styles.burger__line]
  const buttonStyles = [styles.burger]
  if (isOpen) {
    lineStyles.push(styles.burger__line_active)
    buttonStyles.push(styles.burger_active)
  }
  if (className) buttonStyles.push(className)

  const lines = new Array(3)
    .fill('')
    .map((_, index) => <span key={'line' + index} className={lineStyles.join(' ')}> </span>)

  return (
    <button
      className={buttonStyles.join(' ')}
      onClick={toggleMenu}
    >
      {lines}
    </button>
  )
}