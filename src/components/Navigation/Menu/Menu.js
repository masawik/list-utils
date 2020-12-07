import React, {Fragment, useContext} from 'react'
import styles from './Menu.module.css'
import {NavLink} from 'react-router-dom'
import {MenuStateContext} from "../MenuContext";

function Menu() {
  const {isOpen, routes, toggleMenu} = useContext(MenuStateContext)

  // создание элементов
  const $routes = Object.keys(routes).map((item) => {
    return (
      <li
        className={styles.li}
        key={routes[item]}
      >
        <NavLink
          className={styles.link}
          activeClassName={styles.link_current}
          onClick={toggleMenu}
          to={item}
        >{routes[item]}</NavLink>
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

export default Menu