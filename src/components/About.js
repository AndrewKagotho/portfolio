const About = () => {
  return (
    <section id='section_about'>
      <h2>About</h2>
      <p>Hi, my name is Andrew, a graduate in BSc. Applied Computer Technology from the United States Intl. University (USIU - Africa) with a concentration in Software Engineering and current practice in front-end web development. I am an entrant in the tech industry with previous work experience and several projects under my belt, looking for further learning and growth opportunities. A summary of my education history and professional experience can be found in the section below.</p>
      <h3>Education</h3>
      <dl>
        <dt>United States International University (USIU - Africa)</dt>
        <dd>BSc. in Applied Computer Technology</dd>
        <dd>Concentration: Software Engineering</dd>
        <dd>Years active: 2018 - 2022</dd>
        <dt>UpperHill School</dt>
        <dd>KCSE score: 81% (A-)</dd>
        <dd>Years active: 2012 - 2015</dd>
      </dl>
      <h3>Professional experience</h3>
      <dl>
        <dt>Kenya Commercial Bank (KCB)</dt>
        <dd>Networks Infrastructure, IT Department, Internship</dd>
        <dd>Years active: Jan - Apr 2022</dd>
        <ul className='section_about__list'>
          <li>Part of a team dealing in the design and working functionality of the KCB intranet subsidiary websites</li>
          <li>Trained for and later responsible for CISCO registry functions i.e. profile creation, maintenance</li>
          <li>Submitted a script later adopted as a template while part of a team tasked with the mass remote installation of a network compliance software across all devices in the organization</li>
        </ul>
        <dd>More info available in my resume.</dd>
      </dl>
    </section>
  )
}

export default About