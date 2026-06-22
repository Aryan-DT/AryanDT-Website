import React, {useEffect, useRef, useState} from 'react'
import ProjectCard from './ProjectCard'

const techs = [
  {name:'Python',     logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'},
  {name:'TypeScript', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'},
  {name:'JavaScript', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'},
  {name:'React',      logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'},
  {name:'Vite',       logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg'},
  {name:'HTML5',      logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'},
  {name:'CSS3',       logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'},
  {name:'FastAPI',    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'},
  {name:'Node.js',    logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'},
  {name:'PostgreSQL', logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'},
  {name:'Git',        logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'},
  {name:'Vercel',     logo:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'},
];

export default function Projects(){
  const [count, setCount] = useState(0)
  const cntRef = useRef(null)

  useEffect(()=>{
    const dur = 1200, target = 5000
    const start = performance.now()
    function tick(now){
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(ease * target))
      if(p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  },[])

  useEffect(()=>{
    const grid = document.getElementById('stack-grid')
    if(!grid) return
    grid.innerHTML = ''
    techs.forEach(t => {
      const el = document.createElement('div')
      el.className = 'tech-icon'
      el.innerHTML = `<img src="${t.logo}" alt="${t.name}" loading="lazy"><span class="tech-tooltip">${t.name}</span>`
      grid.appendChild(el)
    })
  },[])

  return (
    <section className="section" id="projects">
      <div className="sec-head">
        <span className="sec-title">Projects</span>
        <div className="sec-line" />
      </div>

      <div className="proj-featured">
        <div className="proj-featured-inner">
          <div className="proj-content">
            <span className="proj-tag">Flagship</span>
            <h2 className="proj-name">ONTrack</h2>
            <p className="proj-desc">Ontario high school course planning tool. Prerequisite graph traversal, university program explorer backed by real admissions data, and a diagnostic survey. Built it because it didn't exist.</p>
            <div className="proj-pills">
              <span className="pill">React</span>
              <span className="pill">Vite</span>
              <span className="pill">Vercel</span>
            </div>
            <div className="proj-meta">
              <div>
                <div className="proj-stat-n" id="cnt">{count.toLocaleString()}+</div>
                <div className="proj-stat-l">Active users</div>
              </div>
              <span className="proj-ext" onClick={()=> window.open('https://ont-track.vercel.app/','_blank')}>ont-track.vercel.app ↗</span>
            </div>
          </div>
          <div className="proj-visual">
            <div className="grid-dots" />
            <svg width="170" height="140" viewBox="0 0 170 140" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'relative',zIndex:1,opacity:0.55}}>
              <circle cx="85" cy="20" r="8" stroke="#fff" strokeWidth="1"/>
              <circle cx="42" cy="65" r="6.5" stroke="#fff" strokeWidth="1"/>
              <circle cx="128" cy="65" r="6.5" stroke="#fff" strokeWidth="1"/>
              <circle cx="18" cy="112" r="5" stroke="#fff" strokeWidth="1"/>
              <circle cx="66" cy="112" r="5" stroke="#fff" strokeWidth="1"/>
              <circle cx="104" cy="112" r="5" stroke="#fff" strokeWidth="1"/>
              <circle cx="152" cy="112" r="5" stroke="#fff" strokeWidth="1"/>
              <line x1="85" y1="28" x2="42" y2="58" stroke="#fff" strokeWidth="0.75"/>
              <line x1="85" y1="28" x2="128" y2="58" stroke="#fff" strokeWidth="0.75"/>
              <line x1="42" y1="72" x2="18" y2="107" stroke="#fff" strokeWidth="0.75"/>
              <line x1="42" y1="72" x2="66" y2="107" stroke="#fff" strokeWidth="0.75"/>
              <line x1="128" y1="72" x2="104" y2="107" stroke="#fff" strokeWidth="0.75"/>
              <line x1="128" y1="72" x2="152" y2="107" stroke="#fff" strokeWidth="0.75"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="proj-grid">
        <ProjectCard tag="Automation" name="Sift AI" desc="Real-time data routing and automation engine. Connects Twilio, n8n, and custom Python pipelines." pills={["Python","React","Twilio","Railway"]} />
        <ProjectCard tag="AI Infra" name="SignalFirst" desc={`MCP-powered research engine. Automates founder research, generates multi-company reports, and creates structured spreadsheets and PowerPoint decks for outreach.`} pills={["FastMCP","Claude API","Python"]} />
      </div>
    </section>
  )
}
