import React from 'react'
import styles from './Hint.module.css'

export default function Hint({img}) {
  let $el = null
  if (img && styles[img]) {
    let divStyles = [styles.query]
    divStyles.push(styles[img])
    divStyles = divStyles.join(' ')
    $el = (<div
      className={divStyles}
    > </div>)
  }
  return $el
}