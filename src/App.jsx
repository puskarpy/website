import Header from "./components/Header"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import ParticlesBackground from "./Particles"

function App() {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
      style={{ zIndex: 0 }}
    >
      <ParticlesBackground />
      
      <div className="relative z-20">
        <Header />
        <Home />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default App