import React, {useEffect, useState} from 'react'
import styles from './TwoLists.module.css'
import {getAMinusB, getIntersections, getWithoutIntersections} from "../../utils/twoLists";
import {listToString, stringToList} from "../../utils/list-string";

export default function TwoLists() {
  const [mode, setMode] = useState('intersection')
  const [listA, setListA] = useState([])
  const [listB, setListB] = useState([])
  const [listC, setListC] = useState([])


  useEffect(() => {
    document.title = 'Манипуляции с двумя списками'
  }, [])

  function onSubmit(e) {
    e.preventDefault()
    switch (mode) {
      case "intersection":
        setListC(getIntersections(listA, listB))
        break
      case "aMinusB":
        setListC(getAMinusB(listA, listB))
        break
      case "withoutIntersections":
        setListC(getWithoutIntersections(listA, listB))
        break
      default:
        return
    }
  }

  function inputDataHandler(e) {
    const {name, value} = e.target
    switch (name) {
      case 'listA':
        setListA(stringToList(value))
        break
      case 'listB':
        setListB(stringToList(value))
        break
      default:
        return
    }
  }

  function modeHandler(e) {
    setMode(e.target.name)
  }

  // создание элементов
  const modes = [
    {label: 'Пересечения списков', mode: 'intersection'},
    {label: 'Вычесть из первого списка второй', mode: 'aMinusB'},
    {label: 'Получить значения обоих списков без общих элементов', mode: 'withoutIntersections'},
  ]
  const $modeSelectors = modes.map((item, index) => {
    return (
      <label key={'modeSelectors' + index}>
        <input
          type="radio"
          name={item.mode}
          checked={mode === item.mode}
          onChange={modeHandler}
        />
        {item.label}
      </label>
    )
  })
  const inputLists = [
    {
      name: 'listA',
      state: listA
    },
    {
      name: 'listB',
      state: listB
    },
  ]
  const $inputLists = inputLists.map((item, index) => {
    return (
      <textarea
        className={styles.inputList}
        required
        key={'inputLists' + index}
        name={item.name}
        value={listToString(item.state)}
        onChange={inputDataHandler}
      />
    )
  })

  // инициализация стилей
  let resultListStyles = [styles.resultList]
  if (listC.length) resultListStyles.push(styles.resultList_visible)
  resultListStyles = resultListStyles.join(' ')
  return (
    <form
      className={styles.container}
      onSubmit={onSubmit}
    >
      <div className={styles.modeSelectors}>
        {$modeSelectors}
      </div>
      <button>go</button>

      <div className={styles.inputListsBox}>
        {$inputLists}

        <textarea
          className={resultListStyles}
          readOnly
          name='listС'
          value={listToString(listC)}
        />
      </div>
    </form>
  )
}