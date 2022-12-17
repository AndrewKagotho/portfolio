const Footer = ({value}) => {

  const tag = (
    <>
      <span>Designed and developed by Andrew Kagotho</span>
      <span>Like what you see? Send an email.</span>
    </>
  )

  if(value === 'pri')
    return (
      <footer className='footer_pri'>
        {tag}
        <span>Illustrations courtesy of popsy.co</span>
      </footer>
    )
  else if(value === 'sec')
    return <footer className='footer_sec'>{tag}</footer>
  else if(value === 'mid')
    return <footer className='footer_mid'>{tag}</footer>
}

export default Footer