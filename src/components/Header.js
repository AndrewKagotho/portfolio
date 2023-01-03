const illustration = 'https://illustrations.popsy.co/sky/engineer.svg'

export const redirectSVG = (
  <sup>
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><g><path fillRule='evenodd' clipRule='evenodd' fill='#1D1D1D' d="M455.11,455.11H56.89V56.89H256V0H56.89C25.31,0,0,25.61,0,56.89v398.22C0,486.39,25.31,512,56.89,512h398.22 c31.28,0,56.89-25.61,56.89-56.89V256h-56.89V455.11z M312.89,0v56.89H415L135.39,336.5l40.11,40.11L455.11,97v102.11H512V0H312.89 z"/></g></svg>
  </sup> 
)
  
const Header = () => {
  return (
    <>
      <header className='banner primary_banner'>
        <div className='banner__image_container'><img src={illustration} alt=''/></div>
        <h1>Kagotho, Andrew G.</h1>
        <ul>
          <li>BASc. Applied Computer Technology</li>
          <li>Software Engineer</li>
          <li>Frontend Developer</li>
        </ul>
        <div className='contacts'>
          <a href='mailto:andrewkagotho7@live.com'>
            <span>Email</span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><g><path d="M0,109.7v292.7c0,20.5,16.6,36.3,36.3,36.3h439.4c20.5,0,36.3-16.6,36.3-36.3V109.7 c0-20.5-16.6-36.3-36.3-36.3H36.3C16.6,73.4,0,89.9,0,109.7z M476.5,109.7l-220.1,183l-220.1-183H476.5z M36.3,164.9L183,274.5 L36.3,385V164.9z M73.4,403.1l127.8-110.4l55.2,55.2l55.2-55.2l128.6,109.7H73.4V403.1z M476.5,385L329.8,274.5l146.7-109.7V385z"/></g></svg>
            <span>andrewkagotho7@live.com</span>
            {redirectSVG}
          </a>
          <a href='https://www.linkedin.com/in/andrew-kagotho-2447b0181' target='_blank' rel='noopener noreferrer'>
            <span>LinkedIn</span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><g><path d="M474.6,0H37.4C15.8,0,0,15.8,0,37.4v437.2C0,494.3,17.7,512,37.4,512h437.2c21.7,0,37.4-15.8,37.4-37.4V37.4 C512,15.8,494.3,0,474.6,0z M157.5,433.2H78.8V196.9h78.8V433.2z M118.2,165.4c-25.6,0-47.3-21.7-47.3-47.3s21.7-47.3,47.3-47.3 s47.3,21.7,47.3,47.3S143.8,165.4,118.2,165.4z M433.2,433.2h-78.8V315.1c0-31.5-7.9-63-39.4-63s-39.4,31.5-39.4,63v118.2h-78.8 V196.9h78.8v27.6h3.9c9.8-19.7,35.4-35.4,65-35.4c72.9,0,88.6,47.3,88.6,106.3V433.2z"/></g></svg>
            <span>Andrew Kagotho</span>
            {redirectSVG}
          </a>
          <a href='https://github.com/AndrewKagotho' target='_blank' rel='noopener noreferrer'>
            <span>GitHub</span>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><g><path d="M25.2,0h461.6c14,0,25.2,11.2,25.2,25.2v461.6c0,14-11.2,25.2-25.2,25.2H25.2 C11.2,512,0,500.8,0,486.8V25.2C0,11.2,11.2,0,25.2,0z"/><path className='path_no_fill' d="M217.3,406.6c0-3.7,0-14,0-28c-43.8,9.3-53.2-21.4-53.2-21.4c-7.5-18.7-17.7-23.3-17.7-23.3 c-14-10.3,0.9-10.3,0.9-10.3c15.9,0.9,24.2,16.8,24.2,16.8c14,25.2,37.3,17.7,45.7,13.1c1.9-10.3,5.6-17.7,10.3-21.4 c-35.4-3.7-71.8-17.7-71.8-80.2c0-17.7,6.5-31.7,15.9-43.8c-1.9-3.7-7.5-20.5,1.9-42.9c0,0,13.1-4.7,43.8,16.8 c12.1-3.7,26.1-5.6,39.2-5.6c13.1,0,27,1.9,39.2,5.6c29.8-20.5,42.9-16.8,42.9-16.8c8.4,22.4,2.8,39.2,1.9,42.9 c10.3,11.2,15.9,26.1,15.9,43.8c0,62.5-37.3,75.5-71.8,80.2c5.6,4.7,10.3,14.9,10.3,29.8c0,21.4,0,39.2,0,44.8 c0,4.7,2.8,9.3,11.2,7.5c62.5-21.4,108.2-82.1,108.2-153.9c0-89.5-70.9-162.3-157.6-162.3S98.9,170.7,98.9,260.2 c0,71.8,44.8,132.4,108.2,153.9C214.5,415.9,217.3,410.3,217.3,406.6z"/></g></svg>
            <span>Andrew G. Kagotho</span>
            {redirectSVG}
          </a>
        </div>
      </header>
    </>
  )
}

export default Header