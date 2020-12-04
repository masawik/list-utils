import React from 'react'
import styles from './Layout.module.css'
import Menu from "../../components/Navigation/Menu/Menu";

export default function Layout({children}) {
  return (
    <div className={styles.layout}>
      <Menu/>

      <main>
        {children}
      </main>
    </div>
  )
}