import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
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
          <Skills />
          <Projects />
        </main>
        <menu>
          <ul>
            <li><HashLink to='/#section_intro'>Intro</HashLink></li>
            <li><HashLink to='/#section_about'>About</HashLink></li>
            <li><HashLink to='/#section_skills'>Skills</HashLink></li>
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