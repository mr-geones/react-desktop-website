import React from 'react'
import Nav from './Nav'
import Toggle from './Toggle'

function Header() {
  return (
    <header>
      <div id="header">
        <Nav />
        <Toggle />
      </div>
    </header>
  )
}

export default Header