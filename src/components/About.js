import React from 'react'
import { HashLink } from 'react-router-hash-link'

let expandedDetails = false

const About = () => {

  const arrowRef = React.useRef()
  const infoRef = React.useRef()

  const expandDetails = () => {
    if(expandedDetails) {
      arrowRef.current.style.rotate = '0deg'
      infoRef.current.style.display = 'none'
      expandedDetails = false
    }
    else {
      arrowRef.current.style.rotate = '180deg'
      infoRef.current.style.display = 'block'
      expandedDetails = true
    }
  }

  return (
    <section id='section_about'>
      <h2>About</h2>
      <p>Tech and coding enthusiast with a Bachelor's Degree in Applied Computer Technology from the United States International University (USIU - Africa). My current practice focuses on web design and development, with major projects highlighted in the <HashLink to='/#section_projects'>projects section</HashLink>.
      </p>
      <article>
        <div>
          <section onClick={expandDetails}>
            <h3>Degree information</h3>
            <svg ref={arrowRef} xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>
          </section>
          <div ref={infoRef}>
            <span>BASc. in Applied Computer Technology</span>
            <span>Software Engineering</span>
            <span>United States International University, Nairobi, Kenya</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default About