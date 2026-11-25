import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import "./index.css"
import Footer from './components/Footer/Footer'
import TimelineSection from './components/TimelineSection/TimelineSection'
import FieldGallery from './components/FieldGallery/FieldGallery'
import AboutSection from './components/AboutSection/AboutSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

function App() {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div id="home" className="font-sans">
      <NavBar toggleDarkMode={toggleDarkMode} />
      <HeroSection />
      <FieldGallery />
      <TimelineSection />
      <ProjectsSection />
      <AboutSection />
      <Footer />
    </div>
  )
}

export default App
