import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

import { projects } from '../data/projects.data'

const ProjectCards = () => {
  const { setSelectedProject } = useContext(AppContext)

  return (
    <section id='section_projects'>
      <h2>Projects</h2>
      <p>An overview of personal works.</p>
      <div className='flex_row'>
        {projects
          .filter((item) => item.featured === 'true')
          .map((item) => (
            <article key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <button onClick={() => setSelectedProject(item.id)}>
                  <Link to='/project'>Go to project</Link>
                </button>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
      </div>
      <button>
        <Link to='/projects'>See all projects {'  '} &gt;</Link>
      </button>
    </section>
  )
}

export default ProjectCards
