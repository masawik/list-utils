import React from 'react'
import styles from './inputs.module.css'

export default function Textarea({className, value, onChange, required, placeholder, label, readOnly, name}) {
  let labelClasses = [styles.label]
  if (className) labelClasses = labelClasses + ' ' + className


  return (
    <label className={labelClasses}>
      {label}
      <textarea
        className={styles.textarea}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        readOnly={readOnly}
        name={name}
      />
    </label>
  )
}