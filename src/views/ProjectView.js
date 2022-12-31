import React from 'react'
import Footer from '../layout/Footer'

const ProjectView = () => {
  
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className='view secondary_view'>
        <div className='view__content'>
          <section className='section_dl'>
            <h2>County Development Project Tracker</h2>
            <p>A tracking system that maintains project records for all counties in Kenya, providing project updates and insights on both the county and national levels.</p>
            <h3>The problem</h3>
            <p>A lacking in citizen-centric project tracking solutions for government-run public works.</p>
            <h3>The solution</h3>
            <p>The system offers itself as a centralized platform for tracking county projects in all 47 counties.</p>
            <h3>The approach</h3>
            <p>A survey informing the development of the system found that user experience, as manifested in the ease of use and understanding, was paramount.</p>
            <h3>The result</h3>
            <p>An online system capable of relaying public project information by facts and numbers.</p>
            <div className='flex_row flex_row_alt'>
              <span>Tags:</span>
              <dd>React.js</dd>
              <dd>Node.js</dd>
              <dd>Express.js</dd>
              <dd>MySQL</dd>
              <dd>SCSS</dd>
            </div>
          </section>
        </div>
        <menu>
          <ul>
            <li><span>Live demo</span></li>
            <li><span>View code</span></li>
          </ul>
        </menu>
      </div>
      <div className='change_project_section'>
        <h2>Next project &gt;&gt; <em>Crowdfunding app...</em></h2>
      </div>
      <Footer value={'sec'} />
    </>
  )
}

export default ProjectView