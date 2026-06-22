import React from 'react'

export default function ProjectCard({tag, name, desc, pills, ext}){
  return (
    <div className="proj-card">
      <span className="proj-tag">{tag}</span>
      <h3 className="proj-name">{name}</h3>
      <p className="proj-desc">{desc}</p>
      <div className="proj-pills" style={{marginTop:'1.25rem'}}>
        {pills.map(p => <span className="pill" key={p}>{p}</span>)}
      </div>
      {ext && <div style={{marginTop:'1rem'}}><span className="proj-ext" onClick={() => window.open(ext,'_blank')}>{ext} ↗</span></div>}
    </div>
  )
}
