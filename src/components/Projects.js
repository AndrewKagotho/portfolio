import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'

const Projects = () => {
  const { setProject } = React.useContext(AppContext)

  return (
    <section id='section_projects'>
      <h2>Projects</h2>
      <p>An overview of personal works.</p>
      <div className='flex_row'>
        <article>
          <div>
            <h3>County Development Project Tracker</h3>
            <button onClick={() => setProject(1)}>
              <Link to='/project'>Go to project</Link>
            </button>
          </div>
          <p>
            An online tracking and repository system covering development
            projects in all 47 counties in Kenya, with project insights and
            updates provided on both county and national levels.
          </p>
        </article>
        <article>
          <div>
            <h3>Crowdfunding app</h3>
            <button onClick={() => setProject(2)}>
              <Link to='/project'>Go to project</Link>
            </button>
          </div>
          <p>
            An HTML, CSS and JavaScript challenge on Frontend Mentor further
            developed with a simple relational database and API integration.
          </p>
        </article>
        <article>
          <div>
            <h3>Portfolio</h3>
            <button onClick={() => setProject(3)}>
              <Link to='/project'>Go to project</Link>
            </button>
          </div>
          <p>
            This site. Built to showcase itself and other personal projects,
            providing project commentary, links and previews. Also features
            current unfinished projects.
          </p>
        </article>
      </div>
      <button>
        <Link to='/projects'>See all projects &gt;</Link>
      </button>
    </section>
  )
}

export default Projects
