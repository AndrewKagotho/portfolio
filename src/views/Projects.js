import React from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import Footer from '../layout/Footer'

const background = 'https://illustrations.popsy.co/sky/product-launch.svg'

const Projects = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {setProject} = React.useContext(AppContext)

  return (
    <>
      <div className='banner secondary_banner'>
        <h2>Projects</h2>
        <span>Personal works.</span>
      </div>
      <div className='view secondary_view'>
        <div className='view__content view__content_alt'>
          <img className='background_art_2' src={background} alt='' />
          <section>
            <h2>County Development Project Tracker</h2>
            <p>A tracking system that maintains project records for all counties in Kenya, providing project updates and insights on each county and computing cummulative national project statistics.</p>
            <Link to='/project'>
              <button onClick={() => setProject(1)}>View project</button>
            </Link>
          </section>
          <section>
            <h2>Crowdfunding app</h2>
            <p>An HTML, CSS and JavaScript developer challenge on Frontend Mentor further developed with an RDB backend and API integration.</p>
            <Link to='/project'>
              <button onClick={() => setProject(2)}>View project</button>
            </Link>
          </section>
          <section>
            <h2>Portfolio</h2>
            <p>This site. Built to showcase itself and other personal projects, providing project commentary, links and previews.</p>
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
      <Footer value={'mid'} />
    </>
  )
}

export default Projects