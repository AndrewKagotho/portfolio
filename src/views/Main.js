import { useEffect } from 'react'
import { IconContext } from 'react-icons'
import Menu from '../components/Menu'
import Header from '../components/Header'
import About from '../components/About'
import Tech from '../components/Tech'
import ProjectCards from '../components/ProjectCards'
import Footer from '../layout/Footer'

const View = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
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
          <ProjectCards />
        </main>
        <Menu />
      </div>
      <Footer />
    </>
  )
}

export default View
