import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/home'
import { Layout } from './Layout'
import { Contact } from './Pages/contact'
import { Projects } from './Pages/projects'
import { Resume } from './Pages/resume'
import { AboutMe } from './Pages/aboutMe'
import { Certifications } from './Pages/certifications'


function App() {
  return (
        <Routes>
          <Route element={<Layout/>}>
            <Route index path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />        
            <Route path="/resume" element={<Resume />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certifications" element={<Certifications />} />
          </Route>
        </Routes>
  )
}

export default App




