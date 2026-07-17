import React from 'react'
import TechIcon from './icons/TechIcon'
import TechLetter from './icons/TechLetter'
import { stackItems } from '../data/stackIcons'

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="sec-head">
        <h2 className="sec-title">Technical + Agentic Stack</h2>
        <div className="sec-line" />
      </div>
      <div className="tech-grid tech-stack-single">
        {stackItems.map(item => (
          <div
            className="tech-icon compact"
            key={item.name}
            style={item.hex ? { '--brand': `#${item.hex}` } : undefined}
          >
            {item.path ? <TechIcon path={item.path} /> : <TechLetter label={item.initials} />}
            <span className="tech-tooltip">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
