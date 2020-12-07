import React, {Fragment, useContext} from 'react'
import styles from './Menu.module.css'
import {Link, withRouter} from 'react-router-dom'
import {MenuStateContext} from "../MenuContext";

function Menu({location}) {
  const {isOpen, routes, toggleMenu} = useContext(MenuStateContext)

  // создание элементов
  const $routes = Object.keys(routes).map((item) => {
    let liClasses = [styles.li]
    if (location.pathname === item) liClasses.push(styles.li_current)
    liClasses = liClasses.join(' ')
    return (
      <li
        className={liClasses}
        key={routes[item]}
      >
        <Link
          className={styles.link}
          onClick={toggleMenu}
          to={item}
        >{routes[item]}</Link>
      </li>
    )
  })

  const $dimmer = isOpen
    ? (<div
      className={styles.dimmer}
      onClick={toggleMenu}
    > </div>)
    : null

  // инициализация стилей
  let menuStyles = [styles.menu]
  if (isOpen) menuStyles.push(styles.menu_opened)
  menuStyles = menuStyles.join(' ')

  return (
    <Fragment>
      <div className={menuStyles}>
        <nav>
          <ul className={styles.ul}>
            {$routes}
          </ul>
        </nav>
      </div>
      {$dimmer}
    </Fragment>
  )
}

export default withRouter(Menu)