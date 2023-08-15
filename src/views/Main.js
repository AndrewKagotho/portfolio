import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Projects from '../components/Projects'
import Footer from '../layout/Footer'
import { IconContext } from 'react-icons'

const View = () => {
  React.useEffect(() => {
    // window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div className='view'>
        <main className='view__content'>
          <About />
          <IconContext.Provider
            value={{
              style: {
                width: '40px',
                height: '40px',
                color: '#11507A'
              }
            }}>
            <Tech />
          </IconContext.Provider>
          <Projects />
        </main>
        <menu>
          <ul>
            <li onClick={() => window.scrollTo(0, 0)}>
              <span>Intro</span>
            </li>
            <li>
              <HashLink to='/#section_about'>About</HashLink>
            </li>
            <li>
              <HashLink to='/#section_tech'>Techs</HashLink>
            </li>
            <li>
              <HashLink to='/#section_projects'>Projects</HashLink>
            </li>
          </ul>
        </menu>
      </div>
      <Footer />
    </>
  )
}

export default View
