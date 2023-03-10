import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import Footer from '../layout/Footer'

const Projects = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {setProject} = React.useContext(AppContext)

  return (
    <>
      <div className='banner secondary_banner'>
        <div className='banner__title banner__title_sm banner__title__alt'>
          <h2>Projects</h2>
          <span>Personal works.</span>
        </div>
      </div>
      <div className='view secondary_view'>
        <div className='view__content view__content_alt'>
          <section>
            <h2>County Development Project Tracker</h2>
            <p>An online tracking system that maintains public project records for all 47 counties in Kenya, providing project updates and insights on both county and national levels.</p>
            <Link to='/project'>
              <button onClick={() => setProject(1)}>View project</button>
            </Link>
          </section>
          <section>
            <h2>Crowdfunding app</h2>
            <p>An HTML, CSS and JavaScript challenge on Frontend Mentor further developed with a simple relational database and API integration.</p>
            <Link to='/project'>
              <button onClick={() => setProject(2)}>View project</button>
            </Link>
          </section>
          <section>
            <h2>Portfolio</h2>
            <p>This site. Built to showcase itself and other personal projects, providing project commentary, links and previews. Also features current unfinished projects.</p>
            <Link to='/project'>
              <button onClick={() => setProject(3)}>View project</button>
            </Link>
          </section>
          <section>
            <h2>Students' Living Quarters Portal</h2>
            <p>An account management portal for students and landlords in off-campus living establishments, offering rent management solutions and direct communications in-app. Coming soon.</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects