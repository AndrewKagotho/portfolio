import React from 'react'
import Footer from '../layout/Footer'
import { AppContext } from '../App'
import { redirectSVG } from '../components/Header'

let heading, description, content, liveLink, codeLink, technologies, prev, next
const projectArray = ['County Development Project Tracker', 'Crowdfunding app', 'Portfolio']

const ProjectView = () => {
  
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const {project, setProject} = React.useContext(AppContext)

  if(project === 1) {
    heading = (
      <h2>County Development Project Tracker</h2>
    )
    description = (
      <p>A tracking system that maintains project records for all counties in Kenya, providing project updates and insights on both the county and national levels.</p>
    )
    content = (
      <>
        <h3>The problem</h3>
        <p>A lacking in citizen-centric project tracking solutions for government-run public works.</p>
        <h3>The solution</h3>
        <p>The system offers itself as a centralized platform for tracking county projects in all 47 counties.</p>
        <h3>The approach</h3>
        <p>A survey informing the development of the system found that user experience, as manifested in the ease of use and understanding, was paramount.</p>
        <h3>The result</h3>
        <p>An online system capable of relaying public project information by facts and numbers.</p>
      </>
    )
    liveLink = (
      <span>Live demo</span>
    )
    codeLink = (
      <span>View code</span>
    )
    technologies = (
      <>
        <span>Technologies:</span>
        <dd>React.js</dd>
        <dd>Node.js</dd>
        <dd>Express.js</dd>
        <dd>MySQL</dd>
        <dd>SCSS</dd>
      </>
    )
  }

  else if(project === 2) {
    heading = (
      <h2>Crowdfunding app</h2>
    )
    description = (
      <p>An HTML, CSS and JavaScript developer challenge on Frontend Mentor further developed with an RDB backend and API integration.</p>
    )
    content = (
      <>
        <h3>The problem</h3>
        <p>A lacking in citizen-centric project tracking solutions for government-run public works.</p>
      </>
    )
    liveLink = (
      <span>Live demo</span>
    )
    codeLink = (
      <span>View code</span>
    )
    technologies = (
      <>
        <span>Technologies:</span>
        <dd>React.js</dd>
        <dd>Node.js</dd>
        <dd>Express.js</dd>
        <dd>MySQL</dd>
        <dd>SCSS</dd>
      </>
    )
  }

  else if(project === 3) {
    heading = (
      <h2>Portfolio</h2>
    )
    description = (
      <p>This site. Built to showcase itself and other personal projects, providing project commentary, links and previews.</p>
    )
    content = (
      <>
        <h3>The problem</h3>
        <p>A lacking in citizen-centric project tracking solutions for government-run public works.</p>
      </>
    )
    liveLink = (
      <span>Live demo</span>
    )
    codeLink = (
      <span>View code</span>
    )
    technologies = (
      <>
        <span>Technologies:</span>
        <dd>React.js</dd>
        <dd>Node.js</dd>
        <dd>Express.js</dd>
        <dd>MySQL</dd>
        <dd>SCSS</dd>
      </>
    )
  }

  const changeProjectButton = (arg) => {
    let changeCount = project + arg

    if(changeCount < 1)
      changeCount = 3
    else if(changeCount > 3)
      changeCount = 1

    setProject(changeCount)
    window.scrollTo(0, 0)
  }

  (() => {
    let prevCount = project - 2
    let nextCount = project

    if(prevCount < 0) prevCount = projectArray.length - 1
    if(nextCount > projectArray.length - 1) nextCount = 0

    prev = (<em>{projectArray[prevCount]}</em>)
    next = (<em>{projectArray[nextCount]}</em>)
  })()

  return (
    <>
      <div className='view secondary_view'>
        <div className='view__content'>
          <section>
            {heading}
            {description}
            {content}
            <div className='flex_row flex_row_alt'>{technologies}</div>
          </section>
        </div>
        <menu className='menu_alt'>
          <ul>
            <li>
              {liveLink}
              {redirectSVG}
            </li>
            <li>
              {codeLink}
              {redirectSVG}
            </li>
          </ul>
        </menu>
      </div>
      <div className='jump_to_project_section'>
        <h2 onClick={() => changeProjectButton(-1)}>{prev} &lt;&lt; Previous project</h2>
        <h2 onClick={() => changeProjectButton(1)}>Next project &gt;&gt; {next}</h2>
      </div>
      <Footer value={'sec'} />
    </>
  )
}

export default ProjectView