import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { showNav } from '../utils/showNav'

const Navbar = () => {
  const location = useLocation()

  const showMenuRef = useRef()
  const closeMenuRef = useRef()
  const menuRef = useRef()

  return (
    <nav>
      <svg
        ref={showMenuRef}
        className='showMenu'
        onClick={() => showNav(menuRef, showMenuRef, closeMenuRef)}
        xmlns='http://www.w3.org/2000/svg'
        height='48'
        width='48'>
        <path d='M7.5 36.35q-.7 0-1.2-.5t-.5-1.25q0-.7.5-1.175.5-.475 1.2-.475h33q.7 0 1.2.475t.5 1.225q0 .7-.5 1.2t-1.2.5Zm0-10.65q-.7 0-1.2-.5T5.8 24q0-.75.5-1.225.5-.475 1.2-.475h33q.7 0 1.2.5t.5 1.2q0 .75-.5 1.225-.5.475-1.2.475Zm0-10.65q-.7 0-1.2-.475t-.5-1.225q0-.7.5-1.2t1.2-.5h33q.7 0 1.2.5t.5 1.25q0 .7-.5 1.175-.5.475-1.2.475Z' />
      </svg>
      <svg
        ref={closeMenuRef}
        className='closeMenu'
        onClick={() => showNav(menuRef, showMenuRef, closeMenuRef)}
        xmlns='http://www.w3.org/2000/svg'
        height='48'
        width='48'>
        <path d='M24 26.4 13.65 36.75q-.5.5-1.2.5t-1.2-.5q-.5-.5-.5-1.2t.5-1.2L21.6 24 11.25 13.65q-.5-.5-.5-1.2t.5-1.2q.5-.5 1.2-.5t1.2.5L24 21.6l10.35-10.35q.5-.5 1.2-.5t1.2.5q.5.5.5 1.2t-.5 1.2L26.4 24l10.35 10.35q.5.5.5 1.2t-.5 1.2q-.5.5-1.2.5t-1.2-.5Z' />
      </svg>
      <ul ref={menuRef}>
        {location.pathname === '/project' ? (
          <Link to='/projects'>
            <li className='secondary_list'>&lt; See all projects</li>
          </Link>
        ) : (
          <>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/projects'>
              <li>Projects</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar
