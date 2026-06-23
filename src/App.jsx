import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Infrastructure from './components/Infrastructure'
import Stack from './components/Stack'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Infrastructure />
        <Stack />
        <section className="section" id="about">
          <div className="sec-head">
            <span className="sec-title">About</span>
            <div className="sec-line" />
          </div>
          <div className="about-grid">
            <div className="about-photo-wrap">
              <div className="about-photo-card">
                <img src="/mirror_picture.jpg" alt="Portrait of Aryan Dewett" className="about-photo" />
              </div>
            </div>
            <div>
              <p className="about-p">
                Math + CS at the University of Waterloo. I live in Waterloo, ON, and I treat programming like a serious hobby: I enjoy sharp problems, systems thinking, and clean execution.
                Outside the terminal, I train MMA - BJJ, Muay Thai, and Judo - and I play soccer to keep the process grounded.
              </p>
              <div className="about-details">
                <div className="arow"><span className="arow-k">University</span><span className="arow-v">University of Waterloo</span></div>
                <div className="arow"><span className="arow-k">Location</span><span className="arow-v">Waterloo, ON</span></div>
                <div className="arow"><span className="arow-k">Focus</span><span className="arow-v">Agentic AI infrastructure</span></div>
                <div className="arow"><span className="arow-k">GitHub</span><span className="arow-v"><a className="footer-link" href="https://github.com/Aryan-DT" target="_blank" rel="noreferrer">Aryan-DT ↗</a></span></div>
                <div className="arow"><span className="arow-k">Email</span><span className="arow-v">aryandewett@gmail.com</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
