import { HashLink } from 'react-router-hash-link'

const Menu = () => {
  return (
    <menu>
      <ul>
        <li onClick={() => window.scrollTo(0, 0)}>
          <span>Intro</span>
        </li>
        <li>
          <HashLink to='/#section_about'>About</HashLink>
        </li>
        <li>
          <HashLink to='/#section_tech'>Tech</HashLink>
        </li>
        <li>
          <HashLink to='/#section_projects'>Projects</HashLink>
        </li>
      </ul>
    </menu>
  )
}

export default Menu
