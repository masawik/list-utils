import React from 'react'
import Layout from "../../hoc/Layout/Layout";
import {Redirect, Route, Switch} from "react-router-dom";
import Reformat from "../Reformat/Reformat";
import Duplicates from "../Duplicates/Duplicates";
import TwoLists from "../TwoLists/TwoLists";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/reformat' component={Reformat} />
        <Route path='/duplicates' component={Duplicates} />
        <Route path='/twolists' component={TwoLists} />
        <Redirect from='/' to='/reformat'/>
      </Switch>
    </Layout>
  )
}