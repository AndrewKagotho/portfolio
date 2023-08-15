import {
  redirectSVG,
  EmailSVG,
  LinkedInSVG,
  GitHubSVG
} from '../assets/icons.js'

const Header = () => {
  return (
    <>
      <header className='banner primary_banner'>
        <div className='banner__title banner__title_lg'>
          <h2>The portfolio of...</h2>
          <h1>Kagotho, Andrew G.</h1>
          <ul>
            <li>Full Stack Developer</li>
            <li>BSc. Applied Computer Technology</li>
          </ul>
        </div>
        <div className='contacts'>
          <a
            href='https://www.linkedin.com/in/andrew-k-2447b0181/'
            target='_blank'
            rel='noopener noreferrer'>
            <span>LinkedIn</span>
            {LinkedInSVG}
            <span>Andrew Kagotho</span>
            {redirectSVG}
          </a>
          <a
            href='https://github.com/AndrewKagotho'
            target='_blank'
            rel='noopener noreferrer'>
            <span>GitHub</span>
            {GitHubSVG}
            <span>Andrew G. Kagotho</span>
            {redirectSVG}
          </a>
          <a href='mailto:andrewkagotho7@live.com'>
            <span>Email</span>
            {EmailSVG}
            <span>andrewkagotho7@live.com</span>
            {redirectSVG}
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
