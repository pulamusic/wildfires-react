import React from 'react'
import heliocentric from './heliocentric.jpg'

function Header() {
  return (
    <header>
      <img src="./assets/heliocentric.jpg" alt={heliocentric} />
      <h1>Current wildfires on the U.S. West Coast</h1>
      <h2>playing around with Google Maps and NASA APIs</h2>

      <p>This project started as part of a <a href="https://youtu.be/ontX4zfVqK8" target="_blank" rel="noreferrer"><span className="org-name">Traversy Media</span> YouTube tutorial</a>. It accesses data from <span className="org-name">Google Maps</span>'s <a href="https://developers.google.com/maps/documentation/javascript/overview" target="_blank" rel="noreferrer">JavaScript API</a> &amp; <span className="org-name">NASA</span>'s <a href="https://eonet.sci.gsfc.nasa.gov/docs/v2.1" target="_blank" rel="noreferrer">Earth Observatory Natural Event Tracker (EONET) API</a></p>

      <hr/>
    </header>
  )
}

export default Header
