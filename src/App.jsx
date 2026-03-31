import { useState, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Treatments from './components/Treatments'
import WhyChooseUs from './components/WhyChooseUs'
import Results from './components/Results'
import Doctors from './components/Doctors'
import WhatsAppCTA from './components/WhatsAppCTA'
import AppointmentForm from './components/AppointmentForm'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  // Intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const sections = document.querySelectorAll('.fade-in-section')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <TrustBar />
      <About />
      <Treatments />
      <WhyChooseUs />
      <Results />
      <Doctors />
      <WhatsAppCTA />
      <AppointmentForm />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default App
