import React from 'react'
import AppHeader from './AppHeader'

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout
