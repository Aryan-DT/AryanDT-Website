import React from 'react'

const coreStack = [
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
]

const agenticStack = [
  { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'NumPy / Pandas', logo: 'https://img.icons8.com/ios-filled/100/ffffff/matrix.png' },
  { name: 'FastAPI / Uvicorn', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'LangGraph', logo: 'https://img.icons8.com/ios-filled/100/ffffff/flow-chart.png' },
  { name: 'Model Context Protocol', logo: 'https://img.icons8.com/ios-filled/100/ffffff/bridge.png' },
]

const stackItems = [...coreStack, ...agenticStack]

export default function Stack() {
  return (
    <section className="section" id="stack">
      <div className="sec-head">
        <span className="sec-title">Technical + Agentic Stack</span>
        <div className="sec-line" />
      </div>
      <div className="tech-grid tech-stack-single">
        {stackItems.map(item => (
          <div className="tech-icon compact" key={item.name}>
            <img src={item.logo} alt={item.name} loading="lazy" />
            <span className="tech-tooltip">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
