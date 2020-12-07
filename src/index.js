import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from "./App/App";


const app = (
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'));