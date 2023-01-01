import React from 'react'
import HTML from '../assets/images/html.png'
import CSS from '../assets/images/css.png'
import JavaScript from '../assets/images/javascript.png'
import Node from '../assets/images/node.png'
import Express from '../assets/images/express.png'
import MySQL from '../assets/images/mysql.png'
import PHP from '../assets/images/php.png'
import ReactLogo from '../assets/images/react.png'
import SASS from '../assets/images/sass.png'
import Java from '../assets/images/java.png'
import Markdown from '../assets/images/markdown.png'
import Git from '../assets/images/git.png'
import GitHub from '../assets/images/github.png'

const Tech = () => {

  const toastRef = React.useRef()

  const displayToast = (arg) => {
    toastRef.current.style.opacity = '1'
    toastRef.current.textContent = arg
  }

  const hideToast = () => toastRef.current.style.opacity = '0'

  return (
    <>
      <section id='section_tech'>
        <h2>Technologies</h2>
        <p>A breakdown of the programming languages and tools I use in my workflow.</p>
        <h3>Programming languages</h3>
        <dl>
          <dt>Static / dynamic / query / markup languages:</dt>
          <div className='flex_row flex_row_hover'>
            <dd onMouseOver={() => displayToast('JavaScript')} onMouseLeave={hideToast}><img src={JavaScript} alt='JavaScript' /></dd>
            <dd onMouseOver={() => displayToast('PHP')} onMouseLeave={hideToast}><img src={PHP} alt='PHP' /></dd>
            <dd onMouseOver={() => displayToast('Java')} onMouseLeave={hideToast}><img src={Java} alt='Java' /></dd>
            <dd onMouseOver={() => displayToast('MySQL')} onMouseLeave={hideToast}><img src={MySQL} alt='MySQL' /></dd>
            <dd onMouseOver={() => displayToast('CSS3')} onMouseLeave={hideToast}><img src={CSS} alt='CSS' /></dd>
            <dd onMouseOver={() => displayToast('HTML5')} onMouseLeave={hideToast}><img src={HTML} alt='HTML' /></dd>
            <dd onMouseOver={() => displayToast('Markdown')} onMouseLeave={hideToast}><img src={Markdown} alt='Markdown' /></dd>
          </div>
        </dl>
        <h3>Industry essentials</h3>
        <dl>
          <dt>Frameworks / environments:</dt>
          <div className='flex_row flex_row_hover'>
            <dd onMouseOver={() => displayToast('React JS')} onMouseLeave={hideToast}><img src={ReactLogo} alt='React' /></dd>
            <dd onMouseOver={() => displayToast('Node JS')} onMouseLeave={hideToast}><img src={Node} alt='Node' /></dd>
            <dd onMouseOver={() => displayToast('Express JS')} onMouseLeave={hideToast}><img src={Express} alt='Express' /></dd>
            <dd onMouseOver={() => displayToast('SASS/SCSS')} onMouseLeave={hideToast}><img src={SASS} alt='SASS' /></dd>
          </div>
          <dt>DevOps:</dt>
          <div className='flex_row flex_row_hover'>
            <dd onMouseOver={() => displayToast('Git')} onMouseLeave={hideToast}><img src={Git} alt='Git' /></dd>
            <dd onMouseOver={() => displayToast('GitHub')} onMouseLeave={hideToast}><img src={GitHub} alt='GitHub' /></dd>
          </div>
          <dt>Knowledge areas:</dt>
          <div className='flex_row flex_row_hover'>
            <dd>Databases</dd>
            <dd>RESTful APIs</dd>
            <dd>CLI</dd>
            <dd>Responsive design</dd>
            <dd>RegEx</dd>
            <dd>Batch</dd>
          </div>
          <dt>Extras:</dt>
          <div className='flex_row flex_row_hover'>
            <dd>Graphic design (Adobe Illustrator)</dd>
          </div>
        </dl>
      </section>
      <span ref={toastRef} className='toast_text'></span>
    </>
  )
}

export default Tech