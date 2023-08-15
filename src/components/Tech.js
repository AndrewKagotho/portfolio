import { useRef, forwardRef } from 'react'
import {
  languageIcons,
  languageNames,
  toolsIcon,
  toolNames
} from './tech.resources'

const Tech = () => {
  const toastRef = useRef()

  return (
    <>
      <section id='section_tech'>
        <h2>Technologies</h2>
        <p>
          Working experience with the undermentioned programming languages and
          tools.
        </p>
        <h3>Programming languages</h3>
        <dl>
          <dt>Static / dynamic / query / markup languages:</dt>
          <div className='flex_row flex_row_hover'>
            {languageNames.map((item, index) => (
              <Tile
                style={{ scale: '1.2' }}
                name={item}
                element={languageIcons[index]}
                ref={toastRef}
                key={item}
              />
            ))}
          </div>
        </dl>
        <h3>Industry</h3>
        <dl>
          <dt>Tools / frameworks / libraries:</dt>
          <div className='flex_row flex_row_hover'>
            {toolNames.map((item, index) => (
              <Tile
                name={item}
                element={toolsIcon[index]}
                ref={toastRef}
                key={item}
              />
            ))}
          </div>
        </dl>
      </section>
      <span ref={toastRef} className='toast_text'></span>
    </>
  )
}

export default Tech

const Tile = forwardRef(({ name, style, element: Element }, ref) => {
  const displayToast = (val) => {
    ref.current.style.opacity = '1'
    ref.current.textContent = val
  }
  const hideToast = () => (ref.current.style.opacity = '0')
  return (
    <dd onMouseOver={() => displayToast(name)} onMouseOut={hideToast}>
      <Element style={style} />
    </dd>
  )
})
