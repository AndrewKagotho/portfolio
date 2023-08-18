import React from 'react'
import { profile } from '../data/profile.data'

let expandedDetails = false

const About = () => {
  const caretRef = React.useRef()
  const infoRef = React.useRef()

  const expandDetails = () => {
    if (expandedDetails) {
      caretRef.current.style.rotate = '0deg'
      infoRef.current.style.display = 'none'
      expandedDetails = false
    } else {
      caretRef.current.style.rotate = '180deg'
      infoRef.current.style.display = 'block'
      expandedDetails = true
    }
  }

  return (
    <section id='section_about'>
      <h2>About</h2>
      <p>{profile.about}</p>
      <article>
        <div>
          <section onClick={expandDetails}>
            <h3>Degree information</h3>
            <svg
              ref={caretRef}
              xmlns='http://www.w3.org/2000/svg'
              height='36px'
              viewBox='0 0 24 24'
              width='36px'>
              <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
              <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
            </svg>
          </section>
          <div ref={infoRef}>
            <b>Major:</b>
            <span>{profile.degree.major}</span>
            <b>Concentration:</b>
            <span>{profile.degree.minor}</span>
            <b>College:</b>
            <span>
              {profile.degree.college}, {profile.degree.location}
            </span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default About
