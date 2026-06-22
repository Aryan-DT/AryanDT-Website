import React from 'react'

const infrastructure = [
  {
    name: 'PyTorch',
    label: 'Deep Learning',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
  },
  {
    name: 'TensorFlow',
    label: 'Compute Ops',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  },
  {
    name: 'NumPy / Pandas',
    label: 'Data Pipelines',
    logo: 'https://img.icons8.com/ios-filled/100/ffffff/matrix.png',
  },
  {
    name: 'FastAPI / Uvicorn',
    label: 'Serving',
    logo: 'https://img.icons8.com/ios-filled/100/ffffff/server.png',
  },
  {
    name: 'LangGraph',
    label: 'Reasoning Frameworks',
    logo: 'https://img.icons8.com/ios-filled/100/ffffff/flow-chart.png',
  },
  {
    name: 'Model Context Protocol',
    label: 'Connectivity',
    logo: 'https://img.icons8.com/ios-filled/100/ffffff/bridge.png',
  },
]

export default function Infrastructure() {
  return (
    <section className="section" id="stack">
      <div className="sec-head">
        <span className="sec-title">Agentic Infrastructure</span>
        <div className="sec-line" />
      </div>
      <div className="infra-grid">
        {infrastructure.map(item => (
          <div className="infra-card" key={item.name}>
            <div className="infra-icon">
              <img src={item.logo} alt={item.name} loading="lazy" />
            </div>
            <div>
              <div className="infra-label">{item.label}</div>
              <div className="infra-name">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
