import React, {useState} from 'react'
import {listToString} from "../../utils/list-string";
import styles from './CopyBtn.module.css'

export default function CopyBtn({className, payload}) {
  const [touched, setTouched] = useState(false)

  let $btn = null

  if (navigator.clipboard) {
    const copyBtnHandler = () => {
      navigator.clipboard.writeText(listToString(payload))
        .then(() => {
        })
        .catch(err => {
          console.log('ошибка при записи в буфер обмена:', err);
        });
      setTouched(true)
    }

    let btnStyles = ['button']
    if (className) btnStyles.push(className)
    if (touched) btnStyles.push(styles.copied)
    const btnText = touched ? 'Скопировано' : 'копировать'
    btnStyles = btnStyles.join(' ')

    $btn = (
        <button
          className={btnStyles}
          onClick={copyBtnHandler}
        >{btnText}</button>
    )
  }

  return $btn
}