import React, {useEffect, useState} from 'react'
import styles from './TwoLists.module.css'
import {getAMinusB, getIntersections, getWithoutIntersections} from "../../utils/twoLists";
import {listToString, stringToList} from "../../utils/list-string";
import Textarea from "../inputs/Textarea";
import Header from "../Header/Header";
import Radio from "../inputs/Radio";
const PAGE_TITLE = 'Манипуляции с двумя списками'

export default function TwoLists() {
  const [mode, setMode] = useState('intersection')
  const [listA, setListA] = useState([])
  const [listB, setListB] = useState([])
  const [listC, setListC] = useState([])


  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  useEffect(() => {
    console.log(mode)
  }, [mode])

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
      <Radio
        key={item.mode}
        label={item.label}
        name={item.mode}
        checked={mode === item.mode}
        onChange={modeHandler}
      />
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
      <Textarea
        label={'список ' + (index + 1)}
        className={styles.inputList}
        required
        key={item.name}
        name={item.name}
        value={listToString(item.state)}
        onChange={inputDataHandler}
      />
    )
  })

  return (
    <div className='container'>
      <Header
        title={PAGE_TITLE}
      />
      <form
        className={styles.form}
        onSubmit={onSubmit}
      >
        <div className={styles.inputListsBox}>
          {$inputLists}
        </div>

        <Textarea
          label='результат'
          className={styles.resultList}
          readOnly
          name='listС'
          value={listToString(listC)}
        />

        <div className={styles.modeSelectors}>
          {$modeSelectors}
        </div>

        <button
          className={'button '  + styles.submitBtn}
        >Выполнить
        </button>
      </form>
    </div>
  )
}