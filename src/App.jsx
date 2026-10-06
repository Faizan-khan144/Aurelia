import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Rooms from './components/Rooms.jsx'
import Rituals from './components/Rituals.jsx'
import Gallery from './components/Gallery.jsx'
import Testimonials from './components/Testimonials.jsx'
import Journal from './components/Journal.jsx'
import CallToAction from './components/CallToAction.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-bone">
      <Header />
      <main>
        <Hero />
        <Story />
        <Rooms />
        <Rituals />
        <Gallery />
        <Testimonials />
        <Journal />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}