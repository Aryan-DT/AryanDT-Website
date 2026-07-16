import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav>
      <a className="nav-logo" href="#top">Aryan DT</a>
      <div className={`nav-links${open ? ' open' : ''}`} id="nav-links">
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a href="#stack" onClick={close}>Stack</a>
        <a href="#about" onClick={close}>About</a>
      </div>
      <div className="nav-right">
        <a className="nav-cta" href="#about">Get in touch</a>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(o => !o)}
        >
          {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
        </button>
      </div>
    </nav>
  )
}
