import React, {useState} from 'react'
import './App.css'

function App() {
  const defaultInputDataValue = `192.168.1.1:80:login:pasword`

  const [inputData, setInputData] = useState(defaultInputDataValue)

  const inputDataHandler = (e) => {
    setInputData(e.target.value)
  }

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={onSubmit}
      className="container"
    >
      <div className="block">


        <input
          className="template"
          type="text"
          placeholder="маска входных данных"
        />

        <textarea
          className="data"
          placeholder="входные данные"

        />

        <button
          className="submit"

        >форматировать</button>

      </div>

      <div className="block">
        <input
          className="template"
          type="text"
          placeholder="маска выходных данных"
        />

        <textarea
          className="data"
          placeholder="маска выходные данные"
        />
      </div>
    </form>
  );
}

export default App;
