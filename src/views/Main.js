import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import Projects from '../components/Projects'
import Footer from '../layout/Footer'

const background = 'https://illustrations.popsy.co/sky/abstract-art-1.svg'

const View = () => {
  
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div className='view'>
        <main className='view__content'>
          <About />
          <Tech />
          <Projects />
        </main>
        <menu>
          <ul>
            <li onClick={() => window.scrollTo(0,0)}><span>Intro</span></li>
            <li><HashLink to='/#section_about'>About</HashLink></li>
            <li><HashLink to='/#section_tech'>Techs</HashLink></li>
            <li><HashLink to='/#section_projects'>Projects</HashLink></li>
          </ul>
          <img className='background_art_1' src={background} alt='' />
        </menu>
      </div>
      <Footer value={'pri'} />
    </>
  )
}

export default View