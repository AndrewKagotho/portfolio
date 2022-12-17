import HTML from '../assets/icons/html.png'
import CSS from '../assets/icons/css.png'
import JavaScript from '../assets/icons/javascript.png'
import Node from '../assets/icons/node.png'
import Express from '../assets/icons/express.png'
import MySQL from '../assets/icons/mysql.png'
import PHP from '../assets/icons/php.png'
import ReactLogo from '../assets/icons/react.png'
import SASS from '../assets/icons/sass.png'
import Java from '../assets/icons/java.png'
import Markdown from '../assets/icons/markdown.png'
import Git from '../assets/icons/git.png'
import GitHub from '../assets/icons/github.png'
import Illustrator from '../assets/icons/illustrator.png'

const Skills = () => {
  return (
    <section id='section_skills' className='section_dl'>
      <h2>Skills</h2>
      <p>Outlined is a breakdown of the programming languages and tools I use in my workflow.</p>
      <h3>Programming languages</h3>
      <dl>
        <dt>Static / dynamic / query / markup languages:</dt>
        <div className='flex_row flex_row_hover'>
          <dd><img src={JavaScript} alt='JavaScript' /></dd>
          <dd><img src={PHP} alt='PHP' /></dd>
          <dd><img src={Java} alt='Java' /></dd>
          <dd><img src={MySQL} alt='MySQL' /></dd>
          <dd><img src={CSS} alt='CSS' /></dd>
          <dd><img src={HTML} alt='HTML' /></dd>
          <dd><img src={Markdown} alt='Markdown' /></dd>
        </div>
      </dl>
      <h3>Industry essentials</h3>
      <dl>
        <dt>Frameworks / environments:</dt>
        <div className='flex_row flex_row_hover'>
          <dd><img src={ReactLogo} alt='React' /></dd>
          <dd><img src={Node} alt='Node' /></dd>
          <dd><img src={Express} alt='Express' /></dd>
        </div>
        <dt>Version control:</dt>
        <div className='flex_row flex_row_hover'>
          <dd><img src={Git} alt='Git' /></dd>
          <dd><img src={GitHub} alt='GitHub' /></dd>
        </div>
        <dt>Design:</dt>
        <div className='flex_row flex_row_hover'>
          <dd><img src={SASS} alt='SASS' /></dd>
          <dd><img src={Illustrator} alt='Illustrator' /></dd>
        </div>
        <dt>Knowledge areas:</dt>
        <div className='flex_row flex_row_hover'>
          <dd>RESTful APIs</dd>
          <dd>RegEx</dd>
          <dd>Responsive design</dd>
          <dd>Batch</dd>
          <dd>Command line</dd>
        </div>
      </dl>
    </section>
  )
}

export default Skills