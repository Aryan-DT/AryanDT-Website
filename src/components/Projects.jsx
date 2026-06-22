import React, {useEffect, useState} from 'react'
import ProjectCard from './ProjectCard'

export default function Projects(){
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const dur = 1200
    const target = 5000
    const start = performance.now()
    function tick(now){
      const p = Math.min((now - start) / dur, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(ease * target))
      if(p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
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
            <h2 className="proj-name">
              <a href="https://ont-track.vercel.app/" target="_blank" rel="noreferrer" className="proj-name-link">
                ONTrack
              </a>
            </h2>
            <p className="proj-desc">
              Ontario high school course planning tool. Prerequisite graph traversal, university program explorer backed by real admissions data, and a diagnostic survey.
            </p>
            <div className="proj-pills">
              <span className="pill">React</span>
              <span className="pill">Vite</span>
              <span className="pill">Deployment</span>
            </div>
            <div className="proj-meta">
              <div>
                <div className="proj-stat-n">{count.toLocaleString()}+</div>
                <div className="proj-stat-l">Active users</div>
              </div>
              <span className="proj-ext" onClick={()=> window.open('https://ont-track.vercel.app/','_blank')}>
                ont-track.vercel.app ↗
              </span>
            </div>
          </div>

          <div className="proj-visual">
            <div className="grid-dots" />
            <img src="/assets/image_b6ff20.png" alt="ONTrack project" className="proj-image" />
          </div>
        </div>
      </div>

      <div className="proj-grid">
        <ProjectCard
          tag="Automation"
          name="Sift AI"
          href="https://github.com/Aryan-DT/sift-ai"
          desc="Real-time data routing and automation engine. Connects Twilio, n8n, and custom Python pipelines."
          pills={["Python","React","Twilio","Railway"]}
        />
        <ProjectCard
          tag="AI Infra"
          name="SignalFirst"
          href="https://github.com/Aryan-DT/SignalFirst"
          desc="MCP-powered research engine. Automates founder research, generates structured reports, and creates structured spreadsheets and slides for outreach."
          pills={["FastMCP","LangGraph","Python"]}
        />
      </div>
    </section>
  )
}
