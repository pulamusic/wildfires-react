import React from 'react'

const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <ul>
        <li><span className="output-title">ID:</span> <span className="output">{ info.id }</span></li>
        <li><span className="output-title">Title:</span> <span className="output">{ info.title }</span></li>
      </ul>
    </div>
  )
}

export default LocationInfo
