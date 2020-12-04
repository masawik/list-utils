import React, {useEffect, useState} from 'react'
import styles from './Duplicates.module.css'
import {listToString, stringToList} from "../../utils/list-string";
import {delDuplicates} from "../../utils/duplicates";

export default function Duplicates() {
  const [inputData, setInputData] = useState('')
  const [touched, setTouched] = useState(false)
  const [deleted, setDeleted] = useState(0)

  useEffect(() => {
    document.title = 'Удаление дубликатов строк'
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    const dataList = stringToList(inputData)
    const result = delDuplicates(dataList)
    const resultString = listToString(result.list)

    setTouched(true)
    setDeleted(result.difference)
    setInputData(resultString)
  }

  function inputDataHandler(e) {
    setInputData(e.target.value)
  }

  const deletedStat = touched ? (<span className={styles.stat}>удалено {deleted} дубликатов</span>) : null

  return (
    <form
      className={styles.container}
      onSubmit={onSubmit}
    >
      <div className={styles.textareaSpanBox}>
      <textarea
        className={styles.textarea}
        value={inputData}
        onChange={inputDataHandler}
        required
      />

        {deletedStat}
      </div>

      <button className={styles.submit}>удалить дубликаты</button>
    </form>
  )
}