import React, {useState, Fragment} from 'react'
import styles from './Menu.module.css'
import Burger from "../Burger/Burger";
import {Link, withRouter} from "react-router-dom";

function Menu({location}) {
  // инициализация стейтов
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(prevState => !prevState)
  }

  // создание дом элементов
  const routes = [
    {
      title: 'Форматирование строк',
      path: '/reformat'
    },
    {
      title: 'Удаление дубликатов строк',
      path: '/duplicates'
    },
    {
      title: 'Манипуляции с двумя списками',
      path: '/twolists'
    },
  ]
  const $routes = routes.map((item, index) => {
    let liClasses = [styles.li]
    if (location.pathname === item.path) liClasses.push(styles.li_current)
    liClasses = liClasses.join(' ')
    return (
      <li
        className={liClasses}
        key={item.title}
      >
        <Link
          className={styles.link}
          to={item.path}
        >{item.title}</Link>
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
      <Burger
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />

      <div className={menuStyles}>
        <nav>
          <ul>
            {$routes}
          </ul>
        </nav>
      </div>
      {$dimmer}
    </Fragment>
  )
}

export default withRouter(Menu)