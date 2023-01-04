import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Main from './views/Main'
import Projects from './views/Projects'
import ProjectView from './views/ProjectView'
import './styles/index.css'

export const AppContext = React.createContext()

const App = () => {

  const [project, setProject] = React.useState(1)
  const value = {project, setProject}

  return (
    <AppContext.Provider value={value}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Navbar value='primary' />}>
            <Route index element={<Main />} />
            <Route path='/projects' element={<Projects />} />
          </Route>
          <Route path='/project' element={<Navbar value='secondary' />}>
            <Route index element={<ProjectView />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppContext.Provider>
  )
}

export default App
