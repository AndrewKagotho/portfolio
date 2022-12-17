import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className='secondary_list'>
          <li><Link to='/projects'>&lt;   See all projects</Link></li>
        </ul>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar