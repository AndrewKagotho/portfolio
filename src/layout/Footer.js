const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer>
      <span>Designed and developed by Andrew Kagotho</span>
      <span>Like what you see? <a href='mailto:andrewkagotho7@live.com'>Send an email</a>.</span>
      <span>Copyright &#169; {year}</span>
    </footer>
  )
}

export default Footer