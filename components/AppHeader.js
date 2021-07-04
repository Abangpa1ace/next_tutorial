import React from 'react';
import Link from 'next/link'
import AppHeaderStyles from '../styles/AppHeader.module.css'

const AppHeader = () => {
  return (
    <nav className={AppHeaderStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/photo">Photos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default AppHeader
