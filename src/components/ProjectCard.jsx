import React from 'react'

export default function ProjectCard({tag, name, desc, pills, href}){
  return (
    <div className="proj-card">
      <span className="proj-tag">{tag}</span>
      <h3 className="proj-name">
        <a href={href} target="_blank" rel="noreferrer" className="proj-name-link">{name}</a>
      </h3>
      <p className="proj-desc">{desc}</p>
      <div className="proj-pills" style={{marginTop:'1.25rem'}}>
        {pills.map(p => <span className="pill" key={p}>{p}</span>)}
      </div>
    </div>
  )
}
