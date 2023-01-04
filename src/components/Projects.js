import React from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App'

const Projects = () => {

  const {setProject} = React.useContext(AppContext)

  return (
    <section id='section_projects'>
      <h2>Projects</h2>
      <p>An overview of personal works.</p>
      <div className='flex_row'>
        <article>
          <h3>County Development Project Tracker</h3>
          <hr/>
          <p>An online tracking system that maintains public project records for all 47 counties in Kenya, providing project updates and insights on both county and national levels.</p>
          <button onClick={() => setProject(1)}><Link to='/project'>Go to project</Link></button>
        </article>
        <article>
          <h3>Portfolio</h3>
          <hr/>
          <p>This site. Built to showcase itself and other personal projects, providing project commentary, links and previews. Current unfinished projects are also highlighted here.</p>
          <button onClick={() => setProject(3)}><Link to='/project'>Go to project</Link></button>
        </article>
        <article>
          <h3>Crowdfunding app</h3>
          <hr/>
          <p>An HTML, CSS and JavaScript challenge on Frontend Mentor further developed with an RDB backend and API integration.</p>
          <button onClick={() => setProject(2)}><Link to='/project'>Go to project</Link></button>
        </article>
      </div>
      <button><Link to='/projects'>See all projects   &gt;</Link></button>
    </section>
  )
}

export default Projects