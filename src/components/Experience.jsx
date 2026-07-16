import React from 'react'

export default function Experience(){
  return (
    <section className="section" id="experience">
      <div className="sec-head">
        <h2 className="sec-title">Experience</h2>
        <div className="sec-line" />
      </div>

      <div className="exp-card">
        <div className="exp-head">
          <div>
            <h3 className="exp-role">AI Engineer</h3>
            <div className="exp-company">BrandVersa</div>
          </div>
          <div className="exp-meta">
            <div className="exp-dates">June 2026 – Present</div>
            <div className="exp-location">San Diego, CA (Remote)</div>
          </div>
        </div>
        <p className="exp-summary">
          Designed and built a production outbound sales automation system for BrandVersa, integrating Anthropic's Claude API as a live AI reply classifier into a real business workflow. Runs entirely on Google Sheets, Gmail API, Google Apps Script, and the Google Places API.
        </p>
        <ul className="exp-bullets">
          <li>AI reply classifier routes inbound leads by sentiment: Interested, Not Now, Objection, Wrong Contact</li>
          <li>Multi-step outreach and follow-up sequencing, fully automated on a fixed schedule</li>
          <li>Lead sourcing pipeline via the Google Places API for automated local business discovery</li>
          <li>Referral partner tracking with auto-calculating commission logic</li>
          <li>Booking and reporting automation via a Cal.com webhook integration</li>
        </ul>
        <p className="exp-summary" style={{marginBottom:0}}>
          Delivered as a complete, documented, production system in active use, with full setup documentation and recorded training walkthroughs for non-technical end users.
        </p>
      </div>
    </section>
  )
}
