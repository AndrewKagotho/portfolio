import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layout/Navbar'
import ProjectNav from './layout/ProjectNav'
import View from './views'
import Projects from './views/Projects'
import ProjectView from './views/ProjectView'
import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<View />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
        <Route path='/project' element={<ProjectNav />}>
          <Route index element={<ProjectView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
