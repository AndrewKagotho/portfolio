let showingNav = false

export const showNav = (menuRef, showMenuRef, closeMenuRef) => {
  if (!showingNav) {
    menuRef.current.style.top = '5vh'
    showMenuRef.current.style.visibility = 'hidden'
    showMenuRef.current.style.opacity = '0'
    closeMenuRef.current.style.visibility = 'visible'
    closeMenuRef.current.style.opacity = '1'
    showingNav = true
  } else {
    menuRef.current.style.top = '-7vh'
    showMenuRef.current.style.visibility = 'visible'
    showMenuRef.current.style.opacity = '1'
    closeMenuRef.current.style.visibility = 'hidden'
    closeMenuRef.current.style.opacity = '0'
    showingNav = false
  }
}
