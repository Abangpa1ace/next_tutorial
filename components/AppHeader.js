import React from 'react';
import Link from 'next/link'

const AppHeader = () => {
  return (
    <nav>
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
