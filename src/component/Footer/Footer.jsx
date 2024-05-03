import React from 'react'
import {  assets } from '../../Images/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-icon'>
<img src={assets.facebook} alt="" />
<img src={assets.twitter} alt="" />
<img src={assets.facebook} alt="" />
<img src={assets.twitter} alt="" />
<img src={assets.facebook} alt="" />
<img src={assets.twitter} alt="" />
<img src={assets.facebook} alt="" />
<img src={assets.twitter} alt="" />
      </div>
<div className='footer-text'>
    <ul>
    <li>Audio Description</li>
<li>Jobs</li>
<li>Entertainment</li>
<li>Movies</li>
<li>Occupation</li>
<li>Creativity</li>
<li>Labour</li>
<li>Actor</li>
<li>Actress</li>
<li>Animation</li>
<li>Whole</li>
<li>Time</li>
    </ul>
<p>@copyright by Aryan Thapa</p>
</div>

    </div>
  )
}

export default Footer
