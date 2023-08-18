import { useRef, forwardRef, Fragment } from 'react'
import { techData } from '../data/tech.data'

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
        {techData.map((data, index) => (
          <Fragment key={index}>
            <h3>{data.section}</h3>
            {data.content.map((content, index) => (
              <dl key={index}>
                <dt>{content.title}:</dt>
                <div className='flex_row flex_row_hover'>
                  {content.list.map((item) => (
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
            ))}
          </Fragment>
        ))}
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
