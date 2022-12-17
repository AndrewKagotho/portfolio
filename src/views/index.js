import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../layout/Footer'

const background = 'https://illustrations.popsy.co/sky/abstract-art-1.svg'

const View = () => {

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
            <li><a href='#section_intro'>Intro</a></li>
            <li><a href='#section_about'>About</a></li>
            <li><a href='#section_skills'>Skills</a></li>
            <li><a href='#section_projects'>Projects</a></li>
          </ul>
          <img className='background_art_1' src={background} alt='' />
        </menu>
      </div>
      <Footer value={'pri'} />
    </>
  )
}

export default View