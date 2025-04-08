import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ProjectsLink from './components/ProjectsLink'

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProjectsLink />
    </BrowserRouter>
  )
}

export default App
