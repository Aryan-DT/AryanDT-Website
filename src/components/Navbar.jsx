import React from 'react'

export default function Navbar(){
  const scrollToId = id => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth'})
  }

  return (
    <nav>
      <span className="nav-logo" onClick={()=> scrollToId('top')}>Aryan DT</span>
      <div className="nav-links">
        <a onClick={()=> scrollToId('projects')}>Projects</a>
        <a onClick={()=> scrollToId('stack')}>Stack</a>
        <a onClick={()=> scrollToId('about')}>About</a>
      </div>
      <span className="nav-cta" onClick={()=> scrollToId('about')}>Get in touch</span>
    </nav>
  )
}
