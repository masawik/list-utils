import React from 'react'
import styles from './inputs.module.css'

export default function Textarea({className, value, onChange, required, placeholder, label, readOnly, name}) {
  let textareaClasses = styles.textarea
  if (className) textareaClasses = textareaClasses + ' ' + className


  return (
    <label className={styles.label}>
      {label}
      <textarea
        className={textareaClasses}
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