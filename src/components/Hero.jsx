import React from 'react'

export default function Hero(){
  return (
    <div className="hero" id="top">
      <h1 className="hero-h1">
        Aryan Dewett.<br />
        <span className="dim">I build things with systems and scale in mind.</span>
      </h1>
      <p className="hero-sub">Math + CS at the University of Waterloo. Engineering practical infrastructure for high-impact AI systems.</p>
      <div className="hero-actions">
        <span className="btn-white" onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>See my work</span>
        <span className="btn-outline" onClick={() => window.open('https://github.com/Aryan-DT','_blank')}>GitHub</span>
      </div>
    </div>
  )
}
