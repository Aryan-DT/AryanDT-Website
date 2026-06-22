import React from 'react'

export default function Hero(){
  return (
    <div className="hero" id="top">
      <div className="hero-badge">
        <span className="badge-dot" />
        Open to internships
      </div>
      <h1 className="hero-h1">
        Aryan Dewett.<br />
        <span className="dim">I build things.</span>
      </h1>
      <p className="hero-sub">uWaterloo '31. Focused on AI infrastructure and backend engineering.</p>
      <div className="hero-actions">
        <span className="btn-white" onClick={() => document.getElementById('projects').scrollIntoView({behavior:'smooth'})}>See my work</span>
        <span className="btn-outline" onClick={() => window.open('https://github.com/Aryan-DT','_blank')}>GitHub</span>
      </div>
    </div>
  )
}
