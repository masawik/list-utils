import React from 'react'
import styles from './Burger.module.css'

export default function Burger({isOpen, toggleMenu}) {

  const lineStyles = [styles.burger__line]
  const buttonStyles = [styles.burger]
  if (isOpen) {
    lineStyles.push(styles.burger__line_active)
    buttonStyles.push(styles.burger_active)
  }

  const lines = new Array(3)
    .fill('')
    .map((_, index) => <span key={'line' + index} className={lineStyles.join(' ')}></span>)

  return (
    <button
      className={buttonStyles.join(' ')}
      onClick={toggleMenu}
    >
      {lines}
    </button>
  )
}