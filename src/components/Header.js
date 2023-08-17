import { redirectSVG } from '../assets/icons.js'
import { profile } from '../data/profile.data.js'

const Header = () => {
  return (
    <>
      <header className='banner primary_banner'>
        <div className='banner__title banner__title_lg'>
          <h2>The portfolio of...</h2>
          <h1>{profile.name}</h1>
          <ul>
            {profile.tags.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className='contacts'>
          {profile.links.map((item) => (
            <a href={item.ref} target='_blank' rel='noopener noreferrer'>
              <span>{item.site}</span>
              {item.icon}
              <span>{item.username}</span>
              <sup>{redirectSVG}</sup>
            </a>
          ))}
        </div>
      </header>
    </>
  )
}

export default Header
