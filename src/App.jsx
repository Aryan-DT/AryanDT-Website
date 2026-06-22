import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <section className="section" id="stack">
          <div className="sec-head">
            <span className="sec-title">Stack</span>
            <div className="sec-line" />
          </div>
          <div className="stack-grid" id="stack-grid" />
        </section>

        <section className="section" id="about">
          <div className="sec-head">
            <span className="sec-title">About</span>
            <div className="sec-line" />
          </div>
          <div className="about-grid">
            <p className="about-p">
              I'm from <strong>Mississauga, Ontario</strong>, starting at <strong>uWaterloo</strong> in fall 2026. I build things because I find problems I can't stop thinking about. ONTrack started as a tool I needed myself. The MCP engine was an excuse to understand the protocol from first principles.<br /><br />
              I care about the layer where AI models meet real production systems. Not demos. Shipped software.
            </p>
            <div>
              <div className="arow"><span className="arow-k">University</span><span className="arow-v">uWaterloo '31</span></div>
              <div className="arow"><span className="arow-k">Based in</span><span className="arow-v">Mississauga, ON</span></div>
              <div className="arow"><span className="arow-k">Focus</span><span className="arow-v">AI infra, backend</span></div>
              <div className="arow"><span className="arow-k">GitHub</span><span className="arow-v"><span style={{cursor:'pointer'}} onClick={()=> window.open('https://github.com/Aryan-DT','_blank')}>Aryan-DT ↗</span></span></div>
              <div className="arow"><span className="arow-k">Email</span><span className="arow-v">aryandewett@gmail.com</span></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
