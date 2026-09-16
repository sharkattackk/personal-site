import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import "./index.css"
import Footer from './components/Footer/Footer'
import TimelineSection from './components/TimelineSection/TimelineSection'
import FieldGallery from './components/FieldGallery/FieldGallery'
import AboutSection from './components/AboutSection/AboutSection'

function App() {

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div id="home" className="scroll-smooth font-sans">
      <NavBar toggleDarkMode={toggleDarkMode} />
      <div className="flex flex-col">
        <HeroSection />
        <div id="field">
          <FieldGallery />
        </div>
        <div id="journey">
          <TimelineSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
