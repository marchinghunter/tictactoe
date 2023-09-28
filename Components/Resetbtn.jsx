import React from 'react'
import '../Style/Resetbtn.css'

const Resetbtn = ({resetHandler}) => {
  return (
    <>
        <button onClick={resetHandler} className='rstbtn'>Reset Game</button>
    </>
  )
}

export default Resetbtn