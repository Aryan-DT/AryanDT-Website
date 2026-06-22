import React from 'react'

export default function Footer(){
  return (
    <footer>
      <span>aryan-dt.vercel.app</span>
      <div className="footer-links">
        <span className="footer-link" onClick={()=> window.open('https://github.com/Aryan-DT','_blank')}>GitHub</span>
        <span className="footer-link" onClick={()=> window.open('https://www.linkedin.com/in/aryan-dt','_blank')}>LinkedIn</span>
        <span className="footer-link" onClick={()=> window.open('https://twitter.com/aryan_dt','_blank')}>X</span>
        <span className="footer-link" onClick={()=> window.open('mailto:aryandewett@gmail.com','_blank')}>Email</span>
      </div>
    </footer>
  )
}
