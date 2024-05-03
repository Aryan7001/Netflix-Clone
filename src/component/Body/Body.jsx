import React from 'react'
import { ass } from '../../Images/assets';
import { assets } from '../../Images/assets';
import './Body.css'

const Body = () => {
  return (
    <div className='body-main'>
      <img src={ass.background} alt="" />

      <div className='caption'>
      <img src={assets.name} alt="" />
      <p>A film – also called a movie, motion picture, moving picture, picture, photoplay or (slang) flick – is a work of visual art that simulates experiences<br/> and otherwise communicates ideas, stories, perceptions, feelings, beauty, or atmosphere through the use of moving images.</p>
      <button>▶Play</button>
      <button>ℹ️ info</button>

      </div>
     
    </div>
  )
}

export default Body;
