import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/projects'>Tests</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar