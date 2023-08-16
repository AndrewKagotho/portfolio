import { useEffect, useContext, Fragment } from 'react'
import Footer from '../layout/Footer'
import { AppContext } from '../App'
import { redirectSVG } from '../assets/icons'
import { projects } from '../data/projects.data'

const ProjectView = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { selectedProject, setSelectedProject } = useContext(AppContext)
  const showProject = projects.find(({ id }) => id === selectedProject)

  const changeProject = (arg) => {
    let showID = selectedProject + arg

    if (showID < 1) showID = projects.length
    else if (showID > projects.length) showID = 1

    setSelectedProject(showID)
    window.scrollTo(0, 0)
  }

  let prevID = selectedProject - 2
  let nextID = selectedProject

  if (prevID < 0) prevID = projects.length - 1
  if (nextID > projects.length - 1) nextID = 0

  return (
    <>
      <div className='banner secondary_banner'>
        <div className='banner__title banner__title_sm'>
          <h2>{showProject.name}</h2>
        </div>
      </div>
      <div className='view secondary_view'>
        <div className='view__content view__content_alt_2'>
          <section>
            <div className='view__content__description'>
              <h3>Description</h3>
              <p>{showProject.description}</p>
            </div>
            {showProject.content.map((item, index) => (
              <Fragment key={index}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Fragment>
            ))}
            <div className='flex_row flex_row_alt'>
              <span>Keywords:</span>
              {showProject.keywords.map((item, index) => (
                <dd key={index}>{item}</dd>
              ))}
            </div>
          </section>
        </div>
        {showProject.demoLink ||
          (showProject.sourceLink && (
            <menu className='menu_alt'>
              <ul>
                {showProject.demoLink && (
                  <li>
                    <span>
                      <a
                        href={showProject.demoLink}
                        target='_blank'
                        rel='noopener noreferrer'>
                        Live demo
                      </a>
                    </span>
                    {redirectSVG}
                  </li>
                )}
                {showProject.sourceLink && (
                  <li>
                    <span>
                      <a
                        href={showProject.sourceLink}
                        target='_blank'
                        rel='noopener noreferrer'>
                        View code
                      </a>
                    </span>
                    {redirectSVG}
                  </li>
                )}
              </ul>
            </menu>
          ))}
      </div>
      <div className='jump_to_project_section'>
        <h2 onClick={() => changeProject(1)}>
          Next project &gt;&gt; <em>{projects[nextID].name}</em>
        </h2>
        <h2 onClick={() => changeProject(-1)}>
          <em>{projects[prevID].name}</em> &lt;&lt; Previous project
        </h2>
      </div>
      <Footer />
    </>
  )
}

export default ProjectView
