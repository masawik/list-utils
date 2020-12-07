import React, {useEffect, useState} from 'react'
import styles from './Reformat.module.css'
import {stringInserter, reformat} from "../../utils/Reformat";
import {lsRead, lsWrite} from "../../utils/localStorage";
import {listToString, stringToList} from "../../utils/list-string";
import Textarea from "../inputs/Textarea";
import InputText from "../inputs/InputText";
import Header from "../Header/Header";
import CopyBtn from "../CopyBtn/CopyBtn";
const PAGE_TITLE = 'Форматирование строк'

function Reformat() {
  // константы
  const LS_TEMPLATE_KEY = 'templates'
  const LS_INPUT_DATA_KEY = 'inputData'
  const defaultInputDataValue = ['192.168.1.1:80:login:pasword', '192.168.1.1:80:login:pasword']
  const inputTemplateValue = '{ip}:{port}:{login}:{password}'
  const outputTemplateValue = '{ip}:{port}@{login}:{password}'

  // инициализация стейтов
  const [inputData, setInputData] = useState(defaultInputDataValue)
  const [inputTemplate, setInputTemplate] = useState(inputTemplateValue)
  const [outputTemplate, setOutputTemplate] = useState(outputTemplateValue)
  const [outputTemplateTouched, setOutputTemplateTouched] = useState(false)
  const [outputData, setOutputData] = useState([])

  // синхронизация с лс при загрузке компонента
  useEffect(() => {
    document.title = PAGE_TITLE
    const oldTemplates = lsRead(LS_TEMPLATE_KEY)
    if (oldTemplates) {
      setInputTemplate(oldTemplates.input)
      setOutputTemplate(oldTemplates.output)
    }
    const oldInputData = lsRead(LS_INPUT_DATA_KEY)
    if (oldInputData) setInputData(oldInputData)
  }, [])

  const onSubmit = e => {
    e.preventDefault()
    const parsedStrings = reformat(inputTemplate, inputData)
    const result = stringInserter(outputTemplate, parsedStrings)
    setOutputData(result)
    lsWrite(LS_TEMPLATE_KEY, {input: inputTemplate, output: outputTemplate})
    lsWrite(LS_INPUT_DATA_KEY, inputData)
  }

  const dataToText = (data = inputData) => {
    return listToString(data)
  }

  const inputDataHandler = e => {
    setInputData(stringToList(e.target.value))
  }

  const inputTemplateHandler = e => {
    const newValue = e.target.value
    if (!outputTemplateTouched) {
      setOutputTemplate(newValue)
    }
    setInputTemplate(newValue)
  }

  const $copyBtn = outputData.length
    ? (
      <CopyBtn
        payload={outputData}
        className={styles.btn}
      />
      )
    : null

  return (
    <div className='container'>
      <Header
        title={PAGE_TITLE}
      />

      <form
        onSubmit={onSubmit}
        className={styles.form}
      >
        <div className={styles.block}>
          <InputText
            label="маска входных данных"
            className={styles.templateInput}
            type="text"
            value={inputTemplate}
            onChange={inputTemplateHandler}
            name={'inputTemplate'}
          />

          <Textarea
            label='входные данные'
            className={styles.textarea}
            onChange={inputDataHandler}
            value={dataToText()}
            required
          />

          <button
            type='submit'
            className={'button ' + styles.btn}
          >
            форматировать
          </button>
        </div>

        <div className={styles.block}>
          <InputText
            label='маска выходных данных'
            className={styles.templateInput}
            type="text"
            value={outputTemplate}
            onChange={e => {
              setOutputTemplate(e.target.value)
            }}
            onFocus={() => {
              setOutputTemplateTouched(true)
            }}
          />

          <Textarea
            label='выходные данные'
            className={styles.textarea}
            readOnly
            value={listToString(outputData)}
          />
          {$copyBtn}
        </div>
      </form>
    </div>
  );
}

export default Reformat;
