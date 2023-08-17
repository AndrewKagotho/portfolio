import { useRef, forwardRef } from 'react'
import { languages, tools } from '../data/tech.data'

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
            {languages.map((item) => (
              <Tile
                name={item.name}
                icon={item.icon}
                style={{ scale: item.scale }}
                ref={toastRef}
                key={item.name}
              />
            ))}
          </div>
        </dl>
        <h3>Industry</h3>
        <dl>
          <dt>Tools / frameworks / libraries:</dt>
          <div className='flex_row flex_row_hover'>
            {tools.map((item) => (
              <Tile
                name={item.name}
                icon={item.icon}
                style={{ scale: item.scale }}
                ref={toastRef}
                key={item.name}
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

const Tile = forwardRef(({ name, style, icon: Icon }, ref) => {
  const displayToast = (val) => {
    ref.current.style.opacity = '1'
    ref.current.textContent = val
  }
  const hideToast = () => (ref.current.style.opacity = '0')
  return (
    <dd onMouseOver={() => displayToast(name)} onMouseOut={hideToast}>
      <Icon style={style} />
    </dd>
  )
})
