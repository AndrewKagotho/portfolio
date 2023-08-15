import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Main from './views/Main'
import AllProjects from './views/Projects'
import ProjectView from './views/ProjectView'
import './styles/index.css'

export const AppContext = React.createContext()

const App = () => {
  const [selectedProject, setSelectedProject] = React.useState(1)
  const value = { selectedProject, setSelectedProject }

  return (
    <HashRouter>
      <AppContext.Provider value={value}>
        <Navbar value='primary' />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/projects' element={<AllProjects />} />
          <Route path='/project' element={<ProjectView />} />
        </Routes>
      </AppContext.Provider>
    </HashRouter>
  )
}

export default App
