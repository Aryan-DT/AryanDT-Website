import React from 'react'
import TechIcon from './icons/TechIcon'
import { GITHUB_PATH } from '../data/brandIcons'

export default function Hero(){
  return (
    <div className="hero" id="top">
      <h1 className="hero-h1">
        Aryan Dewett.<br />
        <span className="dim">I build things with systems and scale in mind.</span>
      </h1>
      <p className="hero-sub">Math + CS at the University of Waterloo. Engineering practical infrastructure for high-impact AI systems.</p>
      <div className="hero-actions">
        <a className="btn-primary" href="#projects">See my work</a>
        <a className="btn-outline" href="https://github.com/Aryan-DT" target="_blank" rel="noreferrer"><TechIcon path={GITHUB_PATH} size={14} className="ui-icon" />GitHub</a>
      </div>
    </div>
  )
}
