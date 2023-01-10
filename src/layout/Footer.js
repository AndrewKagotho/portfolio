const Footer = ({value}) => {

  const year = new Date().getFullYear()

  const closingTag = (
    <span>Copyright &#169; {year}</span>
  )

  const openingTag = (
    <div>
      <span>Designed and developed by Andrew Kagotho</span>
      <span>Like what you see? <a href='mailto:andrewkagotho7@live.com'>Send an email</a>.</span>
    </div>
  )

  if(value === 'pri')
    return (
      <footer>
        {openingTag}
        {closingTag}
      </footer>
    )
  else if(value === 'sec')
    return <footer className='footer_sec'>{openingTag}<div>{closingTag}</div></footer>
  else if(value === 'mid')
    return <footer className='footer_sec footer_center'>{openingTag}<div>{closingTag}</div></footer>
}

export default Footer