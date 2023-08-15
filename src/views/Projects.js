import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../App'
import { projects, unpublishedProjects } from '../components/projects.resources'
import Footer from '../layout/Footer'

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { setProject } = useContext(AppContext)

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
          {projects.map((item) => (
            <section key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <Link to='/project'>
                <button onClick={() => setProject(item.id)}>
                  View project
                </button>
              </Link>
            </section>
          ))}
          {unpublishedProjects.map((item) => (
            <section key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
