import { HashLink } from 'react-router-hash-link'

const About = () => {
  return (
    <section id='section_about'>
      <h2>About</h2>
      <p>Tech and coding enthusiast with a Bachelor's Degree in Applied Computer Technology from the United States International University (USIU - Africa). My current practice focuses on web design and development, with major projects highlighted in the <HashLink to='/#section_projects'>projects section</HashLink>.
      </p>
      <article>
        <div>
          <h3>BASc. in Applied Computer Technology</h3>
          <span>Software Engineering</span>
          <span>United States International University (USIU - Africa), Nairobi, Kenya</span>
        </div>
      </article>
    </section>
  )
}

export default About