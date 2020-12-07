import React, {useState} from 'react'
export const MenuStateContext = React.createContext({})

export default function MenuContext({children}) {
  const [isOpen, setIsOpen] = useState(false)
  function toggleMenu() {
    setIsOpen(prevState => !prevState)
  }

  const routes = {
    '/reformat': 'Форматирование строк',
    '/duplicates': 'Удаление дубликатов строк',
    '/twolists': 'Манипуляции с двумя списками',
  }

  const contextValue = {
    isOpen,
    toggleMenu,
    routes
  }

  return (
    <MenuStateContext.Provider value={contextValue}>
      {children}
    </MenuStateContext.Provider>
  )
}