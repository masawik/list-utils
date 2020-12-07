import React from 'react'
import Layout from "../hoc/Layout/Layout";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Reformat from "../pages/Reformat/Reformat";
import Duplicates from "../pages/Duplicates/Duplicates";
import TwoLists from "../pages/TwoLists/TwoLists";
import './App.global.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path='/reformat' component={Reformat}/>
          <Route path='/duplicates' component={Duplicates}/>
          <Route path='/twolists' component={TwoLists}/>
          <Redirect from='/' to='/reformat'/>
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}