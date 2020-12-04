import React from 'react'
import styles from './inputs.module.css'

export default function InputText({className, value, onChange, onFocus, label}) {
  let inputClasses = styles.input
  if (className) inputClasses = inputClasses + ' ' + className
  return (
    <label className={styles.label}>
      {label}
      <input
        className={inputClasses}
        type="text"
        placeholder="маска выходных данных"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
    </label>
  )
}