import React, { useState } from 'react'
import { assets } from '../../Images/assets'
import './Login.css'
import { login,signup } from '../../Firebase'

const Login = () => {

const[sign,setSign] = useState("Sign In")
const[name,setName]= useState();
const[email,setEmail]= useState();
const[Password, setPassword]= useState();

const auth_user= async(event)=> {
if(sign==="Sign In"){

  await login(email,Password);
}else{
  await signup(name, email, Password);
}

}

  return (
    <div className='login-main'>
      <div className='login-info'> 
      <img src={assets.Logo} alt="" />
<h1>{sign}</h1>
      <div className='login-text'>
        {sign==="Sign Up"? <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Username' /> : null}

<input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email' />
<input value={Password} onChange={(e)=>{setPassword(e.target.value)}} type="Password" placeholder='Password' />
<button onClick={auth_user} type='submit'>{sign}</button>
      </div>
      
<div className='login-help'>
<div className="remember">
    <input type="checkbox" />
    <label htmlFor="">Remember me</label>
</div>
<p>Need Help?</p>
</div>

<div className="form-switch">
    {sign==="Sign In"?<p onClick={()=>{setSign("Sign Up")}}>New to Netflix <span>Sign Up Now</span></p>
    :<p onClick={()=>{setSign("Sign In")}}>Already have account <span>Sign In Now</span></p>}



</div>
      </div>
    
    </div>
  )
}

export default Login;