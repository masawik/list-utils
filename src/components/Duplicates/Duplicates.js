import React, {useState} from 'react'
import styles from './Duplicates.module.css'
import {listToString, stringToList} from "../../utils/list-string";
import {delDuplicates} from "../../utils/duplicates";
import Textarea from "../inputs/Textarea";
import CopyBtn from "../CopyBtn/CopyBtn";

export default function Duplicates() {
  const [inputData, setInputData] = useState([])
  const [touched, setTouched] = useState(false)
  const [deleted, setDeleted] = useState(0)

  function onSubmit(e) {
    e.preventDefault()
    const result = delDuplicates(inputData)

    setTouched(true)
    setDeleted(result.difference)
    setInputData(result.list)
  }

  function inputDataHandler(e) {
    setInputData(stringToList(e.target.value))
  }

  const $deletedStat = touched ? (<span className={styles.stat}>удалено дубликатов: {deleted}</span>) : null
  const $copyBtn = touched ? (<CopyBtn className={styles.copyBtn} payload={inputData}/>) : null

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <div className={styles.textareaSpanBox}>
        <Textarea
          label='список'
          className={styles.textarea}
          value={listToString(inputData)}
          onChange={inputDataHandler}
          required
        />
        {$deletedStat}
      </div>

      <div>
        <button className='button'>удалить дубликаты</button>
        {$copyBtn}
      </div>
    </form>
  )
}