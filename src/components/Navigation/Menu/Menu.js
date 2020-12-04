import React, {useState, Fragment} from 'react'
import styles from './Menu.module.css'
import Burger from "../Burger/Burger";
import {Link} from "react-router-dom";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen(prevState => !prevState)
  }

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

  const routesEl = routes.map((item, index) => {
    return (
      <li key={'navLis' + index}>
        <Link key={'navLinks' + index} to={item.path}>{item.title}</Link>
      </li>
    )
  })
  // инициализация стилей
  let menuStyles = [styles.menu]
  let dimmerStyles = [styles.dimmer]
  if (isOpen) {
    menuStyles.push(styles.menu_opened)
    dimmerStyles.push(styles.dimmer_active)
  }
  menuStyles = menuStyles.join(' ')
  dimmerStyles = dimmerStyles.join(' ')

  return (
    <Fragment>
      <Burger
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />

      <div className={menuStyles}>
        <nav>
          <ul>
            {routesEl}
          </ul>
        </nav>
      </div>

      <div
        className={dimmerStyles}
        onClick={toggleMenu}
      > </div>
    </Fragment>
  )
}