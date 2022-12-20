let showingNav = false

export const showNav = (ref1, ref2, ref3) => {
  if(!showingNav) {
    ref1.current.style.top = '5vh'
    ref2.current.style.visibility = 'hidden'
    ref2.current.style.opacity = '0'
    ref3.current.style.visibility = 'visible'
    ref3.current.style.opacity = '1'
    showingNav = true
  }
  else if(showingNav) {
    ref1.current.style.top = '-7vh'
    ref2.current.style.visibility = 'visible'
    ref2.current.style.opacity = '1'
    ref3.current.style.visibility = 'hidden'
    ref3.current.style.opacity = '0'
    showingNav = false
  }
}