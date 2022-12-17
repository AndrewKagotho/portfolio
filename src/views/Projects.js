import Footer from '../layout/Footer'

const illustration = 'https://illustrations.popsy.co/sky/man-with-a-laptop.svg'
const background1 = 'https://illustrations.popsy.co/sky/abstract-art-6.svg'
const background2 = 'https://illustrations.popsy.co/sky/abstract-art-6.svg'

const Projects = () => {
  return (
    <>
      <div className='banner secondary_banner'>
      <div className='image_container'><img src={illustration} alt=''/></div>
        <h2>Projects</h2>
        <ul>
          <li>Crowdfunding app</li>
          <li>Project tracker</li>
          <li>Portfolio site</li>
        </ul>
      </div>
      <div className='view secondary_view'>
        <div className='view__content view__content_alt'>
          <section>
            <h2>County Development Project Tracker</h2>
            <p>A tracking system that maintains project records for all counties in Kenya, providing project updates and insights on both the county and national levels.</p>
            <div className='flex_row flex_row_center'>
              <span>View project</span>
              <span>View live demo</span>
              <span>View repository</span>
            </div>
          </section>
          <section>
            <h2>Crowdfunding app</h2>
            <p>An HTML, CSS and JavaScript challenge on Frontend Mentor further developed with a MySQL backend and API integration.</p>
            <div className='flex_row flex_row_center'>
              <span>View project</span>
              <span>View live demo</span>
              <span>View repository</span>
            </div>
          </section>
          <section>
            <h2>Portfolio</h2>
            <p>This here site. Built to showcase itself and other projects.</p>
            <div className='flex_row flex_row_center'>
              <span>View project</span>
              <span>View live demo</span>
              <span>View repository</span>
            </div>
          </section>
          <section>
            <h2>Students' Living Quarters Portal</h2>
            <p>Coming soon.</p>
          </section>
          <img className='background_art_2 background_top' src={background1} alt='' />
          <img className='background_art_2 background_bottom' src={background2} alt='' />
        </div>
      </div>
      <Footer value={'mid'} />
    </>
  )
}

export default Projects