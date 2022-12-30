import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <section id='section_projects'>
      <h2>Projects</h2>
      <p>An overview of personal works.</p>
      <div className='flex_row'>
        <article>
          <h3>County Development Project Tracker</h3>
          <hr/>
          <p>A tracking system that maintains project records for all counties in Kenya, providing project updates and insights on both the county and national levels.</p>
          <button><Link to='/project?id=county-development-project-tracker'>Go to project</Link></button>
        </article>
        <article>
          <h3>Crowdfunding app</h3>
          <hr/>
          <p>An HTML, CSS and JavaScript challenge on Frontend Mentor further developed with a MySQL backend and API integration.</p>
          <button><Link to='/project?id=crowdfunding-app'>Go to project</Link></button>
        </article>
        <article>
          <h3>Portfolio</h3>
          <hr/>
          <p>This here site. Built to showcase itself and other projects.</p>
          <button><Link to='/project?id=portfolio'>Go to project</Link></button>
        </article>
      </div>
      <button><Link to='/projects'>See all projects   &gt;</Link></button>
    </section>
  )
}

export default Projects