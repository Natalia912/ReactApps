import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Download from './components/Download'
import Questions from './components/Questions'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Questions />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
