import React from 'react'
import { Mail } from 'lucide-react'
import TechIcon from './icons/TechIcon'
import { GITHUB_PATH } from '../data/brandIcons'

export default function Footer(){
  return (
    <footer>
      <span>aryan-dt.vercel.app</span>
      <div className="footer-links">
        <a className="footer-link" href="https://github.com/Aryan-DT" target="_blank" rel="noreferrer"><TechIcon path={GITHUB_PATH} size={14} className="ui-icon" />GitHub</a>
        <a className="footer-link" href="mailto:aryandewett@gmail.com"><Mail size={14} strokeWidth={1.75} />Email</a>
      </div>
    </footer>
  )
}
