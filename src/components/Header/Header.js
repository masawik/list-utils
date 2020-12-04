import styles from './Header.module.css'
import React from 'react'

export default function Header({title}) {
  return (<h1 className={styles.header}>{title}</h1>)
}