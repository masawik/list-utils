import React, {useEffect, useState} from 'react'
import styles from './Duplicates.module.css'
import {listToString, stringToList} from "../../utils/list-string";
import {delDuplicates} from "../../utils/duplicates";
import Textarea from "../inputs/Textarea";
import Header from "../Header/Header";

const PAGE_TITLE = 'Удаление дубликатов строк'

export default function Duplicates() {
  const [inputData, setInputData] = useState([])
  const [touched, setTouched] = useState(false)
  const [deleted, setDeleted] = useState(0)

  useEffect(() => {
    document.title = PAGE_TITLE
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

  const $deletedStat = touched ? (<span className={styles.stat}>удалено дубликатов: {deleted}</span>) : null

  return (
    <div className='container'>
      <Header
        title={PAGE_TITLE}
      />
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <div className={styles.textareaSpanBox}>
          <Textarea
            label='список'
            className={styles.textarea}
            value={inputData}
            onChange={inputDataHandler}
            required
          />
          {$deletedStat}
        </div>

        <button className='button'>удалить дубликаты</button>
      </form>
    </div>
  )
}