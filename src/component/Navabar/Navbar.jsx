import React from 'react'
import { assets } from '../../Images/assets'
import './Navbar.css'
import { logout } from '../../Firebase'

const Navbar = () => {
  return (
    <div className='Navbar-main'>
      <div className='left-side'>

      <img src={assets.Logo} alt="" />
<ul>
<li>Home</li>
<li>About US</li>
<li>New Movies</li>
<li>About us</li>
<li>New</li>
</ul>

      </div>
  
<div className='right-side'>
<span class="material-symbols-outlined icon ">search</span>
<p>Children</p>
<span class="material-symbols-outlined icon ">notifications</span>

<div className='profile'>
<img src={assets.face} alt="" />
<span class="material-symbols-outlined">arrow_downward</span>
<div className='dropdown'>
<p onClick={()=>{logout()}} >SignOut of Netflix</p>
</div>
</div>

</div>


    </div>
  )
}

export default Navbar
