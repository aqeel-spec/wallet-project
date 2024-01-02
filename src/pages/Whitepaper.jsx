import React from 'react'
import MoussCybertruck from '../components/CyberTruck'

const Whitepaper = () => {
  return (
    <div className="app-container">
      {/* Use the SVG container as a background */}
      <div className="svg-background">
        <MoussCybertruck />
      </div>
      {/* Your other content goes here */}
    </div>
  )
}

export default Whitepaper