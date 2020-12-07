import styles from './Header.module.css'
import React, {Fragment, useContext, useEffect} from 'react'
import {withRouter} from "react-router-dom";
import Burger from "../Navigation/Burger/Burger";
import {MenuStateContext} from "../Navigation/MenuContext";

function Header({location}) {
  const {routes} = useContext(MenuStateContext)
  const currentLocation = location.pathname
  const currentTitle = routes[currentLocation]

  useEffect(() => {
    document.title = currentTitle
  }, [currentTitle])

  return (
    <Fragment>
      <header className={styles.headerSmall}>
        <Burger/>
        <h1 className={styles.title}>{currentTitle}</h1>
      </header>

      <header className={styles.headerLarge}>
        <Burger/>
        <div className='container'>
          <h1 className={styles.title}>{currentTitle}</h1>
        </div>
      </header>
    </Fragment>
  )
}

export default withRouter(Header)