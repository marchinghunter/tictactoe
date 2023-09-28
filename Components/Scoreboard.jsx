import React from 'react'
import '../Style/Scoreboard.css'

const Scoreboard = ({xscore,oscore,isXplaying}) => {
  let whoplaying = isXplaying ? 'xplaying':'oplaying';
  return (
    <div className={`scoreboard ${whoplaying}`}>
        <span className={`scores xscore`}>X-{xscore}</span>
        <span className={`scores oscore`}>O-{oscore}</span>
    </div>
  )
}

export default Scoreboard