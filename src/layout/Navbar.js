import React from 'react'
import { Link, Outlet } from 'react-router-dom'

let showingNav = false

const Navbar = () => {

  const showMenuRef = React.useRef()
  const closeMenuRef = React.useRef()
  const menuRef = React.useRef()

  const showNav = () => {
    if(!showingNav) {
      menuRef.current.style.top = '5vh'
      showMenuRef.current.style.visibility = 'hidden'
      showMenuRef.current.style.opacity = '0'
      closeMenuRef.current.style.visibility = 'visible'
      closeMenuRef.current.style.opacity = '1'
      showingNav = true
    }
    else if(showingNav) {
      menuRef.current.style.top = '-7vh'
      showMenuRef.current.style.visibility = 'visible'
      showMenuRef.current.style.opacity = '1'
      closeMenuRef.current.style.visibility = 'hidden'
      closeMenuRef.current.style.opacity = '0'
      showingNav = false
    }
  }

  return (
    <>
      <nav>
        <svg ref={showMenuRef} className='showMenu' onClick={showNav} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M7.5 36.35q-.7 0-1.2-.5t-.5-1.25q0-.7.5-1.175.5-.475 1.2-.475h33q.7 0 1.2.475t.5 1.225q0 .7-.5 1.2t-1.2.5Zm0-10.65q-.7 0-1.2-.5T5.8 24q0-.75.5-1.225.5-.475 1.2-.475h33q.7 0 1.2.5t.5 1.2q0 .75-.5 1.225-.5.475-1.2.475Zm0-10.65q-.7 0-1.2-.475t-.5-1.225q0-.7.5-1.2t1.2-.5h33q.7 0 1.2.5t.5 1.25q0 .7-.5 1.175-.5.475-1.2.475Z"/></svg>
        <svg ref={closeMenuRef} className='closeMenu' onClick={showNav} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 26.4 13.65 36.75q-.5.5-1.2.5t-1.2-.5q-.5-.5-.5-1.2t.5-1.2L21.6 24 11.25 13.65q-.5-.5-.5-1.2t.5-1.2q.5-.5 1.2-.5t1.2.5L24 21.6l10.35-10.35q.5-.5 1.2-.5t1.2.5q.5.5.5 1.2t-.5 1.2L26.4 24l10.35 10.35q.5.5.5 1.2t-.5 1.2q-.5.5-1.2.5t-1.2-.5Z"/></svg>
        <ul ref={menuRef}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar