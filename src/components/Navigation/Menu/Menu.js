import React, {useState, Fragment, useEffect} from 'react'
import styles from './Menu.module.css'
import Burger from "../Burger/Burger";
import {Link, withRouter} from "react-router-dom";

function Menu({location}) {
  // инициализация стейтов
  const [isOpen, setIsOpen] = useState(false)
  // прокрутка вверх и скрытие скролла при открытии меню
  useEffect(() => {
    if (isOpen) {
      window.scroll(0, 0)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

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
          onClick={toggleMenu}
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
        className={styles.burger}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />

      <div className={styles.mobileHeaderMenu}>
        <Burger
          isOpen={isOpen}
          toggleMenu={toggleMenu}
        />
      </div>

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