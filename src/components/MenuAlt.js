import { redirectSVG } from '../assets/icons'

const MenuAlt = ({ project }) => {
  return (
    <menu className='menu_alt'>
      <ul>
        {project.demoLink && (
          <li>
            <span>
              <a
                href={project.demoLink}
                target='_blank'
                rel='noopener noreferrer'>
                Live demo
              </a>
            </span>
            <sup>{redirectSVG}</sup>
          </li>
        )}
        {project.sourceLink && (
          <li>
            <span>
              <a
                href={project.sourceLink}
                target='_blank'
                rel='noopener noreferrer'>
                View code
              </a>
            </span>
            <sup>{redirectSVG}</sup>
          </li>
        )}
      </ul>
    </menu>
  )
}

export default MenuAlt
