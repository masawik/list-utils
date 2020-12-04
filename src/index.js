import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from "./components/App/App";
import {BrowserRouter} from "react-router-dom";


const app = (
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
</BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));