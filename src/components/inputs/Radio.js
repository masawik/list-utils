import React, {Fragment} from 'react'
import styles from './inputs.module.css'

export default function Radio({name, checked, onChange, label}) {
  return (
    <Fragment>
      <input
        className={styles.radio}
        type="radio"
        name={name}
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label
        className={styles.radioLabel}
        htmlFor={name}
      >{label}</label>
    </Fragment>
  )
}