import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import View from './views'
import Projects from './views/Projects'
import ProjectView from './views/ProjectView'
import './styles/index.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navbar value='primary' />}>
          <Route index element={<View />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
        <Route path='/project' element={<Navbar value='secondary' />}>
          <Route index element={<ProjectView />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
