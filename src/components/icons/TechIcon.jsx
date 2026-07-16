import React from 'react'

export default function TechIcon({ path, size = 22, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" role="img" aria-hidden="true" className={className}>
      <path d={path} />
    </svg>
  )
}
