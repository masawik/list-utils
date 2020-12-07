import React from 'react'
import styles from './Layout.module.css'
import Header from "../../components/Header/Header";
import Menu from "../../components/Navigation/Menu/Menu";
import MenuContext from "../../components/Navigation/MenuContext";

export default function Layout({children}) {
  return (
    <div className={styles.layout}>
      <MenuContext>
        <Menu/>
        <Header/>
      </MenuContext>

      <div className='container'>
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}