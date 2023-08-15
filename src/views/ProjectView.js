import React from 'react'
import Footer from '../layout/Footer'
import { AppContext } from '../App'
import { redirectSVG } from '../assets/icons'

let heading, description, content, liveLink, codeLink, technologies, prev, next
const projectArray = [
  'County Development Project Tracker',
  'Crowdfunding app',
  'Portfolio'
]

const ProjectView = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { project, setProject } = React.useContext(AppContext)

  if (project === 1) {
    heading = <h2>County Development Project Tracker</h2>
    description = (
      <>
        <h3>Description</h3>
        <p>
          An online tracking system that maintains public project records for
          all 47 counties in Kenya, providing project updates and insights on
          both county and national levels.
        </p>
      </>
    )
    content = (
      <>
        <h3>The problem</h3>
        <p>
          The lack of citizen-centric project tracking solutions for
          government-run public works was the gap the CDPT system attempts to
          tackle. Currently, there are very few (and scarcely maintained)
          sources of public projects data available to the general public. The
          present ones, predecessors to the CDPT, lean heavily towards
          technicalities that the layman - the common <i>mwananchi</i> - would
          most likely be non-conversant with.
        </p>
        <h3>The solution</h3>
        <p>
          To redefine the concept of public works project tracking, the solution
          had to adopt a focus for the person in the grassroots. What the CDPT
          system manages to do is offer itself up as a centralized platform for
          tracking development projects in all 47 counties, providing digestible
          insights for each. The interface makes for an
          easy-to-follow-and-understand experience, ensuring that all
          information that may be needed is only a few clicks away.
        </p>
        <h3>The approach</h3>
        <p>
          The system was developed for web due to the ubiquity and accessibility
          of the online medium. Web pages were maintained at a minimum for ease
          of use. The system architecture comprised of a frontend with public
          user and admin client UIs, a web server, a backend with a relational
          database and an intermediary RESTful API for data communications
          across the various levels.
        </p>
        <h3>The result</h3>
        <p>
          An online system capable of relaying public project information by
          facts and numbers to the general public.
        </p>
      </>
    )
    liveLink = (
      <span>
        <a
          href='https://andrewkagotho.github.io/development-project-tracker/'
          target='_blank'
          rel='noopener noreferrer'>
          Live demo
        </a>
      </span>
    )
    codeLink = (
      <span>
        <a
          href='https://github.com/AndrewKagotho/development-project-tracker'
          target='_blank'
          rel='noopener noreferrer'>
          View code
        </a>
      </span>
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
  } else if (project === 2) {
    heading = <h2>Crowdfunding app</h2>
    description = (
      <>
        <h3>Description</h3>
        <p>
          An HTML, CSS and JavaScript challenge on Frontend Mentor further
          developed with a simple relational database and API integration.
        </p>
      </>
    )
    content = (
      <>
        <h3>The challenge</h3>
        <p>
          Provided with screenshots for the desktop and mobile experience, the
          task was to recreate the website with the specifications highlighted
          in the guides. Backend integration was not required but was included
          in this particular attempt, by way of a relational database queried
          using MySQL over a RESTful API. The frontend was hosted on GitHub
          using GitHub Pages and the backend deployed on Heroku.
        </p>
        <h3>The challenge's challenge</h3>
        <p>
          This project features on my portfolio by virtue of being a personal
          victory in my web development learning journey. First built using
          vanilla JavaScript in 2021 and (unsuccessfully) deployed, I came
          around to it months later with a better understanding of 'how things
          work', made things work, and now everything works - and not just on my
          machine.
        </p>
      </>
    )
    liveLink = (
      <span>
        <a
          href='https://andrewkagotho.github.io/crowdfunding-app/'
          target='_blank'
          rel='noopener noreferrer'>
          Live demo
        </a>
      </span>
    )
    codeLink = (
      <span>
        <a
          href='https://github.com/AndrewKagotho/crowdfunding-app'
          target='_blank'
          rel='noopener noreferrer'>
          View code
        </a>
      </span>
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
  } else if (project === 3) {
    heading = <h2>Portfolio</h2>
    description = (
      <>
        <h3>Description</h3>
        <p>
          This site. Built to showcase itself and other personal projects,
          providing project commentary, links and previews. Also features
          current unfinished projects.
        </p>
      </>
    )
    content = (
      <>
        <h3>The design</h3>
        <p>
          An uncluttered, minimalist design was preferred to busier alternatives
          given the nature of the site and its emphasis on text. For further
          context, and to fill negative spaces in occasion, illustrations
          (sourced from popsy.co) were added to the website desktop experience.
          These additions however feature less on mobile devices. Initial design
          was accomplished using a desktop-first approach before translation for
          smaller, taller, screens.
        </p>
        <h3>The build</h3>
        <p>
          Content on the site is served statically to eliminate any challenges
          that may arise with network latencies. Because the site is not
          expected to scale much, server overhead was deemed unnecessary.
        </p>
      </>
    )
    liveLink = (
      <span>
        <a
          href='https://andrewkagotho.github.io/portfolio/'
          target='_blank'
          rel='noopener noreferrer'>
          Live demo
        </a>
      </span>
    )
    codeLink = (
      <span>
        <a
          href='https://github.com/AndrewKagotho/portfolio'
          target='_blank'
          rel='noopener noreferrer'>
          View code
        </a>
      </span>
    )
    technologies = (
      <>
        <span>Technologies:</span>
        <dd>React.js</dd>
        <dd>SCSS</dd>
        <dd>Responsive design</dd>
      </>
    )
  }

  const changeProjectButton = (arg) => {
    let changeCount = project + arg

    if (changeCount < 1) changeCount = 3
    else if (changeCount > 3) changeCount = 1

    setProject(changeCount)
    window.scrollTo(0, 0)
  }

  ;(() => {
    let prevCount = project - 2
    let nextCount = project

    if (prevCount < 0) prevCount = projectArray.length - 1
    if (nextCount > projectArray.length - 1) nextCount = 0

    prev = <em>{projectArray[prevCount]}</em>
    next = <em>{projectArray[nextCount]}</em>
  })()

  return (
    <>
      <div className='banner secondary_banner'>
        <div className='banner__title banner__title_sm'>{heading}</div>
      </div>
      <div className='view secondary_view'>
        <div className='view__content view__content_alt_2'>
          <section>
            <div className='view__content__description'>{description}</div>
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
        <h2 onClick={() => changeProjectButton(1)}>
          Next project &gt;&gt; {next}
        </h2>
        <h2 onClick={() => changeProjectButton(-1)}>
          {prev} &lt;&lt; Previous project
        </h2>
      </div>
      <Footer />
    </>
  )
}

export default ProjectView
