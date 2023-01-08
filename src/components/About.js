import { HashLink } from 'react-router-hash-link'

const About = () => {
  return (
    <section id='section_about'>
      <h2>About</h2>
      <p>Tech and coding enthusiast with a Bachelor's Degree in Applied Computer Technology from the United States International University (USIU - Africa). My current practice focuses on web design and development, with major projects highlighted in the <HashLink to='/#section_projects'>projects section</HashLink>.
      </p>
      <h3>Degree</h3>
      <dl>
        <dt>United States International University (USIU - Africa), Nairobi, Kenya</dt>
        <dd>BASc. in Applied Computer Technology</dd>
        <dd>Concentration: Software Engineering</dd>
        <dd>Years active: 2018 - 2022</dd>
      </dl>
    </section>
  )
}

export default About